import api from './api-config';

export const getAllRegions = async () => {
	const resp = await api.get('/regions');
	return resp.data;
};
