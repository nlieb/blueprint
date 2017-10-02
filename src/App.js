import React, { Component } from 'react';
import './App.css';

import BlueprintNavBar from './components/NavBar';
import InterestChart from './components/InterestChart';
import BlueprintInfoTextbox from './components/InfoTextbox';

class App extends Component {
    render() {

        return (
            <div className="container">
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                </head>
                <BlueprintNavBar/>
                <div className="content">
                    <InterestChart
                        width={960}
                        height={500}
                    />
                </div>
                <BlueprintInfoTextbox/>
            </div>
        );
    }
}

export default App;
