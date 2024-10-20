import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
export default function NavBar() {
    const navigate = useNavigate(); // Call useNavigate here at the top level

    const HandleLogOut = () => {
        // Add any logout logic if necessary, then navigate to login
        Cookies.remove("idToken")
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">JVLcode</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    {!isAuthenticated() && (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </>
                    )}
                    {isAuthenticated() && (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={HandleLogOut} style={{ cursor: "pointer" }}>
                                    Logout
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}
