/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 10/11/2021 - 00:29:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/11/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';
import "./footer.scss";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="banner--footer">
                        © cshungu.fr 2020-2021
                    </div>
                </div>
            </footer>
        )
    }
}