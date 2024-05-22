import * as yaml from 'yaml'
import path from 'path'
import fs from 'fs'

import { Prowlarr } from './tasks/prowlarr/types'

type YAMLConfig = {
  prowlarr: Prowlarr
}

export const read = (): YAMLConfig => {
  const filePath = path.resolve(__dirname, '../config.yml')
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

  return yaml.parse(fileContent)
}
