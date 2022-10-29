const initialState = {
    data: [],
    detail: [],
    // ordenados: [],
    // genres: [],
    // filtrados: [],
  };
  
  export default function RootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_DATA":
        return {
          ...state,
          data: action.payload
        };
      case "GET_DETAIL":
        return {
          ...state,
          detail: action.payload,
        };
      case "EMPTY_DETAIL":
        return {
          ...state,
          detail: [],
        }
  
      default:
        return { ...state };
    }
  }
  
  