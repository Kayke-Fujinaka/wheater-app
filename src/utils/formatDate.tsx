export const formatDate = (date: string) => {
  const [day, preposition, month] = new Date(date)
    .toLocaleDateString('pt-br', {
      month: 'long',
      day: 'numeric'
    })
    .split(' ')
  const abbreviatedDayOfTheWeek = `${day.substring(0, 2)} `
  const formattedDate = [abbreviatedDayOfTheWeek, month]

  return formattedDate.join(`${preposition} `)
}
