import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Job({ job }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Card.Body>
                <Link to={`/jobs/${job.id}`}>
                    <Card.Title as="div">
                        <strong>{job.company_name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text>
                <p><strong>Apply Before:</strong> {job.apply_date.substring(0,10)}</p>
                   {/* {
                        job.apply_date > today &&
                            <li>
                                Course completion certificate trusted by top companies
                            </li>
                    } */}
                   <p> Salary: {job.salary}</p>
                   <p> Looking For: {job.job_role}</p>
                   {
                        job.experience !='' &&
                        <p> Experience: {job.experience}</p>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Job

