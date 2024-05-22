import { Field } from "../types";

type Category = {
  clientCategory?: string;
  categories: number[];
}

export type DownloadClientResource = {
  id?: number;
  categories?: Category[];
  configContract?: string;
  enable?: boolean;
  fields?: Field[];
  implementation?: string;
  implementationName?: string;
  infoLink?: string;
  name?: string;
  presets?: unknown[];
  priority?: number;
  protocol?: string;
  supportsCategories?: boolean;
  tags?: number[];
}
