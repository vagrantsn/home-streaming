import fetch from "isomorphic-fetch";

import config from "./config";

type ServiceParams = {
  path: string;
  body: Record<string, unknown>;
  headers?: Record<string, unknown>;
};

const request = async (path: string | URL | Request, init: RequestInit) => {
  const response = await fetch(path, init);

  if (!response.ok) {
    throw new Error(`${init.method} ${path} ${response.status} ${response.statusText}`)
  }
};

export const post = ({ path, body, headers = {} }: ServiceParams) =>
  request(path, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      ...headers,
      "X-Api-Key": config.ApiKey,
    },
  });
