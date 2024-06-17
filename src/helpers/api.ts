import axios from 'axios'

export const api = axios.create({
	baseURL: process.env.PUBLIC_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
})
