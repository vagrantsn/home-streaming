import { TaskGroup } from '../../task'

import * as preconfig from './tasks/pre-config'

const subscribe = (group: TaskGroup) => {
  group.subscribe('pre', preconfig)
}

export default subscribe
