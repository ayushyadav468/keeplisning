import Link from 'next/link';
import Navbar from 'components/Navbar/Navbar';
import styles from 'styles/Home.module.css';

const Home = () => {
	return (
		<>
			<Navbar />
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
