export const Filter = ({ filter, setFilter }) => {
	const handleChange = (event) => {
		setFilter(() => {
			console.log("Updated filter input:", event.target.value);
			return event.target.value;
		});
	};

	return (
		<section>
			<label htmlFor="search">Filter shown with: </label>
			<input id="search" type="text" value={filter} onChange={handleChange} />
		</section>
	);
};
