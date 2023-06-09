import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<div className='text-pallete-2'>
			<Head>
				<title>Next and MDX Blog</title>
			</Head>

			<div>
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
