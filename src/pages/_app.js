import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'
import Nav from '@/components/sections/Nav'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<div className='text-pallete-2 selection:bg-pallete-4 selection:text-white'>
			<Head>
				<title>PedalaLeo</title>
			</Head>

			<div>
				<Nav />
				<main>
					<Component {...pageProps} />
					<Analytics />
				</main>

				<CTA />
				<Footer />
			</div>
		</div>
	)
}
