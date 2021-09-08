import { useState, useEffect } from 'react';
import { readDatabase } from '../utils/firebase/firestoreDB';

interface User {
	name: string;
	age: number;
	gender: string;
	married: boolean;
}

const DataPage = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<User>();
	useEffect(() => {
		const fetchData = async () => {
			const data = await readDatabase(
				'test-collection',
				'1FwD9AdJ5dyzeodd75lf'
			);
			if (data.exists()) {
				const userData: User = data.data();
				setUser(userData);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return (
			<h1 style={{ marginTop: '5rem', textAlign: 'center', fontSize: '3rem' }}>
				Loading please wait...
			</h1>
		);
	}

	return (
		<div>
			<pre style={{ marginTop: '5rem', textAlign: 'center', fontSize: '2rem' }}>
				{JSON.stringify(user)}
			</pre>
		</div>
	);
};

export default DataPage;
