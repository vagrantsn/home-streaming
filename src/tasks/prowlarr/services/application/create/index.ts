import requests, { RequestOptions } from "../../../../../request";
import { fieldsFromYaml } from "../../../../../request/formatters";
import { read } from "../../../config";
import { host } from "../../api";
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
    path: `${host}applications`,
    body: defaultedBody,
    headers: () => ({
      'X-Api-Key': read().ApiKey,
    }),
  }, options)
}
