// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import NavShared from "./pages/NavShared";
import Resume from "./pages/Resume";
import GitHub from "./pages/GitHub";
import OneProject from "./pages/OneProject";
import Error from "./pages/Error";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<NavShared />}>
					<Route index element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/oneproject/:id" element={<OneProject />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/github" element={<GitHub />} />
					<Route path="/*" element={<Error />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
