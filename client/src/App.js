import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import Header from './Component/Header';
import CreateForm from './Component/CreateForm'
import ViewAutos from './Component/ViewAutos';
import Home from './Component/Home';

function App() {

  let activo, setActivo = React.useState();
  let customHistory = createBrowserHistory();


  //onChangeHeader = e => setFuncionalidad("HOME");
  return (
    <div className="App">
      <Router history={customHistory}>
        <Header></Header>
        <div className='container'>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/CreateForm" component={CreateForm}></Route>
            <Route path="/ViewAutos" component={ViewAutos}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
