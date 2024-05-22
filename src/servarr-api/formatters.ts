import { Field } from "./services/types/field";

export const recordToFields = (
  fields: Record<string, any>
): Field[] =>
  Object.entries(fields).map(([name, value]) => ({ name, value }));
