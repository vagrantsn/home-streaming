export type Field = Partial<{
  order: number
  name?: string
  label?: string
  unit?: string
  helpText?: string
  helpTextWarning?: string
  helpLink?: string
  value?: string
  type?: string
  advanced: boolean
  selectOptions?: {
    value: number
    name?: string
    order: number
    hint?: string
  }[]
  selectOptionsProviderAction?: string
  section?: string
  hidden?: string
  privacy: 'normal' | 'password' | 'apiKey' | 'userName'
  placeholder?: string
  isFloat: boolean
}>
