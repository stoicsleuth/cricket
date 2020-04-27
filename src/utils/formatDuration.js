import moment from 'moment'

export default function formatDuration(date) {
  return moment.utc(moment(parseInt(date, 10)).diff(moment()))
    .format('w [weeks], d [days], h [hours]')
    .split(', ')
    .filter((dur) => !dur.startsWith('0'))
    .join(', ')
}
