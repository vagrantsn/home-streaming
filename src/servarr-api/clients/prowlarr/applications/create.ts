import requests, { RequestParams } from "@servarr-api/rest";

import { Application } from "./types";

type ApplicationPayload = Omit<Application, "id">;
type ApplicationResponse = Application;

export const create = (
  params: Omit<RequestParams<ApplicationPayload>, "path">
) =>
  requests.post<ApplicationResponse>({
    ...params,
    path: "applications",
  });
