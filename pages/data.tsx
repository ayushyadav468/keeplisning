import { useState, useEffect } from 'react';
import { readDatabase } from '../utils/firebase/firestoreDB';

interface User {
	name: string;
	age: number;
	gender: string;
	image: string;
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
				const userData = data.data();
				setUser(userData);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return <h1>Loading please wait...</h1>;
	}

	return (
		<div>
			<p>{user?.name}</p>
			<p>{user?.age}</p>
			<p>{user?.gender}</p>
			<p>{user?.married}</p>
			<img src={user?.image} alt={user?.name} />
		</div>
	);
};

export default DataPage;
