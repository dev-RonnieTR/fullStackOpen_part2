import '../styles.css'

export const Total = ({ parts }) => {
	const totalExcercises = parts.reduce((acc, part) => acc + part.exercises, 0);

	return <p>Total of {totalExcercises} exercises</p>;
};
