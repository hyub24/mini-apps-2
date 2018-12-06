import ReactDOM from 'react-dom';
import React from 'react';
import {Line} from 'react-chartjs-2';
import Date from './Date.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: [],
      data: []
    }
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(start, end) {
    let url;
    if(start && end) {
      url = `/crypto/history/${start}/${end}`
    } else {
      url = '/crypto/histor/default'
    }
    fetch(url)
      .then(response => response.json())
      .then((result) => {
        let labels = [];
        let data = [];
        for(let key in result.bpi) {
          labels.push(key);
          data.push(result.bpi[key]);
        }
        console.log(labels, data)
        this.setState({ labels, data });
        console.log(result);
      })
      .catch((err) => console.log(err));
  }

  render() {
    let line;
    if(this.state.data.length) {
      const data = {
        labels: this.state.labels,
        datasets: [
          {
            label: 'Bitcoin prices for the previous month in USD',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.data
          }
        ]
      };
      line = <Line data={data} />;
    }

    return(
      <div>
        <Date fetch={this.fetchData} />
        {line}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

