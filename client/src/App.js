import AccountPage from "pages/Account";
import CartPage from "pages/Cart";
import Checkouts from "pages/Checkouts";
import DetailPage from "pages/DetailPage";
import ProductPage from "pages/Products";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewLetter from "./components/NewLetter";
import NotFound from "./components/NotFound";
import AboutsPage from "./pages/Abouts";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/abouts" component={AboutsPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/search" exact component={ProductPage} />
        <Route path="/collections/:categories" exact component={ProductPage} />
        <Route path="/products/:productId" component={DetailPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkouts" component={Checkouts} />

        <Route component={NotFound} />
      </Switch>

      <NewLetter />
      <Footer />
    </div>
  );
}

export default App;
