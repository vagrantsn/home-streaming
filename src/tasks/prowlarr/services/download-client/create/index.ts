import request from "../../../../../request";
import { BASE } from "../../api";
import { fieldsFromYaml } from "../../formatters";

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

export const create = (body: CreateDownloadClientPayload) => {
  const defaultedBody: DownloadClientResource = {
    ...defaults,
    ...body,
    categories: body.categories ?? defaults.categories,
    fields: fieldsFromYaml({ ...defaults.fields, ...body.fields }),
    tags: body.tags ?? defaults.tags,
  };

  return request.post({
    path: `${BASE}downloadclient`,
    body: defaultedBody,
  });
};
