import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyles.style';
// import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Keep Lisning</title>
				<meta
					name='description'
					content='Now Listen to music without any ads or disturbance. You can also add offline music files stored on your device.'
				/>
				<link rel='icon' href='/favicon/favicon.ico' />
				<link rel='manifest' href='/manifest.json' />
				<link
					href='/favicon/favicon-16x16.png'
					rel='icon'
					type='image/png'
					sizes='16x16'
				/>
				<link
					href='/favicon/favicon-32x32.png'
					rel='icon'
					type='image/png'
					sizes='32x32'
				/>
				<link rel='apple-touch-icon' href='/favicon/apple-icon.png'></link>
				<meta name='theme-color' content='#ffa501' />
				<meta name='background-color' content='#0d0d0d' />
			</Head>
			{/* <Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`}
			/>
			<Script strategy='lazyOnload'>
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', ${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID});
			`}
			</Script> */}
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
