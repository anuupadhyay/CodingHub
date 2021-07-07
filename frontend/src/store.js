import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { postListReducer, postDetailsReducer } from './reducers/postReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { liveCourseListReducer, onlineCourseListReducer, courseDetailsReducer } from './reducers/courseReducers'


const reducer = combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
    liveCourseList: liveCourseListReducer,
    onlineCourseList: onlineCourseListReducer,
    courseDetails: courseDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
                        composeWithDevTools(applyMiddleware(...middleware)))

export default store