import fs from 'fs'
import path from 'path'

import paths from './paths'

export const preconfig = () => {
  const configFileExists = fs.existsSync(path.resolve(paths.configFolder, 'qBittorrent.conf'))

  if (configFileExists) return;

  fs.mkdirSync(paths.configFolder, { recursive: true })
  fs.copyFileSync(paths.configFile, path.resolve(paths.configFolder, 'qBittorrent.conf'))
}
