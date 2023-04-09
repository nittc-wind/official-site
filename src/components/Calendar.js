import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default function Calendar() {
  return (
    <FullCalendar
        plugins={[ dayGridPlugin, googleCalendarPlugin]}
        locale="ja"
        initialView="dayGridMonth"
        googleCalendarApiKey={process.env.NEXT_PUBLIC_CAL_API_KEY}
        eventSources={[
        {
          googleCalendarId: process.env.NEXT_PUBLIC_CAL_ID,
        }
      ]}
    />
  )
}