export const getTagsArray = ( tags: string ): string[] => {
    const tagsString = tags
        .split(',')
        .map( (tag: string) => tag.trim().toLowerCase() )
        .filter( (tag: string ) => tag.length > 2 )
    return tagsString
}