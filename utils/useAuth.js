import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from './axiosInstance';

export default function useAuth(code) {
	const [accessToken, setAccessToken] = useState();
	const [refreshToken, setRefreshToken] = useState();
	const [expiresIn, setExpiresIn] = useState();

	const router = useRouter();

	useEffect(() => {
		axios
			.post('/auth/login', {
				code
			})
			.then((res) => {
				setAccessToken(res.data.accessToken);
				setRefreshToken(res.data.refreshToken);
				setExpiresIn(res.data.expiresIn);
				router.replace('/');
			})
			.catch(() => {
				router.push('/');
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [code]);

	useEffect(() => {
		if (!refreshToken || !expiresIn) return;
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
					router.push('/');
				});
		}, (expiresIn - 60) * 1000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [refreshToken, expiresIn]);

	return accessToken;
}
