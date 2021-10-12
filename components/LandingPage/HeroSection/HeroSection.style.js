import styled from 'styled-components';

export const MainContainer = styled.main`
	width: 100%;
	min-height: 90vh;
	color: #fff;
	background-color: var(--main-bg);
	display: flex;
	flex-flow: row;
	justify-content: space-around;
	align-items: flex-start;
`;

export const RenderContainer = styled.div`
	width: 55%;
	position: relative;
`;

export const RenderImage = styled.img`
	position: relative;
	z-index: 5;
`;

export const RenderShadow = styled.div`
	position: absolute;
	background-color: #fff;
	border-radius: 50%;
	width: 200px;
	height: 200px;
	bottom: 25%;
	right: 50%;
	transform: translateX(50%);
	z-index: 0;
	box-shadow: 0px 0px 150px 100px var(--primary);
`;

export const ContentContainer = styled.div`
	width: 45%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContentWrapper = styled.div`
	width: 70%;
	text-align: left;
`;

export const Heading = styled.h1`
	margin-top: 17vh;
	font-size: 5em;
	font-weight: 700;
	line-height: 1.2;
`;

export const SubHeading = styled.h3`
	margin-top: 1.2rem;
	font-size: 1.625em;
	font-weight: 500;
	line-height: 1.2;
`;

export const TagLine = styled.p`
	margin-top: 1rem;
	font-size: 1em;
	font-weight: 400;
	line-height: 1.2;
`;

export const ActionBtn = styled.button`
	margin-top: 3rem;
	font-size: 1.25em;
	padding: 0.68rem 3rem;
	color: #fff;
	background: var(--gradient);
	border: none;
	cursor: pointer;
	border-radius: 10px;
`;
