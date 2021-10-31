const initialState = {
  list: [],
};
export const users = {
  state: { ...initialState },
  reducers: {
    setUserList(state, payload) {
      return {
        ...state,
        list: [...payload],
      };
    },
    setLoginFailed() {
      return { ...initialState, list: [] };
    },
  },
  effects: (dispatch) => ({
    async fetchData(payload) {
      try {
        const response = await dispatch.asyncRequest.handleAsyncRequests({
          payload: {},
        });
        if (response) {
          const modifiedUsers = response.map((o) => {
            return {
              fullName: `${o.user.name.title} ${o.user.name.first} ${o.user.name.last}`,
              email: o.user.email,
              cell: o.user.cell,
            };
          });
          this.setUserList(modifiedUsers);
        }
      } catch (error) {
        this.setLoginFailed();
      }
    },
  }),
};
