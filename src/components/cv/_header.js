/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 13/11/2021 - 18:48:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';
import Bar from '../../../src/images/bar.png';

export default class CvHeader extends Component { 
    render() {
        return (
            <div className="header d-flex flex-column" role="heading" aria-level="1">
                <div className="bandeau">
                    <img src={Bar} alt="Bandeau"  />
                </div>
                <h2 className="mt-2 mb-1 ml-2">Master Projet informatique (Bac+4)</h2>
            </div>
        );
    }
}