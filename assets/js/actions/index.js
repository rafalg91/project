export const workersFetched = workers => ({
  type: 'WORKERS',
  workers
});

export const addWorker = worker => ({
  type: 'ADD_WORKER',
  worker
})