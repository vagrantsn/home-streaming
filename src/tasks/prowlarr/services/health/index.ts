import request from "../../../../request";
import { BASE } from "../api";

export const status = () => request.get({
  path: `${BASE}health`
})
