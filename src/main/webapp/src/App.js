import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuList from "./menu-list/MenuList";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Router basename="/pizza">
        {/* TODO: Set user information with Context API */}
        <Navigation isLoggedIn={true} />
        <Switch>
          <Route exact path="/">
            <MenuList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
