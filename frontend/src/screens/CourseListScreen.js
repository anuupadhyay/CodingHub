import React, {useState, useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listCourses, deleteCourse, createCourse } from '../actions/courseActions'
import { COURSE_CREATE_RESET } from '../constants/courseConstants';

function CourseListScreen({history}) {

    const dispatch = useDispatch()

    const courseList = useSelector(state => state.courseList)
    const {loading, error, courses} = courseList

    const courseDelete = useSelector(state => state.courseDelete)
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = courseDelete

    const courseCreate = useSelector(state => state.courseCreate)
    const { loading: loadingCreate, error: errorCreate, success: successCreate, course: createdCourse } = courseCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

/*     useEffect(() => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(listCourses())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo]) */

    useEffect(() => {
        dispatch({type: COURSE_CREATE_RESET})
        if(!userInfo.isAdmin && !userInfo) {
            history.push('/login')
        }

        if(successCreate) {
            history.push(`/admin/course/${createdCourse.id}/edit`)
        } else {
            dispatch(listCourses())
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, createdCourse])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete this course?')) {
           dispatch(deleteCourse(id))
        }
    }

    const createCourseHandler = () => {
        dispatch(createCourse())
    }

    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Courses</h1>
                </Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createCourseHandler}>
                        <i className='fas fa-plus'></i> Create Course
                    </Button>
                </Col>
            </Row>

            {loadingDelete && <Loader />}
            {errorDelete && <Message variant="danger">{errorDelete}</Message>}

            {loadingCreate && <Loader />}
            {errorCreate && <Message variant="danger">{errorCreate}</Message>}

            {loading ? 
            <Loader />
            : error ? (<Message variant="danger">{error}</Message>)
            :(
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                         {courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <LinkContainer to={`/admin/course/${course.id}/edit`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-edit'></i>  
                                    </Button>
                                </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(course.id)}>
                                        <i className='fas fa-trash'></i>  
                                    </Button>
                            </tr>
                        ))} 
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default CourseListScreen
