import { useState } from "react";
import { Form } from './components';
import { Numbers } from './components';

const data = ["name", "number", "age", "height"]; //Array that contains the pieces of data to be collected from the person. They have to be used as the id for the inputs
const newData = Object.fromEntries(data.map((data) => [data, ""]));
//Returns an object where each key is an element from the data array, and each value is initialized to an empty string.
// Example: newData = { name: "", number: "", ... }

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-1234567" },
	]);
	return (
		<>
			<h1>Phonebook</h1>
			<Form persons={persons} setPersons={setPersons} data={data} newData={newData} />
			<Numbers persons={persons} data={data} />
		</>
	);
};

export default App;
