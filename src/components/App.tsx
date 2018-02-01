import * as React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QLimit from "./QLimit";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact={true} path="/" component={QLimit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
