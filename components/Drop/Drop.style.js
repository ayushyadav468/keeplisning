import styled from 'styled-components';

export const DropContainer = styled.div`
	width: 80%;
	height: 85%;
	margin: 5% 10%;
	box-sizing: border-box;
	border: 2px dashed white;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		border: 2px dashed var(--primary);
	}
`;

export const Heading = styled.h2`
	font-size: 1.2rem;
	line-height: 1.5;
	${DropContainer}:hover & {
		color: var(--primary);
	}
`;
