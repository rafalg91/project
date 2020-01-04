import React, { Component } from 'react'
import { connect } from "react-redux";
import { skillsFetched } from "../actions";

class Skills extends Component {

  componentDidMount() {
    fetch("http://localhost:8000/api/skills")
      .then(res => res.json())
      .then(json => this.props.skillsFetched(json))
  }

  render() {
    return (
      <div>
        <article className="panel is-info panel--small">
          <p class="panel-heading">
            Skills
          </p>  
          <div className="panel-block">
            <p className="control has-icons-left">
              <input className="input is-info" type="text" placeholder="Search workers" />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true" />
              </span>
            </p>
          </div>
          {this.props.skills.map(skill =>
          <a className="panel-block" key={skill.id}>
            <span className="panel-icon">
              <i className="fas fa-user" aria-hidden="true" />
            </span>
            {skill.name}
          </a>   
          )}
        </article>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
};
const mapDispatchToProps = { skillsFetched };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);