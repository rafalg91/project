const workers = (state = [], action) => {
  switch (action.type) {
    case 'WORKERS':
      return [
        ...action.workers
      ]
    case 'ADD_WORKER':
      return [
        ...state,
        {
          name: action.worker.name,
          surname: action.worker.surname
        }
      ]
    default:
      return state
  }
}

export default workers;