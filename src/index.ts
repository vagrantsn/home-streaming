import prowlarr from './tasks/prowlarr'
import qbittorrent from './tasks/qbittorrent'
import sonarr from './tasks/sonarr'

import * as start from './tasks/start'

import { TaskGroupsController, groupedTasks } from './task'

const containers = {
  prowlarr,
  qbittorrent,
  sonarr,
}

const subscribeTasks = (group: TaskGroupsController) => {
  Object.values(containers).map(subscribe => subscribe(group))
}

const run = async () => {
  const tasks = groupedTasks([
    { name: 'pre', tasks: [] },
    { name: 'start', tasks: [start] },
    { name: 'clean', tasks: [] },
    { name: 'post', tasks: [] }
  ])

  subscribeTasks(tasks)

  await tasks.run()
}

run()
