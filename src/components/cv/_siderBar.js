/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 13/11/2021 - 19:10:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';
import MyPhoto from '../../../src/images/christian.png';
export default class SiderBar extends Component { 
    render() {
        return (
            <div className="siderbar">
                <div className="siderbar-content d-flex flex-column justify-content-center align-items-center">
                    <div className="block bt mt-1 wt">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img src={MyPhoto} alt="MyPhoto" />
                            <h3> Christian Shungu</h3>
                        </div>
                    </div>
                    <div className="block">
                        <div className="">
                            <span className="d-flex flex-column justify-content-center align-items-center mb-2">
                                <i className="fas fa-at br-1 p-1 mb-1"></i>
                                CHRISTIANSHUNGU@GMAIL.COM
                            </span>
                            <span className="d-flex flex-column justify-content-center align-items-center mb-2">
                                <i className="fas fa-tty br-1 p-1 mb-1"></i>
                                06.03.62.01.81
                            </span>
                            <span className="d-flex flex-column justify-content-center align-items-center mb-2">
                                <a href="https://www.linkedin.com/in/christian-shungu-4964b2121/" className="d-flex flex-column justify-content-center align-items-center mb-2" target="_blank">
                                <i className="fab fa-linkedin-in br-1 p-1 mb-1"></i>
                                </a>
                                LinkedIn
                            </span>
                            <span className="d-flex flex-column justify-content-center align-items-center mb-2">
                                <a href="https://gitlab.com/cshungu" target="_blank">
                                    <i className="fab fa-gitlab br-1 p-1 mb-1"></i>
                                </a>
                                Gitlab.com
                            </span>
                            <span className="d-flex flex-column justify-content-center align-items-center mb-2">
                                <a href="https://github.com/cshungu" target="_blank" className="d-flex flex-column justify-content-center align-items-center mb-2">
                                    <i className="fab fa-github br-1 p-1 mb-1"></i>
                                </a>
                                Github.com
                            </span>
                        </div>
                    </div>
                    <div className="block">
                        <div className="d-flex flex-column justify-content-center align-items-center mb-2 bt p-1">
                            <h4 className="mb-1">Adresse</h4>
                            <address>
                                <span>50 RUE PIERRE MENDES FRANCE,</span><br/>
                                <span>94190 VILLENEUVE SAINT GEORGES</span>
                            </address>
                        </div>
                    </div>
                    <div className="block">
                        <div className="d-flex flex-column justify-content-center align-items-center mb-2 bt p-1">
                            <h4 className="mb-1"> OBJECTIF</h4>
                            <p> Envie de progresser au contact d’une équipé passionnée et engagée</p>
                        </div>
                    </div>
                    <div className="block">
                        <div className="d-flex flex-column justify-content-center align-items-center mb-2 bt p-1">
                            <h4 className="mb-1">COMPÉTENCES</h4>
                            <p> Passionné d’informatique et nouvelles technologies, le monde du web mon domaine de prédilection. Autodidacte, curieux et rigoureux, je m’adapte en toute circonstance</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}