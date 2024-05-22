export const isError = (arg: unknown): arg is Error =>
  typeof arg === "object" &&
  "name" in arg &&
  "message" in arg &&
  "stack" in arg;
