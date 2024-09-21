export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp)

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
}
