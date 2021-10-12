import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 2rem 0;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 10;
`;

export const LinkComponent = styled.a`
	text-decoration: none;
`;

export const ImageComponent = styled.img`
	width: 25px;
`;

export const UserLink = styled.a`
	text-decoration: none;
	padding: 0.9rem 1rem;
	border: none;
	outline: none;
	border-radius: 50%;
	cursor: pointer;
	background: var(--secondary-lt-bg);
	&:hover,
	&:active,
	&:focus {
		background: var(--gradient);
	}
`;

export const Navbar = styled.ul`
	padding: 2rem 0.8rem;
	display: flex;
	flex-flow: column;
	gap: 2.5rem;
	justify-content: space-evenly;
	background-color: var(--secondary-lt-bg);
	border-radius: 10px;
`;

export const NavbarItem = styled.li`
	list-style: none;
	cursor: pointer;
	padding: 0.8rem;
	border-radius: 8px;
	&:hover,
	&:active,
	&:focus {
		background: var(--gradient);
	}
`;

export const ActiveNavbarItem = styled.li`
	list-style: none;
	cursor: pointer;
	padding: 0.8rem;
	border-radius: 8px;
	background: var(--gradient);
`;
