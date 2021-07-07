import React from 'react'
import { ListGroup } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Post({post}) {
    const MAX_LENGTH = 200;
    return (
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Link to={`/post/${post.id}`}>
                        <h5>{post.title}</h5>
                    </Link>
                        <p>{post.body.length > MAX_LENGTH ? 
                            (
                            <div>
                                {`${post.body.substring(0, MAX_LENGTH)}...`}
                                <Link to={`/post/${post.id}`}>
                                    Read more
                                </Link>
                            </div>
                            ) :
                            <p>{post.body}</p>                        
                        }</p>
                </ListGroup.Item>
            </ListGroup>
    )
}

export default Post
