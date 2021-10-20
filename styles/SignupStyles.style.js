import styled from 'styled-components';

// File contains all the styles required for sign up page
export const Container = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--main-bg);
`;

export const Wrapper = styled.div`
	width: clamp(340px, 50%, 500px);
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	padding: 2rem 3.5rem;
	background-color: var(--secondary-bg);
	border-radius: 5px;
`;

export const Logo = styled.img`
	width: 45px;
`;

export const Heading = styled.h1`
	margin: 0.5rem 0;
	font-size: 1.2em;
	font-weight: 600;
	color: var(--primary);
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

export const Label = styled.label`
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 5px;
	font-size: 1rem;
	position: relative;
	/* ${Input}:active &, ${Input}:focus & {
		border: 1px solid var(--primary);
	} */
	&::before {
		content: '${(props) => props.labelName || ''}';
		position: absolute;
		top: -0.5em;
		left: 0.5em;
		color: white;
		background-color: var(--secondary-bg);
		padding: 0 0.4rem;
	}
`;

export const Input = styled.input`
	width: 100%;
	margin-top: 0.5rem;
	padding: 0.6rem 0.6rem 0.8rem 0.8rem;
	border: none;
	outline: none;
	font-size: 1.1em;
	color: white;
	background-color: var(--secondary-bg);
	border-radius: 5px;
	&:active ${Label}, &:focus ${Label} {
		border: 1px solid var(--primary);
	}
`;

export const LoginBtn = styled.button`
	width: 100%;
	font-size: 1.1em;
	padding: 0.6rem 1rem;
	color: white;
	background-color: var(--primary);
	border: none;
	outline: none;
	border-radius: 5px;
	cursor: pointer;
`;

export const Text = styled.p`
	font-size: 1em;
	font-weight: 400;
	color: ${(props) => props.color || 'white'};
`;

export const LoginLink = styled.a`
	text-decoration: none;
	color: var(--primary);
`;

export const HomeLink = styled.a`
	text-decoration: none;
`;
