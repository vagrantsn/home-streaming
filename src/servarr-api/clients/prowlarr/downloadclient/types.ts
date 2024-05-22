import { Field } from "@servarr-api/endpoints/types/field"

export type DownloadClient = {
  id: number
  name: string
  fields?: Field[]
  implementationName?: string
  implementation?: string
  configContract?: string
  infoLink?: string
  tags?: number[]
  enable: boolean
  protocol: 'unknown' | 'usenet' | 'torrent'
  priority: number
  removeCompletedDownloads: boolean
  removeFailedDownloads: boolean
  categories?: {
    clientCategory?: string
    categories?: number[]
  }[]
  supportsCategories: boolean
}
