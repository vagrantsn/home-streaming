import { execSync } from 'child_process'

export const run = () => {
  execSync('docker-compose up --quiet-pull -d prowlarr', { stdio: 'pipe' })
}
