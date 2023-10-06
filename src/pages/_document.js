import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link href="https://api.fontshare.com/v2/css?f[]=erode@400&f[]=tanker@400&f[]=bespoke-serif@400,500&f[]=dancing-script@400&display=swap" rel="stylesheet" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />

				<link rel='icon' href='/images/logo/logo3.ico' style={{ borderRadius: '100%' }} />

				<meta name="theme-color" content="#000000" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
