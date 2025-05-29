import { useEffect, useState } from "react";
import { UserInput } from "./components";
import countriesService from "./services/countries";

const App = () => {
	const [value, setValue] = useState("");
	const [countries, setCountries] = useState([]);

	const fetchAndSetCountries = async () => {
		try {
			console.log("Fetching countries...");
			const response = await countriesService.getAll();
			const countryNames = response.map((country) => country.name.common);
			setCountries(countryNames);
			console.log("Fetch successful");
		} catch {
			console.log("Fetch failed");
		}
	};

	useEffect(() => {
		fetchAndSetCountries();
	}, []);

	if (!countries.length) return; //Nothing renders if countries is empty.

	return (
		<>
			<UserInput value={value} setValue={setValue} />
		</>
	);
};

export default App;
