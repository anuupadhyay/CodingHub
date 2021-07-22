import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import {listPostDetails} from '../actions/postActions'


function BlogScreen({ match }) {

    const dispatch = useDispatch()

    const postDetails = useSelector(state => state.postDetails)

    const {loading, error, post} = postDetails

    useEffect(() => {
        dispatch(listPostDetails(match.params.id))
    },[])


    return (
        <div>
            <Link to='/' className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={post.image} alt={post.name} fluid />
                </Col>
                <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                    <h3>{post.title}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <p>{post.body}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <p>{post.author}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <p>{post.publish}</p>
                            </ListGroup.Item>
                        </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default BlogScreen
