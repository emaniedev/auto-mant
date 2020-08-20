import React from 'react';
import Header from './Component/Header';
import CreateForm from './Component/CreateForm'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
        <CreateForm></CreateForm>
      </div>
    </div>
  );
}

export default App;
