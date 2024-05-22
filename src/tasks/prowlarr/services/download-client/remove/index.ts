import request, { RequestOptions } from "../../../../../request";
import { host } from "../../api";

import { BulkDeletePayload } from "./types";

export const remove = (body: BulkDeletePayload, options?: RequestOptions) => request.delete({
  path: `downloadclient/bulk`,
  body,
}, {
  ...options,
  host: host,
})
