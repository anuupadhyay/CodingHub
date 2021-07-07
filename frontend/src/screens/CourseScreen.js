import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import {listCourseDetails} from '../actions/courseActions'

function CourseScreen({ match }) {
    const dispatch = useDispatch()

    const courseDetails = useSelector(state => state.courseDetails)

    const {loading, error, course} = courseDetails

    useEffect(() => {
        dispatch(listCourseDetails(match.params.id))
    },[])

    return (
        <div>
           <Link to='/' className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={course.image} alt={course.name} fluid />
                </Col>
                <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                    <h3>{course.course_type}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <h3>{course.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <h5>Course Description</h5>
                                    <p>{course.description}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <h5>Course overview</h5>
                                    <p>{course.overview}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <h5>Course Rating</h5>
                                    <p>{course.rating}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <h5>Course Price</h5>
                                    <p>{course.price}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <h5>Course Instructor</h5>
                                    <p>{course.instructor}</p>
                            </ListGroup.Item>
                        </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default CourseScreen
