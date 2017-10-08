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
            .attr("fill", "#2B84EA")
            .attr("opacity", "0.3")
            .merge(pathsel)
            .attr("d", area);

        const textsel = g.selectAll("text.firm").data(data);
        textsel.enter()
            .append("text")
            .classed("firm", true)
            .merge(textsel)
            .text((d, i) => {
                const val = Math.floor(d[d.length-1].close).toLocaleString();
                switch(i) {
                    case 0:
                        return 'Savings account $'+val;
                    case 1:
                        return 'Traditional investor $'+val;
                    case 2:
                        return 'Blueprint investing $'+val;
                }
            })
            .attr('font-weight', (d, i) => i === 2 ? '700' : '400')
            .attr('text-anchor', 'end')

            .attr('y', d => y(d[d.length-1].close) + 30)
            .attr('x', d => x.range()[1] - 30);

        g.select(".axis-bottom")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x)
                .tickValues([5, 10, 15, 20, 25, 30]));

        g.select("#label-year")
            .attr('y', y(0)+20)
            .attr('font-size', 16+'px')
            .attr('font-weight', '700')
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate(prevProps) {
        this.draw(prevProps);
    }

    render() {
        return (
            <div className="interest-container"
                 style={{
                     width: this.props.width + "px",
                     marginTop: 150+'px',
                     marginBottom: 100,
                     marginLeft: "auto",
                     marginRight: "auto",
                     position: 'relative'}}>
                <div className="sliders" style={{position:'absolute', left: 100+'px', top: 20+'px'}}>
                <h2>Build your wealth</h2>
                    We’ll help you build wealth while saving a fortune on taxes and fees <br />
                    Use the sliders to find out how much you could earn on your investments<br /><br />
                <b>Starting investment ${(Math.floor(this.state.startAmount/1000)*1000).toLocaleString()}</b><br />
                <input type="range" min="1000" max="100000"
                       value={this.state.startAmount}
                       onChange={event => this.setState({startAmount: +event.target.value})}
                       style={{width: 260+'px'}}
                    />
                    <br />
                    <b>Monthly deposit ${(Math.floor(this.state.monthlyAmount/5)*5).toLocaleString()}</b><br />
                <input type="range" min="0" max="2000"
                       value={this.state.monthlyAmount}
                       onChange={event => this.setState({monthlyAmount: +event.target.value})}
                       style={{width: 260+'px'}}
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
                        <text id="label-year">Year</text>
                    </g>


                </svg>
            </div>
        );
    }
}