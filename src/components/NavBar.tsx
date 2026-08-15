import { Link } from "react-router-dom";

export default function NavBar(): React.ReactElement {
    return (
        <>
            <header>
                <nav aria-label="Main navigation">
                    <ul
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            listStyleType: "none",
                            justifyContent: "center",
                            padding: 0,
                        }}
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
