import { XMLParser } from 'fast-xml-parser'
import * as fs from 'fs'

import paths from './paths'

type ProwlarrConfig = {
  host: string;
  ApiKey: string
}

export const read = (): ProwlarrConfig => {
  const parser = new XMLParser()

  const xmlContent = fs.readFileSync(paths.config.file, { encoding: 'utf-8' })

  const parsed: { Config: ProwlarrConfig } = parser.parse(xmlContent)

  return {
    ...parsed.Config,
    host: 'http://prowlarr:9696',
  }
}
