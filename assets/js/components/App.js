import React, { Component } from 'react'
import { connect } from "react-redux";
import { workersFetched } from "../actions";

class App extends Component {

  componentDidMount() {
    fetch("http://localhost:8000/workers")
      .then(res => res.json())
      .then(json => this.props.workersFetched(json))
  }

  render() {
    return (
      <div>
        <article className="panel is-info panel--small">
          <p class="panel-heading">
            Workers
          </p>  
          <div className="panel-block">
            <p className="control has-icons-left">
              <input className="input is-info" type="text" placeholder="Search workers" />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true" />
              </span>
            </p>
          </div>
          {this.props.workers.map(worker =>
          <a className="panel-block" key={worker.id}>
            <span className="panel-icon">
              <i className="fas fa-user" aria-hidden="true" />
            </span>
            {worker.name}
          </a>   
          )}
        </article>
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