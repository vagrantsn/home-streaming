import fetch from "isomorphic-fetch";

import { RetryConfig, retryPromise } from "./retry";

type ServiceParams = {
  path: string;
  body?: Record<string, any> | (() => Record<string, any>);
  headers?: Record<string, any> | (() => Record<string, any>);
};

export type RequestOptions = Omit<RequestInit, 'headers' | 'body'> & {
  retry?: boolean | RetryConfig;
};

export class ApiError extends Error {
  body: Record<string, any>

  constructor(message: string, body: Record<string, any>) {
    super(message)
    this.body = body
  }
}

const defaultHeaders = {
  'Content-Type': 'application/json',
}

const request = async <Response>(params: ServiceParams, options: RequestOptions) => {
  const isRetrying = Boolean(options.retry)

  const getBody = typeof params.body === 'function' ? params.body : () => params.body
  const getHeaders = typeof params.headers === 'function' ? params.headers : () => params.headers

  const exec = async (): Promise<Response> => {
    const body = JSON.stringify(getBody())
    const headers = {
      ...defaultHeaders,
      ...getHeaders(),
    }

    try {
      const response = await fetch(`${params.path}`, {
        ...options,
        body,
        headers,
      });

      const isJsonResponse = response.headers.get('Content-Type') === 'application/json'

      let responseBody: Response
      if (isJsonResponse) {
        responseBody = await response.json()
      }

      if (!response.ok) {
        const errorMessage = {
          path: `${options.method} ${params.path}`,
          status: `${response.status} ${response.statusText}`,
          body: getBody() || {},
          headers: getHeaders() || {},
          response: responseBody || {},
        }

        throw new ApiError(
          JSON.stringify(errorMessage),
          responseBody
        )
      }

      return responseBody;
    } catch (e) {
      throw e
    }
  }

  return isRetrying ? retryPromise(exec, typeof options.retry !== 'boolean' && options.retry) : exec()
};

const requests = {
 get: <Response = any>(params: ServiceParams, options?: RequestOptions) =>
  request<Response>(params, {
    ...options,
    method: "GET",
  }),
 post: <Response = any>(params: ServiceParams, options?: RequestOptions) =>
  request<Response>(params, {
    ...options,
    method: "POST",
  }),
 delete: <Response = any>(params: ServiceParams, options?: RequestOptions) =>
  request<Response>(params, {
    ...options,
    method: "DELETE",
  }),
}

export default requests
