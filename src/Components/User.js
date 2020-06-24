import React, { useEffect } from 'react';
import { store } from 'redux/store';
import actions from 'redux/User/actions';
import { useParams } from 'react-router-dom';

function User() {
  useEffect(() => {
    store.dispatch({
      type: actions.GET_USER,
    });
  }, []);

  let { id } = useParams();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{id}</h1>
      </header>
    </div>
  );
}

export default User;
