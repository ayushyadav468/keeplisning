import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	width: 100%;
	min-height: 8vh;
	padding: 1.5rem 8rem;
	color: #fff;
	background-color: var(--main-bg);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 10;
`;

export const LogoContainer = styled.a`
	text-decoration: none;
	width: max-content;
`;

export const NavbarLinksContainer = styled.div`
	width: 40%;
	display: flex;
	flex-flow: row;
	justify-content: flex-end;
	align-items: center;
`;

export const NavbarItems = styled.a`
	cursor: pointer;
	font-size: 1.125em;
	font-weight: normal;
	color: #fff;
	margin: 0.5rem 0 0.5rem 4rem;
	text-decoration: none;
	&:active,
	&:focus,
	&:hover {
		color: var(--primary);
	}
`;

export const Logo = styled.img`
	width: 25px;
`;
