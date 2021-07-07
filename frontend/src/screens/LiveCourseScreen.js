import React, {useState, useEffect} from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Courses from '../components/Courses'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listLiveCourse} from '../actions/courseActions'
import axios from 'axios'

function LiveCourseScreen() {

    const dispatch = useDispatch()
    const liveCourseList = useSelector(state => state.liveCourseList)
    const {error, loading, livecourses} = liveCourseList

    useEffect(() => {
        dispatch(listLiveCourse())
    }, []) 
    
    return (
        <div>
            <h1>Live Courses</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {livecourses.map(courses => (
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

export default LiveCourseScreen
