export const formatDate = (date) => {
  // Content stores front-matter dates as YYYY-MM-DD (UTC midnight)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }
  return new Date(date).toLocaleDateString('en', options)
}
