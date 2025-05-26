const capitalize = (word) => {
	return word[0].toUpperCase() + word.slice(1);
};

export const FormTextInput = ({ id, onChange, values }) => {
	return (
		<div>
			<label htmlFor={id}>{capitalize(id)}: </label>
			<input id={id} type="text" onChange={onChange} value={values[id]} />
		</div>
	);
};
