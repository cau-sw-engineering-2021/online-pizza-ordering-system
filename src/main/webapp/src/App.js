import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuDetail from "./menu/MenuDetail";
import MenuList from "./menu/MenuList";
import Navigation from "./navigation/Navigation";
import OrderList from "./OrderList";
import Screen from "./Screen";
import { SignIn, SignUp, Logout } from "./Login";
import Manager from "./manage/Manager";
import UserList from "./manage/UserList";
import Menulist from "./manage/Menulist";
import SalesList from "./manage/SalesList";
import { JwtProvider } from "./contexts/JwtProvider";

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
    <JwtProvider>
      <div className="App">
        <Router basename="/pizza">
          <Navigation/>
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
            <Route exact path="/logout">
              <Logout />
            </Route>
            <Route exact path="/order">
              <OrderList />
            </Route>
            <Route exact path="/screen">
              <Screen />
            </Route>
            <Route path="/menu/:id">
              <MenuDetail />
            </Route>
            <Route exact path="/manager">
              <Manager />
            </Route>
            <Route exact path="/manager/user">
              <UserList />
            </Route>
            <Route exact path="/manager/menu">
              <Menulist />
            </Route>
            <Route exact path="/manager/sales">
              <SalesList />
            </Route>
          </Switch>
        </Router>
      </div>
    </JwtProvider>
  );
}

export default App;
