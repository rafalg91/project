export const workersFetched = workers => ({
  type: 'WORKERS',
  workers
});

export const addWorker = worker => ({
  type: 'ADD_WORKER',
  worker
});

export const skillsFetched = skills => ({
  type: 'SKILLS',
  skills
});

export const addSkill = skill => ({
  type: 'ADD_SKILL',
  skill
});

export const removeSkill = id => ({
  type: 'REMOVE_SKILL',
  id
});

export const searchSkill = text => ({
  type: 'SEARCH_SKILLS',
  text
});
