import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/GlobalStyles.style';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
