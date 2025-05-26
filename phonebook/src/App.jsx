import { useState } from "react";
import { Form, Numbers, Filter } from "./components";

const data = ["name", "number"]; //Array that contains the pieces of data to be collected from the person. They have to be used as the id for the inputs

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-1234567" },
	]);
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
