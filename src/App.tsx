import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "@fontsource/cedarville-cursive";
import "@fontsource/merriweather/400.css";
import tomato from "/src/assets/tomato.png";

function App(): React.ReactElement {
    return (
        <>
            <NavBar />
            <main>
                <div className="routes-container">
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
                </div>
                <img
                    src={tomato}
                    alt="Logo"
                    className="tomato-image"
                />
            </main>
        </>
    );
}

export default App;
