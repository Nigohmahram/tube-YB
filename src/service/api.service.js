import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
	params: {
		maxResults: '100',
	},
	headers: {
		'X-RapidAPI-Key': '39e77a4864mshfc5a3cdd191efbep136fbcjsnea31570e6e0b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
};

export const ApiService = {
	async fetching(url) {
		const response = await axios.get(`${BASE_URL}/${url}`, options);
		return response.data;
	},
};
