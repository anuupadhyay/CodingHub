import 
{
COURSE_LIST_REQUEST, 
COURSE_LIST_SUCCESS, 
COURSE_LIST_FAIL,
COURSE_LIST_RESET,

LIVE_COURSE_LIST_REQUEST, 
LIVE_COURSE_LIST_SUCCESS, 
LIVE_COURSE_LIST_FAIL,

ONLINE_COURSE_LIST_REQUEST, 
ONLINE_COURSE_LIST_SUCCESS, 
ONLINE_COURSE_LIST_FAIL,

COURSE_DETAILS_REQUEST, 
COURSE_DETAILS_SUCCESS, 
COURSE_DETAILS_FAIL,

COURSE_CREATE_REVIEW_REQUEST, 
COURSE_CREATE_REVIEW_SUCCESS, 
COURSE_CREATE_REVIEW_FAIL,
COURSE_CREATE_REVIEW_RESET,

} from '../constants/courseConstants'

export const courseListReducer = (state = { courses: [] }, action) => {

        switch(action.type) {
            case COURSE_LIST_REQUEST:
                return {loading: true}
    
            case COURSE_LIST_SUCCESS:
                return {
                    loading: false, 
                    courses: action.payload, 
                    }
    
            case COURSE_LIST_FAIL:
                    return {loading: false, error: action.payload}

            case COURSE_LIST_RESET:
                return {courses: []}
            
            default:
                return state
            
            }
            
    }

export const liveCourseListReducer = (state = { livecourses: [] }, action) => {
    
    switch(action.type) {
        case LIVE_COURSE_LIST_REQUEST:
            return {loading: true, livecourses:[]}

        case LIVE_COURSE_LIST_SUCCESS:
            return {
                loading: false, 
                livecourses: action.payload, 
                }

        case LIVE_COURSE_LIST_FAIL:
                return {loading: false, error: action.payload}
        
        default:
                return state
        
        }
        
}

export const onlineCourseListReducer = (state = { onlinecourses: [] }, action) => {
    
    switch(action.type) {
        case ONLINE_COURSE_LIST_REQUEST:
            return {loading: true, onlinecourses:[]}

        case ONLINE_COURSE_LIST_SUCCESS:
            return {
                loading: false, 
                onlinecourses: action.payload, 
                }

        case ONLINE_COURSE_LIST_FAIL:
                return {loading: false, error: action.payload}
        
        default:
                return state
        
        }
        
}

export const courseDetailsReducer = (state = { course: {} }, action) => {

    switch(action.type) {
        case COURSE_DETAILS_REQUEST:
            return {loading: true, ...state}

        case COURSE_DETAILS_SUCCESS:
            return {
                loading: false, 
                course: action.payload, 
                }

        case COURSE_DETAILS_FAIL:
                return {loading: false, error: action.payload}
        
        default:
                return state
        
        }
        
}

export const courseReviewCreateReducer = (state = {}, action) => {

    switch(action.type) {
        case COURSE_CREATE_REVIEW_REQUEST:
                return {loading: true}

        case COURSE_CREATE_REVIEW_SUCCESS:
                return {loading: false, success: true}

        case COURSE_CREATE_REVIEW_FAIL:
                return {loading: false, error: action.payload}

        case COURSE_CREATE_REVIEW_RESET:
                return { }
        
        default:
                return state
        
        }
        
}

