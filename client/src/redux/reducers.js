const initialState = {
    videogames: [],
    gamesDB: {},
    detail: [],
    ordenados: [],
    genres: [],
    filtrados: [],
  };
  
  export default function RootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_GAMES":
        return {
          ...state,
          videogames: action.payload,
          filtrados: action.payload,
        };
      case "CREATE_GAME":
        return {
          ...state,
          // games --> [{}, {}, {}, {}]
          videogames: [...state.videogames, action.payload],
        };
      case "GET_GAME_BYNAME":
        return {
          ...state,
          videogames: action.payload,
        };
      case "GET_DETAIL":
        return {
          ...state,
          detail: action.payload,
        };
      case "GET_GENRES":
        return {
          ...state,
          genres: action.payload,
        }; 
      case "FILTER_GAMES":
        return {
          ...state,
          ordenados: action.payload,
        };
  
      
      case "BORRAR":
        return {
          ...state,
          ordenados: [],
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
  
  