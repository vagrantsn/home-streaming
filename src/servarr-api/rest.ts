import fetch from "isomorphic-fetch";

import { RetryConfig, retryPromise } from "./retry";

export type RequestParams<Body = Record<string, unknown>> = Omit<
  RequestInit,
  "headers" | "body"
> & {
  path?: string;
  body?: Body | (() => Body);
  headers?: Record<string, unknown> | (() => Record<string, unknown>);
  host?: string;
  retry?: boolean | RetryConfig;
};

export class ApiError<T extends Record<string, unknown> = Record<string, unknown>> extends Error {
  method: string;
  path: string;
  status: number;
  statusText: string;
  responseBody: Record<string, unknown>;

  constructor(error: {
    method: string;
    status: number;
    statusText: string;
    path: string;
    message: string;
    responseBody: T
  }) {
    super(error.message);

    this.method = error.method;
    this.status = error.status;
    this.statusText = error.statusText;
    this.path = error.path;
    this.responseBody = error.responseBody;
  }

  toString(): string {
    return JSON.stringify(this)
  }
}

const defaultHeaders = {
  "Content-Type": "application/json",
};

type ErrorResponse = {
  propertyName: string;
  errorMessage: string;
  attemptedValue: string;
}[];

const isErrorResponse = (response: unknown): response is ErrorResponse =>
  Array.isArray(response) &&
  response.length > 0 &&
  "errorMessage" in response[0];

export type RequestHandler = <Response extends Record<string, unknown> = Record<string, unknown>>(
  params: RequestParams
) => Promise<Response>;

const request: RequestHandler = <Response extends Record<string, unknown>>({
  body,
  headers,
  path,
  retry,
  host,
  method,
  ...rest
}: RequestParams) => {
  const isRetrying = Boolean(retry);

  const getBody = typeof body === "function" ? body : () => body;
  const getHeaders = typeof headers === "function" ? headers : () => headers;

  const exec = async (): Promise<Response> => {
    const body = JSON.stringify(getBody());

    const headers = {
      ...defaultHeaders,
      ...getHeaders(),
    };

    const response = await fetch(`${host}${path}`, {
      ...rest,
      method,
      body,
      headers,
    });

    const isJsonResponse = /application\/json/.test(
      response.headers.get("Content-Type")
    );

    let responseBody: Response;
    if (isJsonResponse) {
      responseBody = await response.json();
    }

    if (!response.ok) {
      throw new ApiError({
        method,
        status: response.status,
        statusText: response.statusText,
        path: `${host}${path}`,
        responseBody,
        message: isErrorResponse(responseBody) ? responseBody[0].errorMessage : JSON.stringify(responseBody),
      });
    }

    return responseBody;
  };

  return isRetrying
    ? retryPromise(exec, typeof retry !== "boolean" && retry)
    : exec();
};

const rest =
  (method: string) =>
  <Response extends Record<string, unknown> = Record<string, unknown>>(params: RequestParams) =>
    request<Response>({
      ...params,
      method,
    });

const requests = {
  get: rest("GET"),
  post: rest("POST"),
  delete: rest("DELETE"),
  put: rest("PUT"),
};

export default requests;
