import { TaskGroup } from "../../task";

import * as preconfig from './tasks/pre-config'
import * as setup from './tasks/setup'

const subscribe = (group: TaskGroup) => {
  group.subscribe('pre', preconfig)
  group.subscribe('post', setup)
}

export default subscribe
