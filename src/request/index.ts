import fetch from "isomorphic-fetch";

import { read } from "../tasks/prowlarr/config";

type ServiceParams = {
  path: string;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
};

const request = async <Response>(path: string | URL | Request, init: RequestInit) => {
  const response = await fetch(path, init);

  const isJsonResponse = response.headers.get('Content-Type') === 'application/json'

  let body: Response
  if (isJsonResponse) {
    body = Promise<Response> = await response.json()
  }

  if (!response.ok) {
    throw new Error(`${init.method} ${path} ${response.status} ${response.statusText} ${JSON.stringify(body)}`)
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
 get: <Response = any>({ path, headers = {} }: ServiceParams) =>
  request<Response>(path, {
    method: "GET",
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
 post: <Response = any>({ path, body = {}, headers = {} }: ServiceParams) =>
  request<Response>(path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
 delete: <Response = any>({ path, body = {}, headers = {} }: ServiceParams) =>
  request<Response>(path, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
}

export default requests
