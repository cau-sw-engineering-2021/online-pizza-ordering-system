import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuDetail from "./menu/MenuDetail";
import MenuList from "./menu/MenuList";
import Navigation from "./navigation/Navigation";
import OrderList from "./OrderList";
import { SignIn, SignUp } from "./Login";
import Manager from "./manage/Manager";
import UserList from "./manage/UserList";
import Menulist from "./manage/Menulist";
import SalesList from "./manage/SalesList";
import CartPage from "./cart/CartPage";
import OrderPage from "./order/OrderPage";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router basename="/pizza">
          {/* TODO: Set user information with Context API */}
          <Navigation isLoggedIn={true} />
          <Switch>
            <Route exact path="/">
              <MenuList />
            </Route>
            <Route exact path="/login">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
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
            <Route path="/order">
              <OrderPage />
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
      </CartProvider>
    </div>
  );
}

export default App;
