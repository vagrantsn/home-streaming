import request, { RequestOptions } from "../../../../request";
import { host } from "../api";
import { read } from '../../config'

export const status = (options?: RequestOptions) => request.get({
  path: `${host}health`,
  headers: () => ({
    'X-Api-Key': read().ApiKey,
  }),
}, options)
