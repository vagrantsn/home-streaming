import { XMLParser } from 'fast-xml-parser'
import * as fs from 'fs'

import paths from './paths'

type SonarrConfig = {
  host: string;
  ApiKey: string
}

export const read = (): SonarrConfig => {
  const parser = new XMLParser()

  const xmlContent = fs.readFileSync(paths.config.file, { encoding: 'utf-8' })

  const parsed: { Config: SonarrConfig } = parser.parse(xmlContent)

  return {
    ...parsed.Config,
    host: 'http://radarr:7878',
  }
}
