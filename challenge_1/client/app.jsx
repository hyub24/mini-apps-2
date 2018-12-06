import React from 'react';
import ReactPaginate from 'react-paginate';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Event from './Event.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query: '',
      pages: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  fetchData(start) {
    axios.get(`/events?q=${this.state.query}&_page=${start}`)
      .then(response => {
        this.setState({
          pages: Math.ceil(response.headers['x-total-count']/10),
          data: response.data
        })})
      .catch(error => console.log(error));
  }

  handleChange() {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit() {
    if(this.state.query) {
      this.fetchData(1);
    }
  }

  handlePageChange(data) {
    let start = data.selected + 1;
    this.fetchData(start);
  }

  render() {
    let events;
    let pagination;
    if(this.state.data.length) {
      events = this.state.data.map(element => <Event event={element} />);
      pagination = 
        <ReactPaginate 
          pageCount={this.state.pages}
          pageRangeDisplayed={10}
          marginPagesDisplayed={2}
          nextLabel={'next'}
          previousLabel={'previous'}
          breakLabel={'...'}
          onPageChange={this.handlePageChange}
          breakClassName={"break-me"}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />;
    } 
    return (
      <div>
        <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        {events}
        {pagination}
      </div>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));

