/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 13/11/2021 - 20:21:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';

export default class SubMain extends Component { 
    render() {
        return (
            <div className="submain">
                <div className="submain-content">
                    <div className="block bt bb mt-1">
                        <h3 className="align-text-center">FORMATION</h3>
                    </div>
                    <div className="block tm-1">
                        <div className="block-experience-list ml-5 my-1">
                            <h5><i className="fas fa-check mr-1 text-primary"></i>Déc. 2020 à Juin 2021 : Certification</h5>
                            <ul className="ml-5">
                                <li>
                                    <a href="https://dyma.fr/certification/5f4128ab1593b57ef8d7c83e/5de1a78332cf6b3128beee34" target="_blank">
                                        <i className="fab fa-js mr-1 text-primary"></i>
                                    </a>
                                    Certification JavaScript6(Dyma).
                                </li>
                                <li>
                                    <a href="https://dyma.fr/certification/5f4128ab1593b57ef8d7c83e/5ec44a260e320871af33ecaa" target="_blank">
                                        <i className="mr-1 tsscript text-primary">TS</i>
                                    </a>
                                    Certification Type Script (Dyma)
                                </li>
                                <li>
                                    <a href="https://dyma.fr/certification/5f4128ab1593b57ef8d7c83e/6077538892e5cf4e20fee6d8" target="_blank">
                                    <i className="fab fa-php mr-1 text-primary"></i>
                                    </a>
                                    Certification PHP8(Dyma).
                                </li>
                                <li>
                                    <a href="https://dyma.fr/certification/5f4128ab1593b57ef8d7c83e/60ea04ae7fc35f0f15b5537d" target="_blank">
                                        <i className="fab fa-symfony mr-1 text-primary"></i>
                                    </a>
                                    Certification Symfony5(Dyma)
                                </li>
                                <li>
                                    <a href="https://dyma.fr/certification/5f4128ab1593b57ef8d7c83e/60ea04ae7fc35f0f15b5537d" target="_blank">
                                        <i className="fab fa-react mr-1 text-primary"></i>
                                    </a>
                                    Certification React(Dyma)
                                </li>
                            </ul>
                        </div>
                        <div className="block-experience-list ml-5 my-1">
                            <h5>
                                <i className="fas fa-check mr-1 text-primary"></i>
                                Jan. 2018 à Jan 2019 : Master projet informatique (Bac+4) à l’École CFA OFI.one de Paris
                            </h5>
                        </div>
                        <div className="block-experience-list ml-5 my-1">
                            <h5>
                                <i className="fas fa-check mr-1 text-primary"></i>
                                Sept. 2016 à Août 2017 : Titre Concepteur-Développeur en contrat professionnel (BAC +3) à l’École Groupe NextfAdvence (RNCP) de Paris.
                            </h5>
                        </div>
                        <div className="block-experience-list ml-5 my-1">
                            <h5>
                                <i className="fas fa-check mr-1 text-primary"></i>
                                2015 : Formation Dot.net Aton école informatique d’Arcueil.
                            </h5>
                        </div>
                        <div className="block-experience-list ml-5 my-1">
                            <h5>
                                <i className="fas fa-check mr-1 text-primary"></i>
                                2011 à 2013 : BTS service informatique aux organisations à l’École de Commerce ICOGES de Paris.
                            </h5>
                        </div>
                        <div className="block-experience-list ml-5 my-1">
                            <h5>
                                <i className="fas fa-check mr-1 text-primary"></i>
                                2010 : Classe préparatoire de mathématique au CNAM de Paris.
                            </h5>
                        </div>
                        <div className="block-experience-list ml-5 my-1">
                            <h5><i className="fas fa-check mr-1 text-primary"></i>2008 : Bac Scientifique (Congo-Kinshasa). </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}