import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import "./ComponentStyles.css"

function Navbar (props) {

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setIsLogged(props.logged);
    }, [props.logged])

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link className="navbar-brand text-center" to="/"><strong className='sentinelsColor'>SENTINELS</strong></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        {isLogged 
            ? 
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Usuarios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>
            : 
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Registrarse</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Ingresar</Link>
                    </li>
                </ul>
            </div>
        }
    </nav>
    );
}

export default Navbar;