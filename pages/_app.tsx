import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../componet/sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48">
      <div className="col-span-12 p-4 text-center bg-white rounded-2xl lg:col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white rounded-2xl lg:col-span-9">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
