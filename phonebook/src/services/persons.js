import axios from "axios";

const baseURL = "/api/persons";

const handleRequest = async (requestFunction, requestType) => {
	try {
		const request = await requestFunction();
		return request.data;
	} catch (error) {
		console.error(`API request failed. Could not ${requestType}.`, error);
		throw error;
	}
};

const getAll = () => handleRequest(() => axios.get(baseURL), "fetch");

const create = (newObject) =>
	handleRequest(() => axios.post(baseURL, newObject), "create");

const update = (id, newObject) =>
	handleRequest(() => axios.put(`${baseURL}/${id}`, newObject), "update");

const remove = (id) =>
	handleRequest(() => axios.delete(`${baseURL}/${id}`), "delete");

export default { getAll, create, update, remove };
