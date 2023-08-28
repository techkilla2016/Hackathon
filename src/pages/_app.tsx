import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from '@/Components/aside';
import { CookiesProvider } from 'react-cookie';
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  </>
}
