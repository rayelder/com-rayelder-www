import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'gpkig6fp',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-02-28', // use current date (YYYY-MM-DD) to target the latest API version
})