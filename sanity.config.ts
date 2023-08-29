import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision';
import schemas from './sanity/schemas'
import FastLogo from './sanity/components/Logo/FastLogo';
import { deskToolConfig } from './sanity/desk/deskTool.config';
import { 
    dashboardTool,
    sanityTutorialsWidget,
    projectUsersWidget,
    projectInfoWidget
} from '@sanity/dashboard';
import { GiGuitar } from 'react-icons/gi'

const config = defineConfig({
    name: 'fastMusic',
    projectId: 'qox44b6y',
    dataset: 'production',
    title: 'Fast Music',
    apiVersion: '2023-07-02',
    basePath: '/studio',
    icon: GiGuitar,
    plugins: [
        deskTool(deskToolConfig), 
        dashboardTool({widgets: [
            sanityTutorialsWidget(),
            projectUsersWidget(),
            projectInfoWidget()
        ]}),
        media(), visionTool()
    ],
    schema: {
        types: schemas
    },
    studio: {
        components: {
            logo: FastLogo,
        }
    }
})

export default config;