import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default function Calendar() {
  return (
    <FullCalendar
        plugins={[ dayGridPlugin, googleCalendarPlugin, listPlugin]}
        locale="ja"
        initialView="listWeek"
        googleCalendarApiKey={process.env.NEXT_PUBLIC_CAL_API_KEY}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,listWeek'
        }}
        buttonText={{
          today: "今日",
          month: "月",
          list: "週"
        }}
        eventSources={[
        {
          googleCalendarId: process.env.NEXT_PUBLIC_CAL_ID,
        }
      ]}
    />
  )
}