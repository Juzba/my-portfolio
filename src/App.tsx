import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import NavShared from './pages/NavShared';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavShared />}>
                    <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
