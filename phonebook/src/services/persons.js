import axios from "axios";

const baseURL = "http://localhost:3001/persons";

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

export default { getAll, create, update };
