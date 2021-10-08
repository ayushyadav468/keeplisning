import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 2rem 5rem;
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 2rem;
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
	width: 75px;
`;

export const MainContent = styled.div`
	width: 100%;
	/* padding: 0 5rem; */
	display: flex;
	flex-flow: row;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 10%;
`;

export const Card = styled.div`
	width: clamp(300px, 45%, 450px);
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
