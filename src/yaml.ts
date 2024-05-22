import * as yaml from 'yaml'
import path from 'path'
import fs from 'fs'

type ServiceYAMLConfig = {
  username: string
  password: string
}

type YAMLConfig = {
  prowlarr: ServiceYAMLConfig
  sonarr: ServiceYAMLConfig
  radarr: ServiceYAMLConfig
}

export const read = (): YAMLConfig => {
  const filePath = path.resolve(__dirname, '../config.yml')

  try {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
    return yaml.parse(fileContent)
  } catch (e) {
    if (/enoent/i.test(e.message)) {
      throw new Error('Config file not created. Create a config.yml file before starting the services.')
    }

    throw e
  }
}
