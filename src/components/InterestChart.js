import React, { Component } from 'react';
import * as d3 from 'd3';
import './InterestChart.css';

export default class InterestChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startAmount: 30000,
            monthlyAmount: 500,
        }
    }
    draw(prevProps = {}) {
        let svg = d3.select(this.svg),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +this.props.width - margin.left - margin.right,
            height = +this.props.height - margin.top - margin.bottom,
            g = svg.select(".container").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let x = d3.scaleLinear()
            .rangeRound([0, width]);

        let y = d3.scaleLinear()
            .rangeRound([height, 0]);

        let area = d3.area()
            .x(function(d) { return x(d.date); })
            .y1(function(d) { return y(d.close); });

        const months = 30*12;

        // A = A (1 + i/(12n)) + M/n

        const interests = [0.01, 0.03, 0.04];
        const predictions = [[this.state.startAmount], [this.state.startAmount], [this.state.startAmount]];

        for(let i = 1; i <= months; ++i) {
            for(let j = 0; j < predictions.length; ++j) {
                predictions[j].push(predictions[j][i-1] * (1 + interests[j]/12) + this.state.monthlyAmount);
            }
        }

        let data = [
            d3.range(0, months, 1).map(t => ({date: t/12, close: predictions[0][t] })),
            d3.range(0, months, 1).map(t => ({date: t/12, close: predictions[1][t] })),
            d3.range(0, months, 1).map(t => ({date: t/12, close: predictions[2][t] })),
        ];

        x.domain(d3.extent([].concat(...data), function(d) { return d.date; }));
        y.domain([0, d3.max([].concat(...data), function(d) { return d.close; })]);
        area.y0(y(0));

        const pathsel = g.selectAll("path.line").data(data);
        pathsel.enter()
            .append("path")
            .classed("line", true)
            .attr("fill", "steelblue")
            .attr("opacity", "0.1")
            .merge(pathsel)
            .attr("d", area);

        g.select(".axis-bottom")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x)
                .tickValues([5, 10, 15, 20, 25, 30]));
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate(prevProps) {
        this.draw(prevProps);
    }

    render() {
        return (
            <div className="container" style={{width: this.props.width + "px"}}>
                <div className="sliders" style={{position:'absolute', left: 100+'px', top: 200+'px'}}>
                    Starting investment ${this.state.startAmount}<br />
                <input type="range" min="1000" max="100000"
                       value={this.state.startAmount}
                       onChange={event => this.setState({startAmount: +event.target.value})}
                       style={{width: 300+'px'}}
                    />
                    <br />
                    Monthly deposit ${this.state.monthlyAmount}<br />
                <input type="range" min="0" max="2000"
                       value={this.state.monthlyAmount}
                       onChange={event => this.setState({monthlyAmount: +event.target.value})}
                       style={{width: 300+'px'}}
                    />
                </div>
                <svg
                    ref={svg => (this.svg = svg)}
                    width={this.props.width + 'px'}
                    height={this.props.height + 'px'}
                    style={{
                        zIndex: 4,
                        overflow: 'visible',
                    }}>

                    <g className="container">
                        <g className="axis-bottom" />
                    </g>

                </svg>
            </div>
        );
    }
}