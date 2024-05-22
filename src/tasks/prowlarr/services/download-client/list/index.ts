import request from "../../../../../request";
import { BASE } from "../../api";
import { GetDownloadClientsResponse } from "./types";

export const list = () => request.get<GetDownloadClientsResponse>({
  path: `${BASE}downloadclient`
})
