import axios from 'axios';

const BASE_URL = 'http://localhost:8100';


export const hydrate = async() => {
	let response = await axios.get(`${BASE_URL}/hydrate`);
	return response;
}

export const getClosestMatch = async(path) => {
	let response = await axios.post(`${BASE_URL}/compare`, { path: path });
	return response;
}

