App.js:

import React, { useState } from 'react';
import Login from './components/Login';

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
