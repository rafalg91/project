import React, { Component } from 'react'
import { connect } from "react-redux";
import { workersFetched } from "../actions";

class App extends Component {

  componentDidMount() {
    fetch("http://127.0.0.1:8000/workers")
      .then(res => res.json())
      .then(json => this.props.workersFetched(json.results));
  }

  render() {
    return (
      <div>
        Workers
        <ul>
          {this.props.workers.map(worker =>
            <li key="{worker.name}">
              {worker.name}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workers: state.workers
  }
};
const mapDispatchToProps = { workersFetched };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);