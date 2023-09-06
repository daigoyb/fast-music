import { DeskToolOptions } from "sanity/desk"
import { BsFillGearFill } from 'react-icons/bs'
import { getDefaultDocumentNode } from './defaultDocumentNode.config'
import { AiOutlineHome } from 'react-icons/ai';
import { RiPagesFill } from 'react-icons/ri'


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
            S.listItem()
                .title('Pages')
                .icon(RiPagesFill)
                .child(
                    S.list()
                        .title('Pages')
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
                            .title('Configurações')
                            .child(              
                                S.document()
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                                    .title('Configuração básica')
                            ),
                    ])
            )
        ]),
};