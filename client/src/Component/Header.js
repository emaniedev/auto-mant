import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    let navOnChange = e => {
        let activo = document.querySelector('.nav-item.active');
        if (activo) {
            console.log("Hay activo!");
            activo.classList.remove('active');
        }
        console.log(e.target)
        if (e.target.classList.contains('navbar-brand')) {
            console.log(document.querySelector('.nav-item'));
            document.querySelector('.nav-item').classList.add('active');
            //document.querySelector('nav-item').classList.add('active');
        } else {
            console.log("Se pone activo el que toca");
            e.target.parentElement.classList.add('active');
        }
    }
    return (
        <header className="App-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className='navbar-brand' to='/' onClick={navOnChange}>
                    Auto-Mant!
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link className='nav-link' to='/' onClick={navOnChange}>
                                   Home
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link className='nav-link' to='/createForm' onClick={navOnChange}>
                                    Crear Vehículo
                                </Link>
                            </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/viewautos' onClick={navOnChange}>
                                Ver Vehículos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Header;