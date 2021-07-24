import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import  { updateCourse } from '../actions/courseActions';
import { COURSE_UPDATE_RESET } from '../constants/courseConstants'

function CourseEditScreen({match, history}) {

    const courseId = match.params.id;

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [overview, setOverview] = useState(false)
    const [instructor, setInstructor]= useState('')
    const [price, setPrice]= useState('')

    const dispatch = useDispatch()

/*     const courseDetails = useSelector(state => state.courseDetails)
    const { error, loading, course } = courseDetails

    const courseUpdate = useSelector(state => state.courseUpdate)
    const { error:errorUpdate, loading: loadingUpdate, success: successUpdate } = courseUpdate

    useEffect(() => {

        if(successUpdate) {
            dispatch({type: COURSE_UPDATE_RESET})
            history.push('/admin/courselist')
        } else {
            if (!course.name || course.id!== Number(courseId)) {
                dispatch(getCourseDetails(userId))
            } else {
                setName(course.name)
                setDescription(course.description)
                setOverview(course.overview)
            }
        }

    }, [user, userId, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({id:user.id, name, email, isAdmin}))
    } */

    return (
        <div>

        </div>
    )
}

export default CourseEditScreen

