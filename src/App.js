
import React from 'react'
import {HomePage} from './containers/Home/';
import { BrowserRouter as Router } from 'react-router-dom'
import { PublicRoute } from './routes/PublicRoute'
import { Switch } from 'react-router'



function App() {

  return (
    <Router >
      <React.Fragment>
        <Switch>
          <PublicRoute path="/" component={<HomePage/>} exact  />
      
        </Switch>
      </React.Fragment>
     
    </Router>
  );
}

export default App;
