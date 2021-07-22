import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { postListReducer, postDetailsReducer } from './reducers/postReducers'
import { userListReducer, userLoginReducer, 
         userRegisterReducer, userDeleteReducer, 
         userUpdateReducer, userDetailsReducer, } from './reducers/userReducers'
import { courseListReducer, liveCourseListReducer, 
         onlineCourseListReducer, 
         courseDetailsReducer, 
         courseReviewCreateReducer,
        } from './reducers/courseReducers'

import { jobListReducer, jobDetailsReducer, 
         jobRecruiterRegisterReducer, 
         jobApplicationReducer
        } from './reducers/jobReducers'

         
const reducer = combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
    courseList: courseListReducer,
    liveCourseList: liveCourseListReducer,
    onlineCourseList: onlineCourseListReducer,
    courseDetails: courseDetailsReducer,
    jobList: jobListReducer,
    jobDetails: jobDetailsReducer,
    jobRecruiterRegister: jobRecruiterRegisterReducer,
    jobApplication: jobApplicationReducer,
    courseReviewCreate: courseReviewCreateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userDetails: userDetailsReducer,
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