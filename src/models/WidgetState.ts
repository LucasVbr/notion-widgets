import type {AstroInstance} from 'astro';

export interface WidgetState extends AstroInstance {
  data: WidgetData
}

type WidgetData = {
  name: string
  description?: string
  documentationUrl?: string
  image?: string
}