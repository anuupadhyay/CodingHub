import axios from 'axios';
import 
{

POST_LIST_REQUEST, 
POST_LIST_SUCCESS, 
POST_LIST_FAIL,

POST_DETAILS_REQUEST, 
POST_DETAILS_SUCCESS, 
POST_DETAILS_FAIL,

} from '../constants/postConstants'

export const listPosts = () => async (dispatch) => {
    try {
        dispatch({type: POST_LIST_REQUEST})

        const {data} = await axios.get('/api/posts/')

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POST_LIST_FAIL,
            payload: error.response && error.response.data.detail ?
            error.response.data.detail : error.message,
        })
    }
}

export const listPostDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: POST_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/posts/${id}`)

        dispatch({
            type: POST_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: POST_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ?
            error.response.data.detail : error.message,
        })
    }
}