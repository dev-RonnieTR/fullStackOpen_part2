import { useEffect, useState } from "react";
import { UserInput, Results } from "./components";
import countriesService from "./services/countries";

const App = () => {
	const [value, setValue] = useState("");
	const [countries, setCountries] = useState([]);

	const fetchAndSetCountries = async () => {
		try {
			console.log("Fetching countries...");
			const response = await countriesService.getAll();
			setCountries(response);
			console.log("Fetch successful");
		} catch {
			console.log("Fetch failed");
		}
	};

	useEffect(() => {
		fetchAndSetCountries();
	}, []);

	if (!countries.length) return <p>Loading...</p>; //Renders a loading message if the fetching is still in process

	return (
		<>
			<UserInput value={value} setValue={setValue} />
			<Results value={value} setValue={setValue} countries={countries} />
		</>
	);
};

export default App;
