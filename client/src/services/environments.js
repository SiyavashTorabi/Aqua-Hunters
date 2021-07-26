import api from './api-config';

export const getAllEnvironments = async () => {
	const resp = await api.get('/environments');
	return resp.data;
};