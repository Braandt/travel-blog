import Nav from '@/components/Nav'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Next and MDX Blog</title>
				<link href="https://api.fontshare.com/v2/css?f[]=erode@400&f[]=tanker@400&display=swap" rel="stylesheet" />
			</Head>

			<div>
				<Nav />
				<main>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	)
}
