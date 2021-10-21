import axios from 'axios';

const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;
const baseURL = (NODE_ENV) => {
	if (NODE_ENV === 'production') {
		return 'https://keeplisning-server.herokuapp.com/api/';
	} else {
		return 'http://localhost:8000/api/';
	}
};

const instance = axios.create({
	baseURL: baseURL()
});

export default instance;
