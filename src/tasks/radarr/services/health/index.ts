import request, { RequestOptions } from "../../../../request";
import { read } from "../../config";
import { host } from "../api";

export const status = (options?: RequestOptions) => request.get({
  path: `${host}health`,
  headers: () => ({
    'X-Api-Key': read().ApiKey,
  }),
}, options)
