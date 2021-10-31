import { init } from "@rematch/core";

const models = require("./models");

const store = init({
  models: { ...models },
  redux: {
    rootReducers: { RESET_APP: () => undefined },
  },
});

export default store;
