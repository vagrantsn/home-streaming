import requests, { RequestParams } from "@servarr-api/rest";

type ApplicationPayload = {
  ids?: number[];
};

export const remove = (params: RequestParams<ApplicationPayload>) =>
  requests.delete<void>({
    ...params,
    path: "applications/bulk",
  });
