import { SET_AUTH } from "./authAction";

let initState = {
  token: "",
};
export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_AUTH: {
      return {
        token: payload,
      };
    }

    default: {
      return state;
    }
  }
};
