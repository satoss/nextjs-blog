import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'fe-life',
  apiKey: process.env.API_KEY!,
})
