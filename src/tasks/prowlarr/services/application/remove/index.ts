import request, { RequestOptions } from "../../../../../request";
import { host } from "../../api";

import { BulkDeletePayload } from "./types";

export const remove = (body: BulkDeletePayload, options?: RequestOptions) => request.delete({
  path: `applications/bulk`,
  body,
}, {
  ...options,
  host: host,
})
