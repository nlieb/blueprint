import React, { Component } from 'react';
import './App.css';

import BlueprintNavBar from './components/NavBar';
import InterestChart from './components/InterestChart';
import BlueprintInfoTextbox from './components/InfoTextbox';
import EasyProcessBox from './components/EasyProcessBox';
import BuildWealthBox from './components/BuildWealthBox';

class App extends Component {
    render() {

        return (
            <div>
                <div className="container">
                    <head>
                        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    </head>
                    <BlueprintNavBar/>
                    <InterestChart
                        width={960}
                        height={500}
                    />
                </div>
                <div className="container-fluid">
                    <BuildWealthBox/>
                </div>
                <div className="container">
                    <EasyProcessBox/>
                </div>
            </div>
        );
    }
}

export default App;
