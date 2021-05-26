import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
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
import CartPage from "./cart/CartPage";
import OrderPage from "./order/OrderPage";
import { CartProvider } from "./contexts/CartContext";

function App() {
  useEffect(() => {
    document.title = "Pizza Order System";
  }, []);
  return (
    <JwtProvider>
      <CartProvider>
        <div className="App">
          <Router basename="/pizza">
            <Navigation/>
            <Switch>
              <Route exact path="/">
                <MenuList/>
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
              <Route exact path="/order-history">
                <OrderList />
              </Route>
              <Route path="/order">
                <OrderPage />
              </Route>
              <Route exact path="/screen">
                <Screen />
              </Route>
              <Route exact path="/order-history">
                <OrderList />
              </Route>
              <Route path="/menu/:id">
                <MenuDetail />
              </Route>
              <Route path="/cart">
                <CartPage />
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
      </CartProvider>
    </JwtProvider>
  );
}

export default App;
