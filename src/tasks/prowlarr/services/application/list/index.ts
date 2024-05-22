import request, { RequestOptions } from "../../../../../request";
import { host } from "../../api";
import { GetApplicationsResponse } from "./types";

export const list = (options?: RequestOptions) => request.get<GetApplicationsResponse>({
  path: `applications`
}, {
  ...options,
  host: host,
})
