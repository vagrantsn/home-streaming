export type Task = {
  run: () => unknown | Promise<unknown>
}

export const createTasks = (tasks: Task[]) => {
  return async () => {
    for (const task of tasks) {
      await task.run()
    }
  }
}
