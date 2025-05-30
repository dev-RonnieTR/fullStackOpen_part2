import Button from "./Button";

const Results = ({ value, setValue, countries }) => {
	const countryNames = countries.map((country) => country.name.common);

	if (!value) {
		return <p>Type in a country to see its information.</p>;
	} //Early return if the user has not entered anything in the input field

	const filter = countryNames.filter((country) =>
		country.toLowerCase().includes(value.toLowerCase())
	);
	const doesValueMatch = filter.some(
		(country) => country.toLowerCase() === value.toLowerCase()
	);

	if (filter.length === 1 || doesValueMatch) {
		const country = doesValueMatch
			? countries.find(
					(country) => country.name.common.toLowerCase() === value.toLowerCase()
			  )
			: countries.find((country) => country.name.common === filter[0]);

		const languages = Object.values(country.languages);

		return (
			<div>
				<h2>{country.name.common}</h2>
				<p>Capital: {country.capital}</p>
				<p>Area: {country.area}</p>
				<h3>Languages: </h3>
				<ul>
					{languages.map((language) => (
						<li key={language}>{language}</li>
					))}
				</ul>
				<img src={country.flags.svg} alt={country.flags.alt} />
			</div>
		);
	}

	if (filter.length === 0) {
		return <p>No country with the name "{value}"</p>;
	}
	if (filter.length > 10) {
		return (
			<p>
				There are too many countries with "{value}". Type in more letters to
				further narrow the search.
			</p>
		);
	}

	if (filter.length > 1 && filter.length <= 10) {
		return (
			<div>
				<p>Possible matches:</p>
				<ul>
					{filter.map((country) => (
						<li id={country} key={country}>
							<span>{country}</span>{" "}
							<Button
								onClick={(e) => setValue(e.target.parentElement.id)}
								text="Show"
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}
};

export default Results;
