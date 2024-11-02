export default function Calendar() {
  return (
    <div style={{ position: "relative", paddingBottom: "75%", height: 0 }}>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&showTz=0&hl=ja&mode=AGENDA&title&showTitle=0&src=ZDk0MTA5Y2YzMjVkNGQ1NmU0MzdkM2U4MWU1Y2UyMDYzMTFmNTUyYmYxOTY3ZGEyY2NmOTI2NTM4OTdlNmMyOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  )
}
