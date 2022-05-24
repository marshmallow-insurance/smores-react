const ukTimeFormat = new Intl.DateTimeFormat('en', {
  timeZone: 'Europe/London',
  timeZoneName: 'long',
})

export const convertToUkDate = (date: Date): Date => {
  return new Date(ukTimeFormat.format(date))
}