import { useState, useEffect } from "react";
import { Form, Numbers, Filter } from "./components";
import personService from "./services/persons";

const data = ["name", "number"]; //Array that contains the pieces of data to be collected from the person. They have to be used as the id for the inputs

const App = () => {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				console.log("Fetching JSON data");
				const initialPersons = await personService.getAll();
				setPersons(initialPersons);
				console.log("Fetch successful");
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		})();
	}, []);

	const [filter, setFilter] = useState("");
	return (
		<>
			<h1>Phonebook</h1>
			<Filter filter={filter} setFilter={setFilter} />
			<Form 
				persons={persons} 
				setPersons={setPersons} 
				data={data} />
			<Numbers
				persons={persons}
				setPersons={setPersons}
				data={data}
				filter={filter}
			/>
		</>
	);
};

export default App;
