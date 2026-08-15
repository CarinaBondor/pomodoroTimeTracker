import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App(): React.ReactElement {
    return (
        <>
            <main>
                <NavBar />

                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
