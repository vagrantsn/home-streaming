export type ApplicationResource = {
  id?: number;
  configContract?: string;
  implementation?: string;
  fields?: {
    name: string;
    value: unknown;
  }[]
  implementationName?: string;
  name?: string;
  syncLevel?: 'disabled' | 'addOnly' | 'fullSync';
}
