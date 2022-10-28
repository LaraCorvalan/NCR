import axios from "axios";

export function createGame(objeto){
    return async function (dispatch){
        let post = await axios.post('http://localhost:3001/videogames', objeto)
        return dispatch({
          type: 'CREATE_GAME',
          payload: post.data,
        })
    }
    
}