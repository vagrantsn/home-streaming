import { createTasks } from "../../task";

import * as preconfig from './tasks/pre-config'
import * as setup from './tasks/setup'
import * as start from './tasks/start';

export default createTasks([
  preconfig,
  start,
  setup,
])
