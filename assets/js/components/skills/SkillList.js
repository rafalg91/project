import React, { Component }  from 'react';
import { connect } from "react-redux";
import { removeSkill } from "../../actions";

class SkillsList extends Component {
  
  render() {
    const {skills, removeSkill} = this.props;

    return(
      <>
        {skills.map(skill =>
          <tr key={skill.id}>
            <td>
              {skill.id}
            </td>
            <td>
              {skill.name}
            </td>
            <td>
            <div className="buttons are-small">
              <button className="button is-dlight">
                <span className="icon">
                  <i className="far fa-eye"></i>
                </span>
              </button>
              <button className="button is-dlight">
                <span className="icon">
                  <i className="fas fa-pencil-alt"></i>
                </span>
              </button>
              <button className="button is-danger is-outlined" onClick={() => removeSkill(skill.id)}>
                <span className="icon">
                  <i className="fas fa-trash-alt"></i>
                </span>
              </button>
            </div>
            </td>
          </tr>
        )}
      </>
    )
  }
}

const mapDispatchToProps = { removeSkill };

export default connect(
  null,
  mapDispatchToProps
)(SkillsList);