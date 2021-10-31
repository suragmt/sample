import { removeListItem } from "../../utils/utils";
import axios from "axios";

const initialState = {
  status: [
    {
      api: "",
      errorMessage: "",
      isLoading: false,
    },
  ],
};

export const asyncRequest = {
  state: { ...initialState },
  reducers: {
    setStatus(state, payload) {
      const newList = removeListItem(state.status, "api", payload.api);

      return {
        status: [...newList, payload],
      };
    },
    removeStatus(state, api) {
      const newList = removeListItem(state.status, "api", api);
      return {
        status: [...newList],
      };
    },
    clearApiStatus() {
      return { ...initialState };
    },
  },
  effects: {
    async handleAsyncRequests(payload) {
      let loaderReqArray = [];

      try {
        this.setStatus({
          api: payload.id,
          errorMessage: "",
          isLoading: !loaderReqArray.includes(payload.id),
        });
        const instance = axios.create({
          baseURL: "https://randomuser.me/api/0.8/?results=20",
        });
        const response = await instance.get("");
        // this.removeStatus(payload.id);
        if (response?.data?.results) {
          return response.data.results;
        } else if (response?.data?.errors) {
          this.setStatus({
            api: payload.id,
            errorMessage: response.data.errors,
            isLoading: false,
          });
        }
        return;
      } catch (error) {
        if (error?.status === 422 && payload?.callback) {
          this.removeStatus(payload.id);
          payload.callback(
            "error",
            error.message,
            () =>
              payload?.history &&
              payload?.redirectionUrl &&
              payload.history.push(payload.redirectionUrl)
          );
          throw new Error(error.message);
        } else if (payload?.callback) {
          this.removeStatus(payload.id);
          payload.callback("error", error.message);
          throw new Error(error.message);
        } else {
          this.setStatus({
            api: payload.id,
            errorMessage: error.message,
            isLoading: false,
          });
          throw new Error(error.message);
        }
      }
    },
  },
};
