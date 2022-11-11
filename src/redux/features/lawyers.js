const initialState = {
  lawyers: [],
  loading: false,
  error: null,
};

const lawyers = (state = initialState, action) => {
  switch (action.type) {
    case "lawyer/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "lawyer/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        lawyers: action.payload,
      };
    case "lawyer/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default lawyers;

export const fetchAllLawyers = () => {
  return async (dispatch) => {
    dispatch({ type: "lawyer/fetch/pending" });
    try {
      const res = await fetch("http://localhost:3002/lawyers");
      const json = await res.json()

      dispatch({ type: "lawyer/fetch/fulfilled", payload: json})
    }catch (e) {
      dispatch({ type: "lawyer/fetch/rejected", error: e.toString()})
    }
  };
};