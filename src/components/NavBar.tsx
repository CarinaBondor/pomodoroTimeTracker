import { Link } from "react-router-dom";

export default function NavBar(): React.ReactElement {
    return (
        <>
            <header className="header">
                <nav aria-label="Main navigation">
                    <ul>
                        <li>
                            <Link
                                to="/"
                                viewTransition
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                viewTransition
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
