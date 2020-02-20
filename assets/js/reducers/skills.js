const skills = (state = [], action) => {
  switch (action.type) {
    case 'SKILLS':
      return [
        ...action.skills
      ]
    case 'ADD_SKILL':
      return [
        ...state,
        {
          id: new Date().getUTCMilliseconds(),
          name: action.skill,
        }
      ]
    case 'REMOVE_SKILL':
      return state.filter(skill =>
        skill.id !== action.id
      )
    default:
      return state
  }
}

export default skills;