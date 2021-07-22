import axios from 'axios';
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

JOB_APPLICATION_REQUEST,
JOB_APPLICATION_SUCCESS,
JOB_APPLICATION_FAIL,

} from '../constants/jobConstants'

export const listJobs = () => async (dispatch) => {
    try {
        dispatch({type: JOB_LIST_REQUEST})

        const {data} = await axios.get('/api/jobs/apply-for-jobs/')

        dispatch({
            type: JOB_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: JOB_LIST_FAIL,
            payload: error.response && error.response.data.detail ?
            error.response.data.detail : error.message,
        })
    }
}

export const listJobDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: JOB_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/jobs/${id}`)

        dispatch({
            type: JOB_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: JOB_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ?
            error.response.data.detail : error.message,
        })
    }
}


export const createJobRecruiter = (recruiter) => async (dispatch, getState) => {
    try {
        dispatch({
            type: JOB_RECRUITER_REGISTER_REQUEST
        })

        const { data } = await axios.post(
            '/api/jobs/post-a-job/',
            recruiter,
        )

        dispatch({
            type: JOB_RECRUITER_REGISTER_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: JOB_RECRUITER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createJobApplication = (jobId, candidate) => async (dispatch, getState) => {
    try {
        dispatch({
            type: JOB_APPLICATION_REQUEST
        })

        const { data } = await axios.post(
            `/api/jobs/${jobId}/candidate-job-application/`,
             candidate
        )

        dispatch({
            type: JOB_APPLICATION_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: JOB_APPLICATION_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

