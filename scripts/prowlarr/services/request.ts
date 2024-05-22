import fetch from "isomorphic-fetch";

import config from "../config";

type ServiceParams = {
  path: string;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
};

const request = async <Response>(path: string | URL | Request, init: RequestInit) => {
  const response = await fetch(path, init);

  if (!response.ok) {
    throw new Error(`${init.method} ${path} ${response.status} ${response.statusText}`)
  }

  const json: Promise<Response> = response.json()
  return json;
};

const API = {
  base: `${config.host}/api/v1/`
}

export const post = <Response = any>({ path, body = {}, headers = {} }: ServiceParams) =>
  request<Response>(`${API.base}${path}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...headers,
      "X-Api-Key": config.ApiKey,
    },
  });
