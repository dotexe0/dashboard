import React, { Component } from 'react';
// import Table from '../components/Table';
import NavigationDashboard from '../components/NavigationDashboard';
import Chart from '../components/Chart';
import ReduxToastr from 'react-redux-toastr';
// import 'react-redux-toastr/src/styles/index';
// import logo from '../../assets/logo.svg';
import '../../css/App.css';

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     chartData: {}
  //   }
  // }

  // componentWillMount(){
  //   this.getChartData();
  // }

  // getChartData(){
  //   this.setState({
  //     chartData: {
  //       labels: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple', 'Dash', 'NEM', 'IOTA', 'Monero', 'NEO'],
  //       datasets:[
  //         {
  //           label:'Reddit Followers',
  //           data:[
  //             200000,
  //             181045,
  //             153060,
  //             106519,
  //             105162,
  //             95072
  //           ],
  //           backgroundColor:[
  //             'rgba(255, 99, 132, 0.6)',
  //             'rgba(54, 162, 235, 0.6)',
  //             'rgba(255, 206, 86, 0.6)',
  //             'rgba(75, 192, 192, 0.6)',
  //             'rgba(153, 102, 255, 0.6)',
  //             'rgba(255, 159, 64, 0.6)',
  //             'rgba(255, 99, 132, 0.6)'
  //           ]
  //         }
  //       ]
  //     }
  //   });
  // }

  render() {
    return (
      <div className="App">
      <link href="http://diegoddox.github.io/react-redux-toastr/7.1/react-redux-toastr.min.css" rel="stylesheet" type="text/css" />
        <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
        <h2>CryptoCommunity</h2>
        <NavigationDashboard />
        <Chart />

      </div>
    );
  }
}

export default App;
