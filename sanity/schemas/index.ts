import { SchemaTypeDefinition } from '@sanity/types'
import { homeType } from './Home/home.schema';
import { siteSettingsType } from './siteSettings.schema';
import { carouselItemType, carouselType } from './Home/carousel.schema';
import { professorType } from './professor.schema';
import { instrumentType } from './instrument.schema';

const schemas: SchemaTypeDefinition[] = [
    homeType, 
    siteSettingsType, 
    carouselType, 
    carouselItemType, 
    professorType, 
    instrumentType
];

export default schemas;