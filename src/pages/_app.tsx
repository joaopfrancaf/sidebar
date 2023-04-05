import { globaStyles } from '../styles/global'
import type { AppProps } from 'next/app'

globaStyles()
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
