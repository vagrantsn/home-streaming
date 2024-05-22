import { Field } from "../types/field"

export type Application = {
  id: number
  name?: string
  fields: Field[]
  implementationName?: string
  implementation?: string
  configContract?: string
  infoLink?: string
  tags?: number[]
  syncLevel: 'disabled' | 'addOnly' | 'fullSync'
}
