import request from "../../../../../request";

import { DownloadClientResource } from "../types";
import { CreateDownloadClientPayload } from "./types";

const defaults: Partial<CreateDownloadClientPayload> = {
  categories: [],
  enable: true,
  fields: {
    useSSl: false,
    category: "prowllar",
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

const getFieldsList = (
  fields: CreateDownloadClientPayload["fields"]
): DownloadClientResource["fields"] =>
  Object.entries(fields).map(([name, value]) => ({ name, value }));

export const create = (body: CreateDownloadClientPayload) => {
  const defaultedBody: DownloadClientResource = {
    ...defaults,
    ...body,
    categories: body.categories ?? defaults.categories,
    fields: getFieldsList({ ...defaults.fields, ...body.fields }),
    tags: body.tags ?? defaults.tags,
  };

  return request.post({
    path: "downloadclient",
    body: defaultedBody,
  });
};
