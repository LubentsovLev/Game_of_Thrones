import "./App.css";
import Comment from "./components/comments/Comment";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux_store";
import GameOfThronesContainer from "./components/GameOfThrones/GameOfThronesContainer";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import StickyFooter from "./components/material_tp/M_footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="app__main">
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/Characters"} />} />
          <Route path="/Comment" render={() => <Comment />} />
          <Route path="/Characters" render={() => <GameOfThronesContainer />} />
        </Switch>
      </div>
      <footer>
        <StickyFooter />
      </footer>
    </div>
  );
}
const MainApp = (props) => {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
    // <HashRouter></HashRouter>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;
