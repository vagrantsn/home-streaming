import request from "../../request";

import { BulkDeletePayload } from "./types";

export const remove = (body: BulkDeletePayload) => request.delete({
  path: 'downloadclient/bulk',
  body,
})
