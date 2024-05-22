import request from "../../../../../request";
import { BASE } from "../../api";

import { BulkDeletePayload } from "./types";

export const remove = (body: BulkDeletePayload) => request.delete({
  path: `${BASE}applications/bulk`,
  body,
})
