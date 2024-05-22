export type HostConfig = {
  id: string
  bindAddress: string
  port: number
  enableSsl: boolean
  launchBrowser: boolean
  authenticationMethod: 'none' | 'basic' | 'forms' | 'external',
  authenticationRequired: 'enabled' | 'disabledForLocalAddresses',
  analyticsEnabled: boolean
  username: string
  password: string
  passwordConfirmation: string
  logLevel: string
  consoleLogLevel: string
  branch: string
  apiKey: string
  sslCertPath: string
  sslCertPassword: string
  urlBase: string
  instanceName: string
  applicationUrl: string
  updateAutomatically: boolean
  updateMechanism: 'builtin' | 'script' | 'external' | 'apt' | 'docker'
  updateScriptPath: string
  proxyEnabled: boolean
  proxyType: 'http' | 'socks4' | 'socks5'
  proxyHostname: string
  proxyPort: number
  proxyUsername: string
  proxyPassword: string
  proxyBypassFilter: string
  proxyBypassLocalAddresses: boolean
  certificateValidation: 'enabled' | 'disabledForLocalAddresses' | 'disabled'
  backupFolder: string
  backupInterval: number
  backupRetention: number
}
