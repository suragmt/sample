import { Switch, Route, Redirect } from "react-router-dom";
import loadable from "../utils/loadable";
import { getLocalStorage } from "../services/storage";
export default function Routes(props) {
  const isLoggedIn = getLocalStorage("loggedIn");
  if (!isLoggedIn) {
    return (
      <Route
        {...props}
        render={(props) => <Redirect to={{ pathname: "/login" }} />}
      />
    );
  } else {
    console.log("is it in");
    return (
      <Route
        path="/"
        {...props}
        render={() => {
          const Comp = loadable(() => import("../containers/Home"));
          return <Comp />;
        }}
      />
    );
  }
}
