import * as yaml from 'yaml'
import path from 'path'
import fs from 'fs'

import { DownloadClientConfig } from './tasks/prowlarr/types/yaml'

type YAMLConfig = {
  prowlarr: {
    downloadClients: DownloadClientConfig[]
  }
}

export const read = (): YAMLConfig => {
  const filePath = path.resolve(__dirname, '../config.yml')
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

  return yaml.parse(fileContent)
}
