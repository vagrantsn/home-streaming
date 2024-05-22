import fetch from "isomorphic-fetch";

import { read } from "../config";

type ServiceParams = {
  path: string;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
};

const request = async <Response>(path: string | URL | Request, init: RequestInit) => {
  const response = await fetch(path, init);

  const json: Promise<Response> = response.json()

  if (!response.ok) {
    throw new Error(`${init.method} ${path} ${response.status} ${response.statusText} ${JSON.stringify(json)}`)
  }

  return json;
};

const defaultHeaders = () => {
  const config = read()

  return {
    "X-Api-Key": config.ApiKey,
    'Content-Type': 'application/json',
  }
}

const API = () => {
  const config = read()

  return {
    base: `${config.host}/api/v1/`
  }
}

const requests = {
 get: <Response = any>({ path, headers = {} }: ServiceParams) =>
  request<Response>(`${API().base}${path}`, {
    method: "GET",
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
 post: <Response = any>({ path, body = {}, headers = {} }: ServiceParams) =>
  request<Response>(`${API().base}${path}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
 delete: <Response = any>({ path, body = {}, headers = {} }: ServiceParams) =>
  request<Response>(`${API().base}${path}`, {
    method: "DELETE",
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders(),
      ...headers,
    },
  }),
}

export default requests
