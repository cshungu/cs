/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 10/11/2021 - 00:17:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';
import './header.scss';
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Link to={`/`}   className="nav-brand" data-item='Cshungu'>Cshungu</Link>
                <nav>
                    <ul role="navigation" aria-label="menu principal">
                        <li>
                            <NavLink data-item='Accueil' to="/accueil" className="nav-link" >
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink  data-item='Cv' to="/cv"  className="nav-link" >Cv</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}