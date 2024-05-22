import { XMLParser } from 'fast-xml-parser'
import * as fs from 'fs'
import path from 'path'

type ProwlarrConfig = {
  ApiKey: string
}

const getConfig = (): ProwlarrConfig => {
  const parser = new XMLParser()

  const configPath = path.resolve(__dirname, '../../prowlarr/config/config.xml')
  const xmlContent = fs.readFileSync(configPath, { encoding: 'utf-8' })

  const parsed: { Config: ProwlarrConfig } = parser.parse(xmlContent)

  return parsed.Config
}

export default getConfig()
