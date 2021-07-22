import 
{

JOB_LIST_REQUEST, 
JOB_LIST_SUCCESS, 
JOB_LIST_FAIL,

JOB_DETAILS_REQUEST, 
JOB_DETAILS_SUCCESS, 
JOB_DETAILS_FAIL,

JOB_RECRUITER_REGISTER_REQUEST,
JOB_RECRUITER_REGISTER_SUCCESS,
JOB_RECRUITER_REGISTER_FAIL,
JOB_RECRUITER_REGISTER_RESET,

JOB_APPLICATION_REQUEST,
JOB_APPLICATION_SUCCESS,
JOB_APPLICATION_FAIL,
JOB_APPLICATION_RESET

} from '../constants/jobConstants'

export const jobListReducer = (state = { jobs: [] }, action) => {
    
    switch(action.type) {
        case JOB_LIST_REQUEST:
            return {loading: true, jobs:[]}

        case JOB_LIST_SUCCESS:
            return {
                loading: false, 
                jobs: action.payload, 
                }

        case JOB_LIST_FAIL:
                return {loading: false, error: action.payload}
        
        default:
                return state
        
        }
        
}


export const jobDetailsReducer = (state = { job: {} }, action) => {

    switch(action.type) {
        case JOB_DETAILS_REQUEST:
            return {loading: true, ...state}

        case JOB_DETAILS_SUCCESS:
            return {
                loading: false, 
                job: action.payload, 
                }

        case JOB_DETAILS_FAIL:
                return {loading: false, error: action.payload}
        
        default:
                return state
        
        }
        
}

export const jobRecruiterRegisterReducer = (state = { }, action) => {
    
    switch(action.type) {
        case JOB_RECRUITER_REGISTER_REQUEST:
            return {loading: true}

        case JOB_RECRUITER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case JOB_RECRUITER_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        
        case JOB_RECRUITER_REGISTER_RESET:
            return {}
     
        default:
                return state
        
        }
        
}

export const jobApplicationReducer = (state = { }, action) => {

    switch(action.type) {
        case JOB_APPLICATION_REQUEST:
            return {loading: true}

        case JOB_APPLICATION_SUCCESS:
            return {loading: false, userInfo: action.payload}

        case JOB_APPLICATION_FAIL:
            return {loading: false, error: action.payload}
        
        case JOB_APPLICATION_RESET:
            return {}
     
        default:
                return state
        
        }
        
}