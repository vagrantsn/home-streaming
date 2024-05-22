import clc from 'cli-color'
import ora from 'ora'

import * as prowlarr from './prowlarr'
import { isError } from './errors'

const servicesSetup = async () => {
  const services = {
    prowlarr
  }

  for (const [name, service] of Object.entries(services)) {
    const loader = ora(`[${name}] ${clc.cyan('Setting up')}...`).start()

    try {
      await service.setup()
      loader.succeed()
    } catch (error: unknown) {
      let message = `[${name}] ${clc.red('Setup failed')}`

      if (isError(error)) {
        message = `[${name}] ${clc.red('Setup failed')} ${error.message}`
      }

      loader.fail(message)
    }
  }
}

const run = async () => {
  await servicesSetup()
}

run()
