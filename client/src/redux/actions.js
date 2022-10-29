import axios from "axios";

export function getData() {
  return async function (dispatch) {
    try {
      let data = await axios.get("http://localhost:3001/data");
      let result = data.data;
      return dispatch({
        type: "GET_DATA",
        payload: result,
      });
    } catch (error) {
      console.log(error)
    }
     
   
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let data = await axios.get(`http://localhost:3001/detail/${id}`);
      let result = data.data;
      return dispatch({
        type: "GET_DETAIL",
        payload: result,
      });
    } catch (error) {
      console.log(error)
    }
     
   
  };
}

export function emptyDetail(){
  return {
    type: 'EMPTY_DETAIL'
  }
}
