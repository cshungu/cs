/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 10/11/2021 - 00:37:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';
import World from '../../images/world-wide-web.png';
import "./Content.scss";

export default class Content extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <div className="block-home bw d-flex flex-row flex-nowrap mb-2">
                        <div className="banner--handLeft">
                            <div className="banner--info">
                                <h3>Job Title</h3>
                                <p>Développer Full-Stack</p>
                            </div>
                            <div className="banner--info">
                                <h3>Name</h3>
                                <p>Christian Shungu</p>
                            </div>
                            <div className="banner--info">
                                <h3>Sexe</h3>
                                <p>Male</p>
                            </div>
                            <div className="banner--info">
                                <h3>EMAIL ADDRESS</h3>
                                <p>christianshungu@keretben.com</p>
                            </div>
                        </div>
                        <div className="banner--handRight">
                            <div className="handRight-slider">
                            </div>
                            <div className="handRight-info px-1">
                                <h3>On sait depuis longtemps que travailler avec mise . </h3>
                                <p>L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction.</p>
                            </div>
                            <div className="handRight-btn">
                                <a className="contact"> Contact me</a>
                            </div>
                            <div className="handRight-social py-1">
                                <span>Follow : </span>
                                <a href="#">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="block-home">
                        <h3 className="mb-1">Projets</h3>
                        <div className="block--grid-container">
                            <div className="block--grid-item">
                               <picture>
                                  <img src={World} alt="Bandeau"  />
                                </picture>
                                <div className=""></div>
                            </div>
                            <div className="block--grid-item">
                                <picture>
                                  <img src={World} alt="Bandeau"  />
                                </picture>
                                <div className=""></div>
                            </div>
                            <div className="block--grid-item">
                                <picture>
                                  <img src={World} alt="Bandeau"  />
                                </picture>
                                <div className=""></div>
                            </div>
                             <div className="block--grid-item">
                                <picture>
                                  <img src={World} alt="Bandeau"  />
                                </picture>
                                <div className=""></div>
                            </div>
                             <div className="block--grid-item">
                                <picture>
                                  <img src={World} alt="Bandeau"  />
                                </picture>
                                <div className=""></div>
                            </div>
                             <div className="block--grid-item">
                                <picture>
                                  <img src={World} alt="Bandeau"  />
                                </picture>
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}