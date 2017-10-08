import React, { Component } from 'react';
import './App.css';

import BlueprintNavBar from './components/NavBar';
import InterestChart from './components/InterestChart';
import BlueprintInfoTextbox from './components/InfoTextbox';
import EasyProcessBox from './components/EasyProcessBox';

class App extends Component {
    render() {

        return (
            <div className="container">
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                </head>
                <BlueprintNavBar/>
                <div>
                    <InterestChart
                        width={960}
                        height={500}
                    />
                    <EasyProcessBox/>
                </div>
            </div>
        );
    }
}

export default App;
