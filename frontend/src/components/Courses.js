import React from 'react'
import { Card, Button } from 'react-bootstrap'
//import Rating from './Rating'
import { Link } from 'react-router-dom'

function Courses({courses}) {
    return (
        <Card>
            <Link to={`/courses/${courses.id}`} className="course-image">
                <Card.Img variant="top" src={courses.image} />
            </Link>
            <Card.Header as="h5">{courses.name}</Card.Header>
            <Card.Body>
               {/*  <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text>
                    {courses.description}
                    <h5>₹ {courses.price}</h5>
                </Card.Text>
                <Button variant="primary">Register</Button>
            </Card.Body>
        </Card>
    )
}

export default Courses
