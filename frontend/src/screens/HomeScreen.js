import React, {useState, useEffect} from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Post from '../components/Post'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listPosts} from '../actions/postActions'
import axios from 'axios'
//import Post from '../components/Post'

function HomeScreen() {

    const dispatch = useDispatch()
    const postList = useSelector(state => state.postList)
    const {error, loading, posts} = postList

    useEffect(() => {
        dispatch(listPosts())
    }, [])

    return (
        <div>
                <Row>
                    <Col md={7}>
                        <h4>Latest Blogs</h4>
                            <ListGroup variant='flush'>
                                {loading ? <Loader />
                                : error ? <Message variant='danger'>{error}</Message>
                                    : 
                                    <ListGroup.Item>
                                        {posts.map(post => (
                                            <div key={post.id}>
                                                <Post post={post}/>
                                            </div>
                                        ))}
                                    </ListGroup.Item>
                                }
                            </ListGroup>
                        </Col>
                        <Col md={5}>
                            ABC
                        </Col>
                </Row>
        </div>
    )
}

export default HomeScreen
