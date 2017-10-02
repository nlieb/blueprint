import React, { Component } from 'react';
import './App.css';

import InterestChart from './components/InterestChart';


class App extends Component {
    render() {

        return (
            <div className="container">
                <InterestChart
                    width={960}
                    height={500}

                />
            </div>
        );
    }
}

export default App;
