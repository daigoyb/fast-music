import { createClient } from "@sanity/client"

export const client = createClient({
    projectId: 'qox44b6y',
    dataset: 'production',
    apiVersion: '2023-09-05',
    useCdn: false
})