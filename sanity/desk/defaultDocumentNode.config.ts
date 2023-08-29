import { StructureBuilder } from 'sanity/desk'
import { JsonPreview } from '../components/JsonPreview'

export const getDefaultDocumentNode = (S: StructureBuilder) => 
    S.document().views([
        S.view.form(),
        S.view.component(JsonPreview).title('JSON')
    ])
