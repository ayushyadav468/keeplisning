import styled from 'styled-components';

export const AboutContainer = styled.main`
	width: 100%;
	min-height: 90vh;
	color: #fff;
	background-color: var(--main-bg);
	padding: 10vh 8rem;
`;

export const Heading = styled.h1`
	font-size: 3.2em;
	font-weight: 700;
	line-height: 1.3;
`;

export const Content = styled.p`
	margin-top: 3rem;
	font-size: 1.2em;
	font-weight: 400;
	line-height: 1.5;
`;

export const LinkContainer = styled.div`
	width: 100%;
	margin-top: 3rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: row;
	flex-wrap: wrap;
`;

export const ContactLink = styled.a`
	margin-right: 2.5rem;
	text-decoration: none;
	font-size: 1.4em;
	line-height: 1.2;
	font-weight: 500;
	color: #fff;
	display: inline-block;
	transition: color 0.2s ease-in;
	&:active,
	&:focus,
	&:hover {
		color: var(--primary);
	}
`;
