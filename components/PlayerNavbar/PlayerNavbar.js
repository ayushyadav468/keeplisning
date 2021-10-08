import { Navbar, NavbarItem } from './PlayerNavbar.style';

// changeHome is a function to change Home and Drop sections
// changeHome needs a boolean
// to determine whether to change to Home or Drop section
const PlayerNavbar = ({ changeHome }) => {
	const changeToHome = () => {
		changeHome(true);
	};

	const changeToDrop = () => {
		changeHome(false);
	};

	return (
		<Navbar>
			<NavbarItem onClick={changeToHome}>Home</NavbarItem>
			<NavbarItem onClick={changeToDrop}>Drop Zone</NavbarItem>
		</Navbar>
	);
};

export default PlayerNavbar;
