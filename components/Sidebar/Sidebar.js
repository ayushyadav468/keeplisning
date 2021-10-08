import Link from 'next/link';
import {
	Container,
	LinkComponent,
	ImageComponent,
	Navbar,
	NavbarItem,
	UserLink
} from './Sidebar.style';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import { RiDropFill } from 'react-icons/ri';

// changeHome is a function to change Home and Drop sections
// changeHome needs a boolean
// to determine whether to change to Home or Drop section
const Sidebar = ({ changeHome }) => {
	const changeToHome = () => {
		changeHome(true);
	};

	const changeToDrop = () => {
		changeHome(false);
	};

	return (
		<Container>
			<Link href='/' passHref>
				<LinkComponent>
					<ImageComponent src='/logo.svg' />
				</LinkComponent>
			</Link>
			<Navbar>
				<NavbarItem onClick={changeToHome}>
					<FaHome style={{ width: '30px', height: '30px', color: 'white' }} />
				</NavbarItem>
				<NavbarItem onClick={changeToDrop}>
					<RiDropFill
						style={{ width: '30px', height: '30px', color: 'white' }}
					/>
				</NavbarItem>
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
