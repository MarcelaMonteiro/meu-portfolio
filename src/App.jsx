import "./App.css";
import { Outlet, Scripts } from "react-router";

function App() {
	return (
		<html>
			<head>
				<link rel="icon" href="data:image/x-icon;base64,AA" />
			</head>
			<body>
				<h1>Hello world!</h1>
				<Outlet />
				<Scripts />
			</body>
		</html>
	);
}

export default App;
