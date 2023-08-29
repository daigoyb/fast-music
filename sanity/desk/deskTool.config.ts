import { DeskToolOptions } from "sanity/desk"
import { BsFillGearFill } from 'react-icons/bs'
import { getDefaultDocumentNode } from './defaultDocumentNode.config'
import { AiOutlineHome } from 'react-icons/ai';


const excludedSiteIds = ['siteSettings', 'home', 'carouselItem']

export const deskToolConfig: DeskToolOptions = {
    defaultDocumentNode: getDefaultDocumentNode,
    structure: (S) =>
        S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Home')
                .icon(AiOutlineHome)
                .child(
                    S.document()
                        .schemaType('home')
                        .documentId('home')
                        .title('Home page')
                ),
            ...S.documentTypeListItems().filter(listItem => !excludedSiteIds.includes(listItem.getId()!)),
            S.divider(),
            S.listItem()
            .title('Settings')
            .icon(BsFillGearFill)
            .child(
                S.list()
                    .title('Settings Documents')
                    .items([
                        S.listItem()
                            .title('Metadata')
                            .child(              
                                S.document()
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                                    .title('Meta data')
                            ),
                    ])
            )
        ]),
};