import React, { Component } from 'react'
import { connect } from "react-redux";
import { skillsFetched, addSkill } from "../actions";
import SkillsList from "../components/skills/SkillList";
//import AddSkill from "../components/skills/AddSkill";

class Skills extends Component {

  componentDidMount() {
    fetch("http://localhost:8000/api/skills")
      .then(res => res.json())
      .then(json => this.props.skillsFetched(json))
  }

  render() {
    const { skills, addSkill } = this.props;
    
    return (
      <>
        <p className="title is-3">
          Skills
        </p>
        <table className="table is-striped">
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                Name
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <SkillsList skills={skills} />
          </tbody>
        </table>
        <div className="buttons">
          <button className="button is-primary" onClick={() => addSkill('test123')}>Add skill</button>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  }
};
const mapDispatchToProps = { skillsFetched, addSkill };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);