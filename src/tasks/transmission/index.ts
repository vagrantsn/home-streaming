import { TaskGroupsController } from '../../task'

import * as setup from './tasks/setup'

const subscribe = (group: TaskGroupsController) => {
  group.subscribe('post-setup', setup)
}

export default subscribe
