import { execSync } from 'child_process'

export const run = () => {
  execSync('docker-compose up -d qbittorrent', { stdio: 'pipe' })
}
