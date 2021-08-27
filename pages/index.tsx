import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Keep Lisning</title>
				<meta
					name='description'
					content='Now Listen to music without any ads or disturbance. You can also add offline music files stored on your device.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.container}>
				<h1 className={styles.heading}>Welcome to Keep Lisning</h1>
				<h4 className={styles.sub_heading}>The website is under development</h4>
				<p className={styles.description}>
					Please contact{' '}
					<Link href='https://ayushy.dev'>
						<a className={styles.link} title='Link to developer website'>
							Ayush Yadav
						</a>
					</Link>{' '}
					for any details
				</p>
			</main>
		</>
	);
};

export default Home;
