import type { AppProps } from 'next/app'
import '../styles/globals.css'
// import 'component-library/dist/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp