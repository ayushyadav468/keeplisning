import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	color: #fff;
	background: rgba(0, 0, 0, 0.9);
	min-height: 35vh;
	padding: 2rem 3rem;
	display: flex;
	flex-flow: row;
	justify-content: space-between;
	align-items: flex-start;
`;

export const FooterWrapper = styled.div`
	width: 30%;
	padding-left: ${(props) => props.paddingLeft + 'rem' || 0};
	display: flex;
	flex-flow: column;
	align-items: left;
`;

export const FooterHeading = styled.h2`
	font-size: 1.5em;
	font-weight: 500;
	line-height: 1.1;
	margin-bottom: 0.5rem;
`;

export const FooterContent = styled.p`
	margin: 1rem 0;
	font-size: 1em;
	font-weight: 400;
	line-height: 1.3;
`;

export const FooterLink = styled.a`
	text-decoration: none;
	margin: 0.7rem 0 0.5rem 1rem;
	color: #fff;
	font-size: 1em;
	font-weight: 400;
	position: relative;
	text-align: left;
	&:active,
	&:focus,
	&:hover {
		color: var(--primary);
	}
	&::before {
		content: '';
		width: 7px;
		height: 7px;
		background-color: #fff;
		list-style: square;
		font-size: 1.5em;
		position: absolute;
		top: 50%;
		left: -5%;
		transform: translateY(-50%);
	}
`;
