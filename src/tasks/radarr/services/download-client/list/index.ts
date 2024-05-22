import request, { RequestOptions } from "../../../../../request";
import { read } from "../../../config";
import { host } from "../../api";
import { GetDownloadClientsResponse } from "./types";

export const list = (options?: RequestOptions) => request.get<GetDownloadClientsResponse>({
  path: `${host}downloadclient`,
  headers: () => ({
    'X-Api-Key': read().ApiKey,
  }),
}, options)
