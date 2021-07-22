import React, {useState, useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listCourses } from '../actions/courseActions'

function CourseListScreen({history}) {

    const dispatch = useDispatch()

    const courseList = useSelector(state => state.courseList)
    const {loading, error, courses} = courseList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if(userInfo && userInfo.isAdmin) {
            dispatch(listCourses())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <div>
            <h1>Courses</h1>
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
                                <LinkContainer to={`/admin/user/${course.id}/edit`}>
                                    <Button variant='light' className='btn-sm'>
                                        <i className='fas fa-edit'></i>  
                                    </Button>
                                </LinkContainer>
                                    <Button variant='danger' className='btn-sm'>
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
