import prowlarr from './tasks/prowlarr'
import transmission from './tasks/transmission'
import sonarr from './tasks/sonarr'
import radarr from './tasks/radarr'

import * as start from './tasks/start'

import { TaskGroupsController, groupedTasks } from './task'

const containers = {
  prowlarr,
  transmission,
  sonarr,
  radarr,
}

const subscribeTasks = (group: TaskGroupsController) => {
  Object.values(containers).map(subscribe => subscribe(group))
}

const run = async () => {
  const tasks = groupedTasks([
    { name: 'pre', tasks: [] },
    { name: 'start', tasks: [start] },
    { name: 'clean', tasks: [] },
    { name: 'applications', tasks: [] },
    { name: 'downloaders', tasks: [] }
  ])

  subscribeTasks(tasks)

  await tasks.run()
}

run()
