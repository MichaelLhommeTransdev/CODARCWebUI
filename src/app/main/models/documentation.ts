export type DocumentationThemeID = string

export interface DocumentationTheme {
    id: DocumentationThemeID
    name: string
    shortName: string
    itemsCount: number
}

export type DocumentationID = number

export interface Documentation {
    id: DocumentationID
    theme: string
    name: string
    shortName: string
    version: string
    archived: boolean
    adminRequired: boolean
    creationDate: Date
}
