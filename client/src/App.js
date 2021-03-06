import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import SavedBooks from "./pages/savedBooks";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path={["/", "/books"]}>
      <Books />
      </Route>
      <Route path="/savedBooks">
        <SavedBooks />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
