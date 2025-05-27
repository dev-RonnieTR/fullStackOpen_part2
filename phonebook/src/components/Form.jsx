import { useState } from "react";
import { FormTextInput, SubmitButton } from ".";
import personService from "../services/persons";

export const Form = ({ persons, setPersons, data }) => {
	const emptyData = Object.fromEntries(data.map((data) => [data, ""]));
	//Returns an object where each key is an element from the data array, and each value is initialized to an empty string.
	// Example: emptyData = { name: "", number: "", ... }

	const [values, setValues] = useState(emptyData); //State that will work as the onChange handler for every text input

	const handleChange = (event) => {
		console.log(`Input changed: ${event.target.id} = ${event.target.value}`);
		setValues((prevState) => {
			const newState = {
				...prevState,
				[event.target.id]: event.target.value,
			};
			console.log("Updated form state:", newState);
			return newState;
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (persons.some((person) => person.name === values.name)) {
			console.warn(`${values.name} is already in the phonebook`);
			alert(`${values.name} is already added to phonebook`);
			return;
		}

		console.log("Submitting form with values:", values);
		const newPerson = { ...values, id: `${persons.length + 1}` };
		(async () => {
			try {
				console.log("Posting new person to API...");
				const response = await personService.create(newPerson);
				setPersons((prevState) => [...prevState, response]);
				console.log("POST was successful. API has been updated")
				setValues(emptyData);
			} catch (error) {
				console.error(error)
			}
		})();
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<h2>Add a new person</h2>
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
		</section>
	);
};
