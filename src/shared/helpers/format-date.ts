export const formatDate = ( dateStr: string ): string => {

    const [day, month, yearContent] = dateStr?.split('/') ?? []

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ]

    const monthName = months[+month - 1] ?? 'mes invalido'
    const [ year ] = yearContent.split(',')

    return `${day} ${monthName} ${year}`

}