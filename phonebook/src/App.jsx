import { useState } from "react";

const data = ["name", "number"]; //Array that contains the pieces of data to be collected from the person. They have to be used as the id for the inputs
const newData = Object.fromEntries(data.map((data) => [data, ""]));
//Returns an object where each key is an element from the data array, and each value is initialized to an empty string.
// Example: newData = { name: "", number: "", ... }

const capitalize = (word) => {
	return word[0].toUpperCase() + word.slice(1);
};

const Form = ({ persons, setPersons }) => {
	const [values, setValues] = useState(newData); //State that will work as the onChange handler for every text input

	const handleChange = (event) => {
		setValues((prevState) => ({
			...prevState,
			[event.target.id]: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (persons.some((person) => person.name === values.name)) {
			alert(`${values.name} is already added to phonebook`);
			return;
		}
		setPersons((prevState) => [...prevState, values]);
	};

	return (
		<form onSubmit={handleSubmit}>
			{data.map((data) => (
				<FormTextInput
					key={data}
					id={data}
					onChange={handleChange}
					values={values}
				/>
			))}
			<SubmitButton text="Add" values={values} />
		</form>
	);
};

const FormTextInput = ({ id, onChange, values }) => {
	return (
		<div>
			<label htmlFor={id}>{capitalize(id)}: </label>
			<input id={id} type="text" onChange={onChange} value={values[id]} />
		</div>
	);
};

const SubmitButton = ({ text }) => {
	return <button type="submit">{text}</button>;
};

const Numbers = ({ persons }) => {
	return (
		<section>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<div key={person.name}>
					{data.map((data) => (
						<span key={`${person.name}-${data}`}>{person[data]} </span>
					))}
				</div>
			))}
		</section>
	);
};

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-1234567" },
	]);
	return (
		<>
			<h1>Phonebook</h1>
			<Form persons={persons} setPersons={setPersons} />
			<Numbers persons={persons} />
		</>
	);
};

export default App;
