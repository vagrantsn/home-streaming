export const isError = (arg: any): arg is Error =>
  typeof arg === "object" &&
  "name" in arg &&
  "message" in arg &&
  "stack" in arg;
