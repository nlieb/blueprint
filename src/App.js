import React, { Component } from 'react';
import './App.css';

import BlueprintNavBar from './components/NavBar';
import InterestChart from './components/InterestChart';
import AchieveGoalsBox from './components/AchieveGoalsBox';
import EasyProcessBox from './components/EasyProcessBox';
import BuildWealthBox from './components/BuildWealthBox';

const darkBlue = "rgba(18, 107, 209, 0.86)";

class App extends Component {

    componentDidMount() {
        document.title = "blueprint";
    }

    render() {

        return (
            <div>
                <head>
                    <title>blueprint</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                </head>
                <BlueprintNavBar/>
                <div className="container-fluid" style={{backgroundColor: darkBlue}}>
                    <div className="container">
                        <AchieveGoalsBox/>
                    </div>
                </div>
                <div className="container">
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
