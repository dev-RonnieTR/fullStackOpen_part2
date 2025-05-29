const UserInput = ({ value, setValue }) => {
	const handleChange = (event) => {
		const inputValue = event.target.value;
		console.log(
			"User input detected. Value: ",
			inputValue ? inputValue : "[blank]"
		);
		setValue(inputValue);
	};

	return (
		<div>
			<span>Find a country: </span>
			<input type="text" value={value} onChange={handleChange} />
		</div>
	);
};

export default UserInput;