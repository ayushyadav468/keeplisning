import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyles.style';
// import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
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
