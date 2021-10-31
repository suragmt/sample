import { Switch, Route } from "react-router-dom";
import loadable from "../utils/loadable";
import Private from "./privateRoute";
export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/login"
        render={() => {
          const Comp = loadable(() => import("../containers/Login"));
          return <Comp />;
        }}
      />
      <Route
        exact
        path="/user/add"
        render={() => {
          const Comp = loadable(() => import("../containers/AddUser/index.js"));
          return <Comp />;
        }}
      />
      <Private
        exact
        path="/"
        render={() => {
          const Comp = loadable(() => import("./privateRoute"));
          return <Comp />;
        }}
      />
    </Switch>
  );
}
