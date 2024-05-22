import { exec } from 'child_process'
import { promisify } from 'util'
import ora from 'ora'

const execAsync = promisify(exec)

export const setup = async () => {
  const loader = ora('Pulling docker images').start()

  try {
    await execAsync('docker-compose pull')
    loader.succeed()
    loader.start('Starting containers')
    await execAsync('docker-compose up -d')
    loader.succeed()
  } catch (e) {
    loader.fail(`Something went wrong: ${e}`)
  }
}
