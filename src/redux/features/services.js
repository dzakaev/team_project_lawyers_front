const initialState = {
  services: [],
  loading: false,
  error: null,
};

const services = (state = initialState, action) => {
  switch (action.type) {
    case "service/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "service/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        services: action.payload,
      };
    case "service/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default services;

export const fetchAllServices = () => {
  return async (dispatch) => {
    dispatch({ type: "service/fetch/pending" });
    try {
      const res = await fetch("http://localhost:3002/services");
      const json = await res.json()

      dispatch({ type: "service/fetch/fulfilled", payload: json})
    }catch (e) {
      dispatch({ type: "service/fetch/rejected", error: e.toString()})
    }
  };
};
