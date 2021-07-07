import React, {useState, useEffect} from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Courses from '../components/Courses'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listOnlineCourse} from '../actions/courseActions'
import axios from 'axios'

function OnlineCourseScreen() {
    const dispatch = useDispatch()
    const onlineCourseList = useSelector(state => state.onlineCourseList)
    const {error, loading, onlinecourses} = onlineCourseList

    useEffect(() => {
        dispatch(listOnlineCourse())
    }, [])

    return (
        <div>
            <h1>Online Courses</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {onlinecourses.map(courses => (
                                <Col key={courses.id} md={8}> 
                                    <Courses courses={courses} />
                                </Col>
                            ))}
                        </Row>
                    </div>
            }
        </div>
    )
}

export default OnlineCourseScreen
