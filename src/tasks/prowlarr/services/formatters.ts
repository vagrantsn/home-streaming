import { Field } from "./types";

export const fieldsFromYaml = (
  fields: Record<string, unknown>
): Field[] =>
  Object.entries(fields).map(([name, value]) => ({ name, value }));
