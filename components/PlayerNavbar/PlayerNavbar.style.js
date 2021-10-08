import styled from 'styled-components';

export const Navbar = styled.ul`
	width: 100%;
	padding: 2rem 5rem;
	display: flex;
	flex-flow: row;
	justify-content: flex-start;
	align-items: center;
	gap: 4rem;
`;

export const NavbarItem = styled.li`
	list-style: none;
	color: white;
	cursor: pointer;
	font-size: 1.1em;
	&:active,
	&:focus,
	&:hover {
		color: var(--primary);
	}
`;
