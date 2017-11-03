import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { connect } from 'react-redux';

class Chart extends Component {

  componentDidMount() {

  }


  render() {
    // console.log('charts props', this.props);
    // console.log('charts state', this.state);

    // this.props.coins.ETH.twitter.map( (element) => {
    //   console.log('mapped', element);
    // });
    var arrOfData = [];
    for (let element in  this.props.coins.ETH.twitter[0]) {
      console.log('element', element);
      arrOfData.push({x: element, y: this.props.coins.ETH.twitter[0][element]});
    }

    console.log('mutated', arrOfData)
    let date = this.props.coins.ETH.twitter[0];

    return (
      <VictoryChart
      theme={VictoryTheme.material}
      style={style.chart}
      >
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
        data={arrOfData}
      />
    </VictoryChart>
    )
  }
}

export default connect(state => state)(Chart)

const style = {
  chart: {
    height: '500px'
}}

