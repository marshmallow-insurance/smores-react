const ukTimeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/London',
})

export const convertToUkDate = (date: Date): Date => {
  const dateString = ukTimeFormat.format(date)
  const [day, month, year] = dateString.split('/')

  return new Date(Number(year), Number(month) - 1, Number(day))
}
