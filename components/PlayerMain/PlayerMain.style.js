import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 80vh;
	box-sizing: border-box;
	padding: 2rem 5rem;
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 2rem;
	overflow-x: hidden;
	overflow-y: auto;
	/* Scrollbar styles */
	&::-webkit-scrollbar {
		width: 9px;
	}
	&::-webkit-scrollbar-thumb {
		background: var(--primary);
		border-radius: 5px;
	}
`;

export const Welcome = styled.div`
	width: 100%;
	padding: 1.5rem 5rem;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--secondary-bg);
	border-radius: 20px;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1rem;
`;

export const Heading = styled.h1`
	font-size: 2.5em;
	font-weight: 700;
`;

export const SubHeading = styled.h3`
	font-size: 1.5;
	font-weight: 500;
	margin-left: 0.5rem;
`;

export const Logo = styled.img`
	width: 60px;
`;

export const MainContent = styled.div`
	width: 100%;
	margin-top: 1rem;
	margin-left: 10%;
	display: flex;
	flex-flow: row;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 10%;
`;

export const Card = styled.div`
	width: clamp(300px, 35%, 410px);
	padding: 0.8rem 0.8rem;
	margin: 0.5rem 0;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
	border-radius: 15px;
	&:active,
	&:focus,
	&:hover {
		background: var(--gradient);
	}
`;

export const ActiveCard = styled.div`
	width: clamp(300px, 35%, 410px);
	padding: 0.8rem 0.8rem;
	margin: 0.5rem 0;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
	border-radius: 15px;
	background: var(--gradient);
	position: relative;
	&::before {
		content: '';
		width: 90%;
		height: 10px;
		background: var(--gradient-lt);
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		position: absolute;
		top: -10px;
		left: 5%;
		z-index: 0;
		box-shadow: 0 0 20px 0px var(--primary);
	}
	&::after {
		content: '';
		width: 80%;
		height: 10px;
		background: var(--gradient-lt);
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		position: absolute;
		top: -20px;
		left: 10%;
		z-index: 0;
		box-shadow: 0 0 20px 0px var(--primary);
	}
`;

export const SongImage = styled.img`
	width: 75px;
`;

export const SongDetail = styled.div`
	width: 60%;
	min-width: 120px;
	margin-left: 0.6rem;
	display: flex;
	flex-flow: column;
	justify-content: space-evenly;
	align-items: flex-start;
	gap: 0.5rem;
`;

export const SongName = styled.h3`
	font-size: 1.1em;
	font-weight: 600;
`;

export const SongBy = styled.h5`
	font-size: 0.9em;
	font-weight: 500;
`;

export const SongDuration = styled.p`
	font-size: 0.9em;
	font-weight: 400;
`;
