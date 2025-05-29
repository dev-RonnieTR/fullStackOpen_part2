import { useState, useEffect } from "react";
import { Form, Numbers, Filter, Notification } from "./components";
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
	const [message, setMessage] = useState(null);
	return (
		<>
			<h1>Phonebook</h1>
			<Notification message={message} setMessage={setMessage} />
			<Filter filter={filter} setFilter={setFilter} />
			<Form
				persons={persons}
				setPersons={setPersons}
				data={data}
				setMessage={setMessage}
			/>
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
