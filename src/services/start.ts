import { exec } from 'child_process'

export const run = () => new Promise((resolve, reject) => {
  exec('docker-compose up -d', (error) => {
    if (error) {
      return reject(error)
    }

    resolve(1)
  })
})
