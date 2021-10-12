import Navbar from 'components/Navbar/Navbar';
import HeroSection from 'components/LandingPage/HeroSection/HeroSection';
import SecondaryBanner from 'components/LandingPage/SecondaryBanner/SecondaryBanner';
import Footer from 'components/Footer/Footer';

const Home = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<SecondaryBanner />
			<Footer />
		</>
	);
};

export default Home;
