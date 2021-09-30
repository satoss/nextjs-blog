import { AppProps } from 'next/app'
import 'normalize.css'
import '../styles/global.scss'
import { usePageView, GoogleAnalytics } from '../lib/gtag'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  usePageView()

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default App
