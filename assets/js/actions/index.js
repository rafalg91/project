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
