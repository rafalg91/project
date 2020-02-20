import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { workersFetched } from '../actions';

const Workers = () => {
  const dispatch = useDispatch();
  const workers = useSelector(state => state.workers);

  useEffect(() =>  {
    fetch("http://localhost:8000/api/workers")
    .then(res => res.json())
    .then(json => dispatch(workersFetched(json)));
  });

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
        {workers.map(worker =>
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
};

export default Workers;