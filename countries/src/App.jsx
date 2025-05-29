import { useState } from "react";
import { UserInput } from "./components";

const App = () => {
	const [value, setValue] = useState("");

	return (
		<>
			<UserInput value={value} setValue={setValue} />
		</>
	);
};

export default App;
