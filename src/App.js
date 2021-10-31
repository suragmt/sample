import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./controller/store";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalTheme from "./config/theme/Globaltheme";

function App() {
  return (
    <Provider store={store}>
      <GlobalTheme />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
