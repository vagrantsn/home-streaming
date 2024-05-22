type Category = {
  clientCategory?: string;
  categories: number[];
}

type Field = {
  name: string;
  value: string | number | boolean;
}

export type DownloadClientPayload = Omit<DownloadClientResource, 'fields'> & {
  fields: Record<string, string | number | boolean>;
}

export type DownloadClientResource = {
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
