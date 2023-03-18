import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosFetching from "./components/AxiosFetching";
import SimpleFetching from "./components/SimpleFetching";


function App() {
  return (
    <div className="ui container center">
      <Router>
        {/* <SimpleFetching /> */}
        <Switch>
          <Route path="/axiosfetching" exact component={AxiosFetching} />
          <Route path="/" exact component={SimpleFetching} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
