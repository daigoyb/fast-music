import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'qox44b6y',
    dataset: 'production',
    title: 'Fast Music',
    apiVersion: '2023-07-02',
    basePath: '/studio',
    plugins: [deskTool(), media(), visionTool()],
    schema: {
        types: schemas
    }
})

export default config;