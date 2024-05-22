import requests, { RequestOptions } from "../../../../../request";
import { host } from "../../api";
import { fieldsFromYaml } from "../../formatters";
import { ApplicationResource } from "../types";
import { CreateApplicationPayload } from "./types";

const defaults: Partial<ApplicationResource> = {
  syncLevel: 'fullSync',
  fields: [
    {
      name: 'syncCategories',
      value: [5000, 5010, 5020, 5030, 5040, 5045, 5050, 5090],
    },
    {
      name: 'animeSyncCategories',
      value: [5070],
    },
    {
      name: 'syncAnimeStandardFormatSearch',
      value: false,
    },
    {
      name: 'syncRejectBlocklistedTorrentHashesWhileGrabbing',
      value: false,
    },
  ],
}

export const create = (body: CreateApplicationPayload, options?: RequestOptions) => {
  const defaultedBody: ApplicationResource = {
    ...defaults,
    ...body,
    fields: fieldsFromYaml({ ...defaults.fields, ...body.fields }),
  }

  return requests.post({
    path: `applications`,
    body: defaultedBody,
  }, {
    ...options,
    host: host,
  })
}
