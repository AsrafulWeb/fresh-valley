import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import ManageProducts from './components/Admin/ManageProducts/ManageProducts';
import Admin from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import EditProduct from './components/Admin/EditProduct/EditProduct';
import { AuthContextProvider, PrivateRouteForAdmin, PrivateRouteForLogin } from './auth';
import Orders from './components/Orders/Orders';
import NotAdmin from './components/NotAdmin/NotAdmin';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Switch>
            <PrivateRouteForAdmin path="/admin/edit-product">
              <Admin AdminContent={EditProduct} />
            </PrivateRouteForAdmin>
            <PrivateRouteForAdmin path="/admin/add-product">
              <Admin AdminContent={AddProduct} />
            </PrivateRouteForAdmin>
            <PrivateRouteForAdmin path="/admin/manage-products">
              <Admin AdminContent={ManageProducts} />
            </PrivateRouteForAdmin>
            <Route path="/admin">
              <Redirect to="/admin/manage-products" />
            </Route>
            <PrivateRouteForLogin path="/checkout/:pdId">
              <Header />
              <Checkout />
            </PrivateRouteForLogin>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/deals">
              
            </Route>
            <PrivateRouteForLogin path="/not-admin">
              <Header />
              <NotAdmin />
            </PrivateRouteForLogin>
            <PrivateRouteForLogin path="/orders">
              <Header />
              <Orders />
            </PrivateRouteForLogin>
            <Route exact path="/">
              <Header />
              <Banner />
              <Products />
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
