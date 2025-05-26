export const Numbers = ({ persons, data, filter }) => {
	let filteredPersons = [];

	if (filter) {
		filteredPersons = persons.filter((person) =>
			person.name.toLowerCase().includes(filter.toLowerCase())
		);
		console.log("Filtered applied:", filter)
	} else {
		filteredPersons = persons;
		console.log("No filter applied");
	}

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
