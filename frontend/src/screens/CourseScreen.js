import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form} from 'react-bootstrap'
import Loader from '../components/Loader';
import Message from '../components/Message';
import {listCourseDetails, createCourseReview} from '../actions/courseActions'
import { COURSE_CREATE_REVIEW_RESET } from '../constants/courseConstants'

function CourseScreen({ match }) {

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const courseDetails = useSelector(state => state.courseDetails)

    const {loading, error, course} = courseDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const courseReviewCreate = useSelector(state => state.courseReviewCreate)

    const { 
        loading: loadingCourseReview, 
        error: errorCourseReview, 
        success: successCourseReview,
        } = courseReviewCreate

    useEffect(() => {
        if(successCourseReview) {
                setRating(0)
                setComment('')
                dispatch({type: COURSE_CREATE_REVIEW_RESET})
        }
        dispatch(listCourseDetails(match.params.id))
    },[dispatch, match, successCourseReview])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createCourseReview(
            match.params.id, {
                rating,
                comment
            }
        ))
    }

    return (
        <div>  
           <Link to='/' className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={12}>
                        <Image src={course.image} alt={course.name} fluid className="course-image"/>
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
                                                <h5>Other Benefits</h5>
                                                <p>
                                                        <ul>
                                                                <li>
                                                                Internship Opportunities at geekforgeeks
                                                                </li>
                                                                <li>
                                                                Access to geeksforgeeks Job portal
                                                                </li>
                                                                {
                                                                course.paid_or_free == "paid" &&
                                                                <li>
                                                                    Course completion certificate trusted by top companies
                                                                </li>
                                                                }
                                                        </ul>
                                                </p>
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
                                    <h5>Instructor Name</h5>
                                    <p>{course.instructor_name}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <h5>Work Description</h5>
                                    <p>{course.work_description}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <h5>Full Detail</h5>
                                    <p>{course.full_detail}</p>
                            </ListGroup.Item>
                            <h4>Reviews</h4>
                            <ListGroup.Item>
                            {course.reviews ?
                                course.reviews.map((review) => (
                                    <div>
                                        <strong>{review.name}</strong> 
                                            <p>{review.createdAt.substring(0,10)}</p>
                                            <p>{review.comment}</p>
                                    </div>                                                                   
                                )): null 
                            }   
                            </ListGroup.Item>
                      
                            <ListGroup.Item>
                                        <h4>Write a Review</h4>
                                        {loadingCourseReview && <Loader/> }
                                        {successCourseReview && <Message variant='success'>Review Submitted</Message>}
                                        {errorCourseReview && <Message variant='danger'>{errorCourseReview}</Message>}
                                        {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            value={rating}
                                                           onChange={(e) => setRating(e.target.value)}
                                                         >
                                                         
                                                            <option value=''>Select...</option>
                                                            <option value='1'>1. Poor</option>
                                                            <option value='2'>2. Fair</option>
                                                            <option value='3'>3. Good</option>
                                                            <option value='4'>4. Very Good</option>
                                                            <option value='5'>5. Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>Review</Form.Label>
                                                        <Form.Control 
                                                         as='textarea'
                                                         row='5'
                                                         value={comment}
                                                         onChange={(e)=> setComment(e.target.value)}
                                                        ></Form.Control>
                                                    </Form.Group>
                                                    <Button 
                                                        disabled={loadingCourseReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >Submit</Button>
                                                </Form>
                                            ) : (
                                                <Message variant='info'>Please <Link to='/login'>Login</Link> to write a review</Message>
                                            )}
                                    </ListGroup.Item>
                        </ListGroup>
                </Col>
            </Row>
            
        </div>
    )
}

export default CourseScreen
