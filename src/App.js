import "./App.css";
import Comment from "./components/comments/Comment";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux_store";
import GameOfThronesContainer from "./components/GameOfThrones/GameOfThronesContainer";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Switch>
        <Route path="/Comment" render={() => <Comment />} />
        <Route path="/Posts" render={() => <GameOfThronesContainer />} />
      </Switch>
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
