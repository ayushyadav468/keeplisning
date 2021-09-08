import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from '@firebase/auth';
import { auth } from '../../utils/firebase/firebaseConfig';
import { useState, useRef } from 'react';

const Auth = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const signInEmailRef = useRef<HTMLInputElement>(null);
	const signInPasswordRef = useRef<HTMLInputElement>(null);
	const signUpEmailRef = useRef<HTMLInputElement>(null);
	const signUpPasswordRef = useRef<HTMLInputElement>(null);

	const signIn = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (
			signInEmailRef &&
			signInEmailRef.current &&
			signInPasswordRef &&
			signInPasswordRef.current
		) {
			signInWithEmailAndPassword(
				auth,
				signInEmailRef.current.value,
				signInPasswordRef.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					setUser(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorMessage);
				});
		} else {
			alert('no email passowrd provided');
		}
	};
	const signUp = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (
			signUpEmailRef &&
			signUpEmailRef.current &&
			signUpPasswordRef &&
			signUpPasswordRef.current
		) {
			createUserWithEmailAndPassword(
				auth,
				signUpEmailRef.current.value,
				signUpPasswordRef.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					setUser(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorMessage);
				});
		} else {
			alert('no email passowrd provided');
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<h1 style={{ fontSize: '3rem' }}>Welcome to auth page</h1>
			{user ? (
				<p style={{ fontSize: '2rem' }}>User: {JSON.stringify(user)}</p>
			) : null}
			<form
				onSubmit={(event) => signIn(event)}
				style={{
					marginTop: '1rem',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '1rem'
				}}
			>
				<input
					ref={signInEmailRef}
					type='email'
					required
					style={{ padding: '0.5rem 1rem' }}
				/>
				<input
					type='password'
					ref={signInPasswordRef}
					required
					style={{ padding: '0.5rem 1rem' }}
				/>
				<button type='submit' style={{ padding: '0.5rem 1rem' }}>
					SignIn
				</button>
			</form>
			<form
				onSubmit={(event) => signUp(event)}
				style={{
					marginTop: '1rem',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '1rem'
				}}
			>
				<input
					ref={signUpEmailRef}
					type='email'
					required
					style={{ padding: '0.5rem 1rem' }}
				/>
				<input
					type='password'
					ref={signUpPasswordRef}
					required
					style={{ padding: '0.5rem 1rem' }}
				/>
				<button type='submit' style={{ padding: '0.5rem 1rem' }}>
					SignUp
				</button>
			</form>
		</div>
	);
};

export default Auth;
