import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<div className='text-black bg-black'>
			<Head>
				<title>Next and MDX Blog</title>
			</Head>

			<div className='text-vesuvius-950 bg-white'>
				<Nav />
				<main>
					<Component {...pageProps} />
				</main>

				<CTA />
				<Footer />
			</div>
		</div>
	)
}
