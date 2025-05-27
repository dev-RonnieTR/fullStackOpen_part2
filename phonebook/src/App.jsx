import { useState, useEffect } from "react";
import { Form, Numbers, Filter } from "./components";
import axios from "axios";

const data = ["name", "number"]; //Array that contains the pieces of data to be collected from the person. They have to be used as the id for the inputs

const fetchAndSet = async (url, setterFunction) => {
	try {
		console.log("Fetching JSON data")
		const response = await axios.get(url);
		console.log("Fetch successful")
		setterFunction(response.data);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

const App = () => {
	const [persons, setPersons] = useState([]);
	useEffect(() => {
		fetchAndSet("http://localhost:3001/persons", setPersons);
	}, []);

	const [filter, setFilter] = useState("");
	return (
		<>
			<h1>Phonebook</h1>
			<Filter filter={filter} setFilter={setFilter} />
			<Form persons={persons} setPersons={setPersons} data={data} />
			<Numbers persons={persons} data={data} filter={filter} />
		</>
	);
};

export default App;
