import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

class Chart extends Component {

  componentDidMount() {

  }

  render() {

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
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
    </VictoryChart>
    )
  }
}

const style = {
  chart: {
    height: '500px'
}}

export default Chart;
