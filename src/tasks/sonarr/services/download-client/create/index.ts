import request, { RequestOptions } from "../../../../../request";
import { fieldsFromYaml } from "../../../../../request/formatters";
import { read } from "../../../config";
import { host } from "../../api";

import { DownloadClientResource } from "../types";
import { CreateDownloadClientPayload } from "./types";

const defaults: Partial<CreateDownloadClientPayload> = {
  categories: [],
  enable: true,
  removeCompletedDownloads: false,
  removeFailedDownloads: false,
  fields: {
    useSSl: false,
    category: "sonarr",
    priority: 0,
    initialState: 0,
    sequentialOrder: false,
    firstAndLast: false,
    contentLayout: 0,
  },
  priority: 1,
  protocol: "torrent",
  supportsCategories: true,
  tags: [],
};

export const create = (body: CreateDownloadClientPayload, options?: RequestOptions) => {
  const defaultedBody: DownloadClientResource = {
    ...defaults,
    ...body,
    categories: body.categories ?? defaults.categories,
    fields: fieldsFromYaml({ ...defaults.fields, ...body.fields }),
    tags: body.tags ?? defaults.tags,
  };

  return request.post({
    path: `${host}downloadclient`,
    body: defaultedBody,
    headers: () => ({
      'X-Api-Key': read().ApiKey,
    }),
  }, options);
};
