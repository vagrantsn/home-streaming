import prowlarr from './services/prowlarr'
import transmission from './services/transmission'
import sonarr from './services/sonarr'
import radarr from './services/radarr'

import * as start from './services/start'

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
    { name: 'start', tasks: [start] },
    { name: 'clean', tasks: [] },
    { name: 'setup', tasks: [] },
    { name: 'post-setup', tasks: [] },
  ])

  subscribeTasks(tasks)

  await tasks.run()
}

run()
