import { TaskGroupsController } from "../../task";

import * as start from './tasks/start'
import * as setup from './tasks/setup'

const subscribe = (group: TaskGroupsController) => {
  group.subscribe('start', start)
  group.subscribe('applications', setup)
}

export default subscribe
