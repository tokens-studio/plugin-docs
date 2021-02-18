import 'nextra-theme-docs/style.css'
import splitbee from "@splitbee/web"
import React from "react"

export default function Nextra({ Component, pageProps }) {
  React.useEffect(() => {
    splitbee.init({
      disableCookie: true,
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    })
  }, [])

  return <Component {...pageProps} />
}
