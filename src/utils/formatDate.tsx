export const formatDate = (date: string) => {
  const [day, preposition, month] = new Date(date)
    .toLocaleString('pt-br', {
      month: 'long',
      day: 'numeric'
    })
    .split(' ')
  const abbreviatedDayOfTheWeek = `${day} `
  const formattedDate = [abbreviatedDayOfTheWeek, month]

  return formattedDate.join(`${preposition} `)
}
