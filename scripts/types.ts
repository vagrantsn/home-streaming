export type Container = {
  preconfig: () => void;
  setup?: () => Promise<void>;
}
