type Category = {
  clientCategory?: string;
  categories: number[];
}

type Field = {
  name: string;
  value: string | number | boolean;
}

export type DownloadClientResource = {
  id: number;
  categories?: Category[];
  configContract?: string;
  enable: boolean;
  fields: Field[];
  implementation?: string;
  implementationName?: string;
  infoLink?: string;
  name?: string;
  presets: unknown[];
  priority: number;
  protocol: string;
  supportsCategories: boolean;
  tags?: number[];
}
