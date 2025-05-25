const Course = ({ course }) => {
	return (
		<>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts}/>
		</>
	);
};

const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((part) => (
				<Part key={part.id} name={part.name} exercises={part.exercises} />
			))}
		</>
	);
};

const Part = ({ name, exercises }) => {
	return (
		<p>
			{name}: {exercises}
		</p>
	);
};

const Total = ({ parts }) => {
	const totalExcercises = parts.reduce((acc, part) => acc + part.exercises, 0);

	return <p>Total of {totalExcercises} exercises</p>;
};

const App = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
			{ id: 1, name: "Fundamentals of React", exercises: 10 },
			{ id: 2, name: "Using props to pass data", exercises: 7 },
			{ id: 3, name: "State of a component", exercises: 14 },
			{ id: 4, name: "Redux", exercises: 11 },
		],
	};

	return (
		<>
			<Course course={course} />
		</>
	);
};

export default App;
