import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'; // Adjust the path as necessary
import About from './pages/About'; // Adjust the path as necessary
import Projects from './pages/Projects'; // Adjust the path as necessary
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/about" element={<About />}> </Route>
                <Route path="/projects" element={<Projects />}> </Route>
                <Route path="/contact" element={<Contact />}> </Route>
                <Route path="*" element={<Page404 />}> </Route>
            </Routes>
        </BrowserRouter>
    )
    
}

export default AppRoutes;