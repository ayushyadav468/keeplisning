import styled from 'styled-components';

export const GridContainer = styled.main`
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: white;
	background-color: var(--main-bg);
	display: grid;
	grid-template-columns: 12% auto;
	grid-template-rows: 12% auto auto 20%;
	grid-template-areas:
		'sidebar main main main'
		'sidebar main main main'
		'sidebar main main main'
		'sidebar player player player';
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

export const PlayerContainer = styled.section`
	width: 100%;
	grid-area: player;
`;
