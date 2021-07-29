import { AppPropsType } from 'next/dist/next-server/lib/utils'
import '../styles/global.scss'
import 'normalize.css'

const App = ({ Component, pageProps }: AppPropsType): JSX.Element => {
  return <Component {...pageProps} />
}

export default App
