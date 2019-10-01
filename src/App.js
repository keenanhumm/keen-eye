import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import NavBar from "./components/NavBar";

const AppContext = React.createContext({});

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <AppContext.Provider value={this.props.history}>
          <div className="app">
            <div className="nav">
              <NavBar />
            </div>
            <div className="main">{routes}</div>
          </div>
        </AppContext.Provider>
      </Router>
    );
  }
}
