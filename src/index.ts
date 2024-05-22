import clc from 'cli-color'
import ora from 'ora'

import prowlarr from './tasks/prowlarr'
import qbittorrent from './tasks/qbittorrent'

import { isError } from './errors'

const containers = {
  prowlarr,
  qbittorrent,
}

const run = async () => {
  const tasks = Object.entries(containers).map(([name, task]) => async () => {
    const loader = ora(`[${name}] ${clc.cyan('Setting up')}...`).start()

    try {
      await task()
      loader.succeed()
    } catch (error: unknown) {
      let message = `[${name}] ${clc.red('Setup failed')}`

      if (isError(error)) {
        message = `[${name}] ${clc.red('Setup failed')} ${error.message}`
      }

      loader.fail(message)
    }
  })

  await Promise.all(tasks.map(task => task()))
}

run()
