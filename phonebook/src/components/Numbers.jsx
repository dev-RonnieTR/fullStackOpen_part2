export const Numbers = ({ persons, data }) => {
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
