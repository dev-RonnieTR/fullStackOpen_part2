import axios from "axios";

/**
 * Gets the API endpoint based on the country passed as argument. If no argument is provided, it gets the collection endpoint
 * @param {string} [country]
 * @returns {string} API endpoint that contains the requested resource or collection of resources
 */
const getURL = (country = undefined) =>
	country
		? `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
		: "https://studies.cs.helsinki.fi/restcountries/api/all";

/**
 *
 * @param {function} requestFn
 * @returns {any} fetched value
 */
const handleRequest = async (requestFn) => {
	try {
		const response = await requestFn();
		return response.data;
	} catch (error) {
		console.log("Could not fetch:", error);
	}
};

/**
 * Fetches the collection of all countries in the API.
 * @returns Array of country objects.
 */
const getAll = () => handleRequest(() => axios.get(getURL()));

/**
 * Fetches the resource of the specific country
 * @param {string} country
 * @returns  an object containing country information
 */
const get = (country) => handleRequest(() => axios.get(getURL(country)));

export default { getAll, get };
