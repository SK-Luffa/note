import React from 'react';
import * as Pages from "./page"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import "animate.css"
import { CSSTransition } from "react-transition-group"
const App = () => {
  return (
    <div className="main">
      <Router>
        <Pages.NavBar> </Pages.NavBar>
        <div className="page-container">

          <Route path='/' exact component={Pages.Home} >
            {props => {
              return <CSSTransition 
              in={props.match?true:false}
              timeout={3000}
              classNames={{
                enter:"animated slower fadeIn",
                exit:"animated fast fadeOut",
              }}
              mountOnEnter={true}
              unmountOnExit={true}
              >
                <Pages.Home />
              </CSSTransition>
            }}
          </Route>
          <Route path='/news' exact component={Pages.News} />
          <Route path='/personal' exact component={Pages.Personal} />
        </div>
      </Router>
    </div>

  );
};

export default App;