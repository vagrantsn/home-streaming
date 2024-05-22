import requests, { ApiError, RequestParams } from "@servarr-api/rest";

import { Application } from "./types";

type ApplicationPayload = Omit<Application, "id">;
type ApplicationResponse = Application;

export const create = async (
  params: Omit<RequestParams<ApplicationPayload>, "path">
) => {
  try {
    const response = await requests.post<ApplicationResponse>({
      ...params,
      path: "applications",
    });

    return response
  } catch (e) {
    const error: ApiError = e

    const isDuplicateError = error.status === 400 && /should be unique/i.test(error.message)

    if (!isDuplicateError) {
      throw error
    }
  }
};
