import { useEffect, useMemo } from "react";

export const Numbers = ({ persons, data, filter }) => {
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

	return (
		<section>
			<h2>Numbers</h2>
			{filteredPersons.map((person) => (
				<div key={person.name}>
					{data.map((data) => (
						<span key={`${person.name}-${data}`}>{person[data]} </span>
					))}
				</div>
			))}
		</section>
	);
};
