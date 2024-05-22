import { ApplicationResource } from "../services/application/types";
import { DownloadClientResource } from "../services/download-client/types";

export type DownloadClientConfig = Omit<DownloadClientResource, 'fields'> & {
  fields: Record<string, unknown>;
}

export type ApplicationConfig = Omit<ApplicationResource, 'fields'> & {
  fields: Record<string, unknown>
}

export type Prowlarr = {
  applications?: ApplicationConfig[]
  downloadClients?: DownloadClientConfig[]
}
