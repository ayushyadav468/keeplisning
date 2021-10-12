import styled from 'styled-components';

export const MainContainer = styled.main`
	width: 100%;
	color: #fff;
	background-color: var(--main-bg);
	box-sizing: border-box;
	padding-bottom: 2rem;
`;

export const Heading = styled.h2`
	font-size: 3em;
	font-weight: 700;
	line-height: 1.2;
	text-align: center;
`;

export const TagLine = styled.p`
	margin: 1rem auto;
	max-width: 270px;
	font-size: 1em;
	font-weight: 400;
	line-height: 1.2;
	text-align: center;
`;

export const ImageContainer = styled.div`
	width: 70%;
	max-height: 500px;
	margin: 4rem auto;
	border-right: 10px;
	position: relative;
`;

export const BannerImage = styled.img`
	width: 100%;
	max-height: 500px;
	object-fit: cover;
	border-right: 10px;
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
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
