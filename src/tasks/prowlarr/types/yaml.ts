import { DownloadClientResource } from "../services/download-client/types";

export type DownloadClientConfig = Omit<DownloadClientResource, 'fields'> & {
  fields: Record<string, string | number | boolean>;
}
