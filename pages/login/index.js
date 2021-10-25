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
	SignUpLink,
	HorizontalLine,
	ContinueWithSpotify
} from 'styles/LoginStyles.style';
import { FaSpotify } from 'react-icons/fa';

const Index = () => {
	// States
	const [error, setError] = useState('');

	// Input References
	// const emailRef = useRef(null);
	// const passwordRef = useRef(null);

	// const loginHandler = (event) => {
	// 	event.preventDefault();
	// 	if (emailRef.current.value && passwordRef.current.value) {
	// 		const email = emailRef.current.value;
	// 		const password = passwordRef.current.value;
	// 		console.log(email, password);
	// 	} else {
	// 		setError('Some Error Occured');
	// 	}
	// 	setTimeout(() => {
	// 		setError('');
	// 	}, 3000);
	// };

	const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
	const response_type = 'code';
	const redirect_uri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URL;
	// Scope for spotify user
	// Scope determine what data can be read in respect to user
	const scope = [
		'streaming',
		'user-read-email',
		'user-read-private',
		'user-library-read',
		'user-library-modify',
		'user-read-playback-state',
		'user-modify-playback-state'
	].join(' ');
	// URL to login to spotify with above properties
	// This return a code in search params
	const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}`;

	return (
		<Container>
			<Wrapper>
				<Link href='/' passHref>
					<HomeLink>
						<Logo src='images/logo.svg' />
					</HomeLink>
				</Link>
				<Heading>Log in to KeepLisning</Heading>
				<Link href={spotifyURL} passHref>
					<ContinueWithSpotify>
						<FaSpotify
							style={{ height: '24px', width: '24px', marginRight: '10px' }}
						/>
						Continue With Spotify
					</ContinueWithSpotify>
				</Link>
				{/* <HorizontalLine></HorizontalLine>
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
					</Label> */}
				{/* Show Error if any */}
				{/* {error.length > 0 ? <Text color={'red'}>{error}</Text> : null}
					<LoginBtn type='submit'>Log In</LoginBtn>
				</Form>
				<Text>
					{"Don't have an account? "}{' '}
					<SignUpLink href='/signup'>Signup</SignUpLink>
				</Text> */}
			</Wrapper>
		</Container>
	);
};

export default Index;
