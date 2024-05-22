import fetch from "isomorphic-fetch";

import { RetryConfig, retryPromise } from "./retry";

export type RequestParams<Body = Record<string, any>> = Omit<
  RequestInit,
  "headers" | "body"
> & {
  path?: string;
  body?: Body | (() => Body);
  headers?: Record<string, any> | (() => Record<string, any>);
  host?: string;
  retry?: boolean | RetryConfig;
};

export class ApiError extends Error {
  body: Record<string, any>;

  constructor(message: string, body: Record<string, any>) {
    super(message);
    this.body = body;
  }
}

const defaultHeaders = {
  "Content-Type": "application/json",
};

export type RequestHandler = <Response = any>(
  params: RequestParams
) => Promise<Response>;

const request: RequestHandler = <Response>({
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

    try {
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
        const errorMessage = {
          path: `${method} ${host}${path}`,
          status: `${response.status} ${response.statusText}`,
          body: getBody() || {},
          headers: getHeaders() || {},
          response: responseBody || {},
        };

        throw new ApiError(JSON.stringify(errorMessage), responseBody);
      }

      return responseBody;
    } catch (e) {
      throw new Error(`${e.message}`);
    }
  };

  return isRetrying
    ? retryPromise(exec, typeof retry !== "boolean" && retry)
    : exec();
};

const rest =
  (method: string) =>
  <Response = any>(params: RequestParams) =>
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
