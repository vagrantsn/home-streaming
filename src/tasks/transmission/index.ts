import { TaskGroupsController } from '../../task'

import * as setup from './tasks/setup'

const subscribe = (group: TaskGroupsController) => {
  group.subscribe('downloaders', setup)
}

export default subscribe
