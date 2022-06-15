import { SERVER_URI } from '../config/config';

const Fetch = async (url, method = 'GET', body) => {
	try {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('Origin', 'http://localhost:3000');
		headers.append('GET', 'POST', 'OPTIONS');

		const response = await fetch(`${SERVER_URI}${url}`, {
			method: method,
			mode: 'cors',
			credentials: 'include',
			headers: headers,
			body: JSON.stringify(body),
		});
		const data = await response.json();

		return {
			data,
			errMessage: data.message,
			status: response.ok,
			statusCode: response.status,
		};
	} catch (e) {
		console.log(e.message || e);
	}
};

export default Fetch;
