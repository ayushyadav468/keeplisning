import { NavbarContainer, NavbarItems } from './Navbar.style';

const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarItems href='/data'>Data</NavbarItems>
			<NavbarItems href='/about'>About</NavbarItems>
			<NavbarItems href='/auth'>Authentication</NavbarItems>
		</NavbarContainer>
	);
};

export default Navbar;
