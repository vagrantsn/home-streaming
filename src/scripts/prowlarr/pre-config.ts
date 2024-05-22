import fs from 'fs'

import paths from './paths'

export const preconfig = () => {
  const configFileExists = fs.existsSync(paths.config.file)

  if (configFileExists) return;

  fs.mkdirSync(paths.config.folder, { recursive: true })
  fs.copyFileSync(paths.config.baseFile, paths.config.file)
}
