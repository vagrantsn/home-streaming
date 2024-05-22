import request, { RequestOptions } from "../../../../../request";
import { read } from "../../../config";
import { host } from "../../api";

import { BulkDeletePayload } from "./types";

export const remove = (body: BulkDeletePayload, options?: RequestOptions) => request.delete({
  path: `${host}applications/bulk`,
  body,
  headers: () => ({
    'X-Api-Key': read().ApiKey,
  }),
}, options)
