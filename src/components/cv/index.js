/**
    * @description      : 
    * @author           : christian
    * @group            : 
    * @created          : 11/11/2021 - 21:12:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/11/2021
    * - Author          : christian
    * - Modification    : 
**/
import React, { Component } from 'react';
import Header from './_header';
import SiderBar from './_siderBar';
import Main from './_main';
import SubMain from './_subMain';
import Footer from './_footer';
import "./index.scss";
export default class Cv extends Component { 
    render() {
        return (
            <main>
                <div className="container">
                    <div className="block-cv bw">
                        <Header />
                        <SiderBar />
                        <Main />
                        <SubMain />
                        <Footer />
                    </div>
                </div>
            </main>
        );
    }
}