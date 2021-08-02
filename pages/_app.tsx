import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import basicAuth from './api/basicAuth'
import '../styles/global.scss'
import 'normalize.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req, res } = appContext.ctx
  if (req && res && process.env.ENABLE_BASIC_AUTH === 'true') {
    await basicAuth(req, res)
  }

  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
