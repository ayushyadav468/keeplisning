import { useState, useRef } from 'react';
import {
	Container,
	Wrapper,
	Logo,
	Heading,
	Form,
	Label,
	Input,
	LoginBtn,
	Text,
	SignUpLink,
	HorizontalLine,
	ContinueWithGoogle
} from 'pages/login/LoginStyles.style';
import { FcGoogle } from 'react-icons/fc';

const Index = () => {
	// States
	const [error, setError] = useState('');

	// Input References
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const loginHandler = (event) => {
		event.preventDefault();
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

	const signInWithGoogleHandler = () => {};

	return (
		<Container>
			<Wrapper>
				<Logo src='/logo.svg' />
				<Heading>Log in to KeepLisning</Heading>
				<Form onSubmit={loginHandler}>
					<Label labelName='Email'>
						<Input
							type='email'
							placeholder='eg@eg.com'
							ref={emailRef}
							inputLabel='Email'
							required
						/>
					</Label>
					<Label labelName='Password'>
						<Input
							type='password'
							placeholder='eg1234'
							ref={passwordRef}
							inputLabel='Password'
							required
						/>
					</Label>
					{/* Show Error if any */}
					{error.length > 0 ? <Text color={'red'}>{error}</Text> : null}
					<LoginBtn type='submit'>Log In</LoginBtn>
				</Form>
				<Text>
					{"Don't have an account? "}{' '}
					<SignUpLink href='/signup'>Signup</SignUpLink>
				</Text>
				<HorizontalLine></HorizontalLine>
				<ContinueWithGoogle onClick={signInWithGoogleHandler}>
					<FcGoogle
						style={{ height: '24px', width: '24px', marginRight: '10px' }}
					/>
					Continue With Google
				</ContinueWithGoogle>
			</Wrapper>
		</Container>
	);
};

export default Index;
