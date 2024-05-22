import { execSync } from 'child_process'
import clc from 'cli-color'
import ora from 'ora'

import * as prowlarr from './prowlarr'
import * as qbittorrent from './qbittorrent'

import { isError } from './errors'
import { Container } from './types'

const containers: Record<string, Container> = {
  prowlarr,
  qbittorrent,
}

const containersSetup = async () => {
  for (const [name, container] of Object.entries(containers)) {
    const loader = ora(`[${name}] ${clc.cyan('Setting up')}...`).start()

    try {
      await container.setup?.()
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

const containersPreconfig = () => {
  for (const container of Object.values(containers)) {
    container.preconfig()
  }
}

const run = async () => {
  containersPreconfig()

  execSync('docker-compose up -d qbittorrent prowlarr')

  await containersSetup()
}

run()
