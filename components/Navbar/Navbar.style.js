import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	width: 100%;
	min-height: 8vh;
	background-color: lightblue;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const NavbarItems = styled.a`
	cursor: pointer;
	font-size: 1.3em;
	font-weight: normal;
	margin: 0.5rem 1rem;
	color: black;
	text-decoration: none;
`;
