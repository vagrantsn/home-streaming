import request, { RequestOptions } from "../../../../../request";
import { host } from "../../api";
import { GetDownloadClientsResponse } from "./types";

export const list = (options?: RequestOptions) => request.get<GetDownloadClientsResponse>({
  path: `downloadclient`
}, {
  ...options,
  host: host,
})
