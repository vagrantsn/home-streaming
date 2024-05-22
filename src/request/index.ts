import fetch from "isomorphic-fetch";

import { read } from "../tasks/prowlarr/config";

type ServiceParams = {
  path: string;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
};

export type RequestOptions = RequestInit & {
  host?: string;
  internal?: boolean;
};

export class ApiError extends Error {
  body: Record<string, any>

  constructor(message: string, body: Record<string, any>) {
    super(message)
    this.body = body
  }
}

const request = async <Response>(path: string | URL | Request, options: RequestOptions) => {
  const response = await fetch(`${options.host}${path}`, options);

  const isJsonResponse = response.headers.get('Content-Type') === 'application/json'

  let body: Response
  if (isJsonResponse) {
    body = Promise<Response> = await response.json()
  }

  if (!response.ok) {
    throw new ApiError(
      `${options.method} ${path} ${response.status} ${response.statusText} ${JSON.stringify(body)}`,
      body
    )
  }

  return body;
};

const defaultHeaders = () => {
  const config = read()

  return {
    "X-Api-Key": config.ApiKey,
    'Content-Type': 'application/json',
  }
}

const requests = {
 get: <Response = any>({ path, headers = {} }: ServiceParams, options?: RequestOptions) =>
  request<Response>(path, {
    ...options,
    method: "GET",
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
 post: <Response = any>({ path, body = {}, headers = {} }: ServiceParams, options?: RequestOptions) =>
  request<Response>(path, {
    ...options,
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
 delete: <Response = any>({ path, body = {}, headers = {} }: ServiceParams, options?: RequestOptions) =>
  request<Response>(path, {
    ...options,
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
}

export default requests
