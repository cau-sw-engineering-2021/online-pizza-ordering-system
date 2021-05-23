import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuDetail from "./menu/MenuDetail";
import MenuList from "./menu/MenuList";
import Navigation from "./navigation/Navigation";
import OrderList from "./OrderList";
import { SignIn, SignUp } from "./Login";

// TODO: 백엔드와 데이터 형식 조율, 비동기 처리로 변경
const menuList = [
  {
    id: 1,
    name: "Pizza1",
    price: { L: 20000, M: 11000 },
    size: ["L", "M"],
    imgSrc:
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Pizza2",
    price: { L: 17900, M: 11000 },
    size: ["L", "M"],
    imgSrc:
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
];

function App() {
  return (
    <div className="App">
      <Router basename="/pizza">
        {/* TODO: Set user information with Context API */}
        <Navigation isLoggedIn={true} />
        <Switch>
          <Route exact path="/">
            <MenuList menuList={menuList} />
          </Route>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/order">
            <OrderList />
          </Route>
          <Route path="/menu/:id">
            <MenuDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
