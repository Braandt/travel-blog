import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link href="https://api.fontshare.com/v2/css?f[]=erode@400&f[]=tanker@400&f[]=bespoke-serif@400,500&display=swap" rel="stylesheet" />
				<link rel='icon' href='/images/logocircular1.svg' style={{ borderRadius: '100%' }} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
