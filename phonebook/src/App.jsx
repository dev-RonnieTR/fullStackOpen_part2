import { useState } from "react";

const Form = ({ persons, setPersons }) => {
	const [newName, setNewName] = useState("");
	const handleChange = (event) => {
		setNewName(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (persons.some((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		setPersons((prevState) => [...prevState, { name: newName }]);
		setNewName("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<FormTextInput label="Name" onChange={handleChange} newName={newName} />
			<SubmitButton text="Add" newName={newName} />
		</form>
	);
};

const FormTextInput = ({ label, onChange, newName }) => {
	return (
		<div>
			<label htmlFor={`${label}-input`}>{label}: </label>
			<input
				id={`${label}-input`}
				type="text"
				onChange={onChange}
				value={newName}
			/>
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
				<p key={person.name}>{person.name}</p>
			))}
		</section>
	);
};

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	console.log(persons);

	return (
		<>
			<h1>Phonebook</h1>
			<Form persons={persons} setPersons={setPersons} />
			<Numbers persons={persons} />
		</>
	);
};

export default App;
