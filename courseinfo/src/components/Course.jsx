import { Header, Content, Total } from ".";

export const Course = ({ course }) => {
		console.log("testing");

	return (
		<>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</>
	);
};
