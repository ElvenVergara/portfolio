import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
    const location = useLocation(); // Get the current route
    const [selected, setSelected] = useState(location.pathname);

    useEffect(() => {
        setSelected(location.pathname); // Update state when route changes
    }, [location]);

    return (      
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${selected === "/" ? "active" : ""}`}>
                                    <i className="fa-solid fa-user"></i> About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" className={`nav-link ${selected === "/resume" ? "active" : ""}`}>
                                    <i className="fa-solid fa-file-alt"></i> Resume
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className={`nav-link ${selected === "/projects" ? "active" : ""}`}>
                                    <i className="fa-solid fa-code"></i> Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className={`nav-link ${selected === "/contact" ? "active" : ""}`}>
                                    <i className="fa-solid fa-envelope"></i> Contact
                                </Link>
                            </li>
                            <li className="nav-item d-lg-none">
                                <Link to="/contact" className={`nav-link`}>
                                    <i className="fa-solid fa-briefcase"></i> Hire Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="hire-me-container d-none d-lg-block">
                <Link to="/contact" className={`hire-me`}>
                    <i className="fa-solid fa-briefcase"></i> Hire Me
                </Link>
            </div>


            <div className="top-bar text-center position-relative">
                <div className="top-bar-inner">
            
                    <ul className="social-list list-inline mx-auto">
                        <li className="list-inline-item me-0 me-md-1 me-lg-2"><a className="shadow" href="https://github.com/ElvenVergara" target="_blank"><i className="fa-brands fa-github fa-fw"></i></a></li>
                        <li className="list-inline-item me-0 me-md-1 me-lg-2"><a className="shadow" href="https://www.linkedin.com/in/elven-vergara/" target="_blank"><i className="fa-brands fa-linkedin-in fa-fw"></i></a></li>
                        <li className="list-inline-item me-0 me-md-1 me-lg-2"><a className="shadow" href="https://stackoverflow.com/users/12480289/elven-vergara" target="_blank"><i className="fa-brands fa-stack-overflow fa-fw"></i></a></li>
                    </ul>
                    
                </div>
                
            </div>
        </>
    );
}

export default Navbar;
