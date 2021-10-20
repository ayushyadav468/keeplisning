import Link from 'next/link';
import {
	NavbarContainer,
	LogoContainer,
	NavbarLinksContainer,
	Logo,
	NavbarItems
} from './Navbar.style';

const Navbar = () => {
	return (
		<NavbarContainer>
			<Link href='/' passHref>
				<LogoContainer>
					<Logo src='/images/logo.svg' alt='logo' />
				</LogoContainer>
			</Link>
			<NavbarLinksContainer>
				<Link href='/player' passHref>
					<NavbarItems>Player</NavbarItems>
				</Link>
				<Link href='/about' passHref>
					<NavbarItems>About</NavbarItems>
				</Link>
				<Link href='/login' passHref>
					<NavbarItems>Login | Sign Up</NavbarItems>
				</Link>
			</NavbarLinksContainer>
		</NavbarContainer>
	);
};

export default Navbar;
