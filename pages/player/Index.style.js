import styled from 'styled-components';

export const GridContainer = styled.main`
	width: 100%;
	height: 100vh;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: white;
	background-color: var(--main-bg);
	display: grid;
	grid-template-columns: 8% auto;
	grid-template-rows: 8% auto auto 20%;
	grid-template-areas:
		'sidebar main main main'
		'sidebar main main main'
		'sidebar main main main'
		'sidebar main main main';
	overflow: hidden;
`;

export const SideBarContainer = styled.section`
	width: 100%;
	grid-area: sidebar;
	background-color: var(--secondary-bg);
`;

export const PlayerNavbarContainer = styled.section`
	width: 100%;
	grid-area: header;
`;

export const MainContainer = styled.section`
	width: 100%;
	grid-area: main;
`;
