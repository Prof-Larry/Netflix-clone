App.js:

import React, { useState } from 'react';
import Login from './components/Login';

import Nav from './components/Nav';
import {
  fetchNetflixOriginals,
  fetchTrending,
  fetchTopRated,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchDocumentaries,
} from './actions/index';

const App = () => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Login state={state} setState={setState} />
    </div>
  );
};

export default App;
