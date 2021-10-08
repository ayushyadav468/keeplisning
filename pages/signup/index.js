import { useState, useRef } from 'react';
import Link from 'next/link';
import {
	Container,
	Wrapper,
	Logo,
	Heading,
	HomeLink,
	Form,
	Label,
	Input,
	LoginBtn,
	Text,
	LoginLink
} from 'pages/signup/SignupStyles.style';

const Index = () => {
	// States
	const [error, setError] = useState('');

	// Input References
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const confirmPasswordRef = useRef(null);

	const sigupHandler = (event) => {
		event.preventDefault();
		if (passwordRef.current.value !== confirmPasswordRef.current.value) {
			setError('Password Mismatch');
		}
		if (emailRef.current.value && passwordRef.current.value) {
			const email = emailRef.current.value;
			const password = passwordRef.current.value;
			console.log(email, password);
		} else {
			setError('Some Error Occured');
		}
		setTimeout(() => {
			setError('');
		}, 3000);
	};
	return (
		<Container>
			<Wrapper>
				<Link href='/' passHref>
					<HomeLink>
						<Logo src='/logo.svg' />
					</HomeLink>
				</Link>
				<Heading>Sign up to KeepLisning</Heading>
				<Form onSubmit={sigupHandler}>
					<Label labelName='Email'>
						<Input
							type='email'
							placeholder='eg@eg.com'
							inputLabel='Email'
							ref={emailRef}
							required
						/>
					</Label>
					<Label labelName='Password'>
						<Input
							type='password'
							placeholder='eg1234'
							inputLabel='Password'
							ref={passwordRef}
							required
						/>
					</Label>
					<Label labelName='Confirm Password'>
						<Input
							type='password'
							placeholder='eg1234'
							inputLabel='Password'
							ref={confirmPasswordRef}
							required
						/>
					</Label>
					{/* Show Error if any */}
					{error.length > 0 ? <Text color={'red'}>{error}</Text> : null}
					<LoginBtn type='submit'>Sign Up</LoginBtn>
				</Form>
				<Text>
					{'Have an account? '} <LoginLink href='/login'>Login</LoginLink>
				</Text>
			</Wrapper>
		</Container>
	);
};

export default Index;
