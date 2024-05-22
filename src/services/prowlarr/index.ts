import { TaskGroupsController } from "@src/task";

import * as clean from './tasks/clean'
import * as start from './tasks/start'
import * as setup from './tasks/setup'

const subscribe = (group: TaskGroupsController) => {
  group.subscribe('start', start)
  group.subscribe('clean', clean)
  group.subscribe('setup', setup)
}

export default subscribe
