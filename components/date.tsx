import { parseISO, format } from 'date-fns'

type DateProps = {
  dateString: string
}

const Date: React.VFC<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time>
}

export default Date
