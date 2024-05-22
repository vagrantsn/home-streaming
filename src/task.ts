import clc from "cli-color";
import ora from "ora";
import { isError } from "./errors";

export type Task = {
  run: () => unknown | Promise<unknown>
}

export type TasksGroup = {
  name: string;
  tasks: Task[];
}

export type TaskGroupsController = {
  groups: TasksGroup[],
  subscribe: (group: string, task: Task) => void
  run: () => Promise<void>
}

export const sequence = (tasks: Task[]) => {
  return async () => {
    for (const task of tasks) {
      await task.run()
    }
  }
}

export const groupedTasks = (initialGroups: TasksGroup[]): TaskGroupsController => {
  let groups = [...initialGroups]

  const subscribe: TaskGroupsController['subscribe'] = (group, task) => {
    const index = groups.findIndex(({ name }) => name === group)

    if (index === -1) {
      throw new Error(`Could not find tasks group ${group}`)
    }

    groups[index].tasks.push(task)
  }

  const run = async () => {
    for (const group of groups) {
      const loader = ora(`[${group.name}] ${clc.cyan('Running')}...`).start()

      try {
        const tasks = group.tasks.map(task => task.run())
        await Promise.all(tasks)
        loader.succeed()
      } catch (error: unknown) {
        let message = `[${group.name}] ${clc.red('Failed')}`

        if (isError(error)) {
          message = `[${group.name}] ${clc.red('Failed')} ${error.message}`
        }

        loader.fail(message)
      }
    }
  }

  return {
    groups,
    subscribe,
    run,
  }
}
