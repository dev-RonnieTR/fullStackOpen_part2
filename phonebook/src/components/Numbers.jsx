import { useEffect, useMemo } from "react";
import personService from "../services/persons";
import { Button } from ".";

export const Numbers = ({ persons, setPersons, data, filter }) => {
	let filteredPersons = useMemo(() => {
		return filter
			? persons.filter((person) =>
					person.name.toLowerCase().includes(filter.toLowerCase())
			  )
			: persons;
	}, [persons, filter]);
	//filteredPersons uses useMemo to memoize the result if "persons" or "filter" have not changed.

	useEffect(() => {
		if (filter) console.log("Filter applied:", filter);
		else console.log("No filter applied");
	}, [filter]);
	//Logs filter message only if the filter has changed

	const deleteNumber = async (id) => {
		const boolean = window.confirm(
			"Are you sure you want to delete this contact?"
		);

		if (boolean) {
			await personService.remove(id);
			setPersons((prevState) =>
				[...prevState].filter((person) => person.id !== id)
			);
			console.log("Contact deleted")
		} else {
			return;
		}
	};

	return (
		<section>
			<h2>Numbers</h2>
			{filteredPersons.map((person) => (
				<div key={person.id}>
					<span key={person.id}>
						{data.map((data) => (
							<span key={`${person.id}-${data}`}>{person[data]} </span>
						))}
					</span>
					<Button
						key={`delete-${person.id}`}
						onClick={() => deleteNumber(person.id)}
					/>
				</div>
			))}
		</section>
	);
};
