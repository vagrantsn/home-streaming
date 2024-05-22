import { Field } from "./endpoints/types/field";

export const recordToFields = (
  fields: Partial<Record<keyof Field, Field[keyof Field]>>
) => Object.entries(fields).map(([name, value]) => ({ name, value }));
