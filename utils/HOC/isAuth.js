import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'utils/axiosInstance';

const isAuth = (WrappedComponent) => {
	return (props) => {
		// Check for window object i.e,
		// if we are on browser side or server side
		if (typeof window !== 'undefined') {
			const router = useRouter();
			const code = router.query.code; // SpotifyCode
			const [verifed, setVerified] = useState(false);

			const verifyToken = async () => {
				// Check for refreshToken in localStorage
				const refreshToken = localStorage.getItem('refresh_token');
				// if refresh token is not present
				// redirect to login page
				if (!refreshToken) {
					router.replace('/login');
					return null;
				} else {
					// call api to get accessToken from refreshtoken
					const res = await axios.post('/api/auth/refresh', {
						refreshToken
					});
					if (res.status === 200) {
						const data = await res.body.data;
						console.log(data);
						setVerified(true);
						// const accessToken = res.body.accessToken;
						localStorage.setItem('refresh_token', refreshToken);
					} else {
						setVerified(false);
						localStorage.removeItem('refresh_token');
						router.replace('/login');
					}
				}
			};

			useEffect(() => {
				if (code) {
					axios
						.post('/auth/login', {
							code
						})
						.then((data) => console.log(data))
						.catch((error) => console.log(error));
					setVerified(true);
					// router.push('/player'); // Change url to /player
				} else {
					verifyToken();
				}
				// eslint-disable-next-line react-hooks/exhaustive-deps
			}, []);

			if (verifed) {
				return <WrappedComponent {...props} />;
			} else {
				router.replace('/login');
				return null;
			}
		} else {
			// if on server return null
			return null;
		}
	};
};

export default isAuth;
