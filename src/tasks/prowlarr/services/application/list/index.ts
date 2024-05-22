import request from "../../../../../request";
import { BASE } from "../../api";
import { GetApplicationsResponse } from "./types";

export const list = () => request.get<GetApplicationsResponse>({
  path: `${BASE}applications`
})
