/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 13/11/2021 - 19:10:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/11/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';
import Bar from '../../../src/images/bar.png';

export default class Footer extends Component { 
    render() {
        return (
            <div className="footer">
                <div className="bandeau">
                    <img src={Bar} alt="Bandeau"  />
                </div>
            </div>
        );
    }
}