import request, { RequestOptions } from "../../../../request";
import { host } from "../api";

export const status = (options?: RequestOptions) => request.get({
  path: `health`
}, {
  ...options,
  host: host,
})
