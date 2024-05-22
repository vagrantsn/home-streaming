import request, { RequestOptions } from "../../../../../request";
import { read } from "../../../config";
import { host } from "../../api";
import { GetApplicationsResponse } from "./types";

export const list = (options?: RequestOptions) => request.get<GetApplicationsResponse>({
  path: `${host}applications`,
  headers: () => ({
    'X-Api-Key': read().ApiKey,
  }),
}, options)
