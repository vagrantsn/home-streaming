import request from "../../request";
import { GetDownloadClientsResponse } from "./types";

export const list = () => request.get<GetDownloadClientsResponse>({
  path: 'downloadclient'
})
