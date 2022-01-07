import '../styles/globals.css'
import { AppProps } from "next/app"
import DateAdapter from "@mui/lab/AdapterDayjs"
import { LocalizationProvider } from "@mui/lab"
import { RecoilRoot } from "recoil"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </RecoilRoot>
  )
}

export default MyApp
