import { TaskGroupsController } from "../../task";

import * as preconfig from './tasks/pre-config'
import * as clean from './tasks/clean'
import * as start from './tasks/start'

const subscribe = (group: TaskGroupsController) => {
  group.subscribe('pre', preconfig)
  group.subscribe('clean', clean)
  group.subscribe('start', start)
}

export default subscribe
