import { Field } from "./endpoints/types/field";

export const recordToFields = (
  fields: Record<string, any>
): Field[] =>
  Object.entries(fields).map(([name, value]) => ({ name, value }));
