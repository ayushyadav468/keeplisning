import Link from 'next/link';
import { useState } from 'react';
import {
	Container,
	LinkComponent,
	ImageComponent,
	Navbar,
	NavbarItem,
	ActiveNavbarItem,
	UserLink
} from './Sidebar.style';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { RiDropFill } from 'react-icons/ri';

// changeHome is a function to change Home and Drop sections
// changeHome needs a boolean
// to determine whether to change to Home or Drop section
const Sidebar = ({ changeHome }) => {
	const [isHome, setIsHome] = useState(true);
	const [isDrop, setIsDrop] = useState(false);

	const changeToHome = () => {
		changeHome(true);
		if (!isHome) {
			setIsHome(true);
			setIsDrop(false);
		}
	};

	const changeToDrop = () => {
		changeHome(false);
		if (!isDrop) {
			setIsDrop(true);
			setIsHome(false);
		}
	};

	return (
		<Container>
			<Link href='/' passHref>
				<LinkComponent>
					<ImageComponent src='/logo.svg' />
				</LinkComponent>
			</Link>
			<Navbar>
				{isHome ? (
					<ActiveNavbarItem onClick={changeToHome}>
						<FaHome style={{ width: '30px', height: '30px', color: 'white' }} />
					</ActiveNavbarItem>
				) : (
					<NavbarItem onClick={changeToHome}>
						<FaHome style={{ width: '30px', height: '30px', color: 'white' }} />
					</NavbarItem>
				)}
				{isDrop ? (
					<ActiveNavbarItem onClick={changeToDrop}>
						<RiDropFill
							style={{ width: '30px', height: '30px', color: 'white' }}
						/>
					</ActiveNavbarItem>
				) : (
					<NavbarItem onClick={changeToDrop}>
						<RiDropFill
							style={{ width: '30px', height: '30px', color: 'white' }}
						/>
					</NavbarItem>
				)}
			</Navbar>
			<Link href='/user' passHref>
				<UserLink>
					<FaUserAlt
						style={{ width: '25px', height: '25px', color: 'white' }}
					/>
				</UserLink>
			</Link>
		</Container>
	);
};

export default Sidebar;
