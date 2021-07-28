import api from './api-config';

export const getSpecies = async () => {
	const resp = await api.get('/species');
	return resp.data;
};

export const getOneSpecie = async (id) => {
	const resp = await api.get(`/species/${id}`);
	return resp.data;
};

export const postSpecie = async (specieData) => {
	const resp = await api.post('/species', { species: specieData });
	return resp.data;
};

export const putSpecie = async (id, specieData) => {
	const resp = await api.put(`/species/${id}`, { species: specieData });
	return resp.data;
};

export const deleteSpecie = async (id) => {
	const resp = await api.delete(`/species/${id}`);
	return resp;
};


export const addSpecie = async (regionId, specieId,environmentId) => {
	const resp = await api.put(`/regions/${regionId}/species/${specieId}/environments/${environmentId}`);
	return resp.data;
};
