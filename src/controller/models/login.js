import data from "../../assets/users.json";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  error: false,
};
export const login = {
  state: { ...initialState },
  reducers: {
    setLoginSuccess(state, payload) {
      return {
        error: false,
      };
    },
    setLoginFailed() {
      return { ...initialState, error: true };
    },
  },
  effects: (dispatch) => ({
    async fetchData(payload) {
      try {
        let response;
        const validUser = data.users.some(
          (o) =>
            o.username === payload.data.username &&
            o.password === payload.data.password
        );
        if (validUser) {
          payload.callback(true);
        } else {
          this.setLoginFailed();
        }
      } catch (error) {
        this.setLoginFailed();
      }
    },
  }),
};
