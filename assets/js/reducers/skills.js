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
          name: action.skill.name,
        }
      ]
    default:
      return state
  }
}

export default skills;