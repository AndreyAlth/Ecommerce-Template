import React from 'react';
import { Link } from 'react-router-dom';
import search from '../icons/search.png'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className='navbar-brand logo hover:text-indigo-900'>Spilup</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle category" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control search" type="search" placeholder="" aria-label="Search"/>
                        <button className="btn  search-button" type="submit">
                            <img src={search} alt="" />
                        </button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
