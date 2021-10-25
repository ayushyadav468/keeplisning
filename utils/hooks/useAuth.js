import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'utils/axiosInstance';

export default function useAuth(code) {
	const [accessToken, setAccessToken] = useState();
	const [refreshToken, setRefreshToken] = useState();
	const [expiresIn, setExpiresIn] = useState();

	const router = useRouter();

	useEffect(() => {
		if (!code) return;
		const getAccessToken = async () => {
			await axios
				.post('/auth/login', {
					code
				})
				.then((res) => {
					setAccessToken(res.data.accessToken);
					setRefreshToken(res.data.refreshToken);
					setExpiresIn(res.data.expiresIn);
					router.replace('/player');
				})
				.catch(() => {
					router.push('/');
				});
		};
		getAccessToken();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [code]);

	useEffect(() => {
		if (!refreshToken || !expiresIn) return;
		// Run every 59 minutes
		// Refresh token expires in 60 minutes
		const interval = setInterval(() => {
			axios
				.post('auth/refresh/', {
					refreshToken
				})
				.then((res) => {
					setAccessToken(res.data.accessToken);
					setExpiresIn(res.data.expiresIn);
				})
				.catch(() => {
					router.push('/player');
				});
		}, (expiresIn - 60) * 1000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refreshToken, expiresIn]);

	return accessToken;
}
