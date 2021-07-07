import 
{

LIVE_COURSE_LIST_REQUEST, 
LIVE_COURSE_LIST_SUCCESS, 
LIVE_COURSE_LIST_FAIL,

ONLINE_COURSE_LIST_REQUEST, 
ONLINE_COURSE_LIST_SUCCESS, 
ONLINE_COURSE_LIST_FAIL,

COURSE_DETAILS_REQUEST, 
COURSE_DETAILS_SUCCESS, 
COURSE_DETAILS_FAIL,

} from '../constants/courseConstants'

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