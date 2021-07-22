import React, {useState, useEffect} from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Job from '../components/Job'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listJobs} from '../actions/jobActions'
import axios from 'axios'

function ApplyJobScreen() {

    const dispatch = useDispatch()
    const jobList = useSelector(state => state.jobList)
    const {error, loading, jobs} = jobList

    useEffect(() => {
        dispatch(listJobs())
    }, [])

    return (
        <div>
            <h1>Active Jobs</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {jobs.map(job => (
                                <Col key={job.id} sm={12} md={6} lg={4} xl={3}>
                                    <Job job={job} />
                                </Col>
                            ))}
                        </Row>
                    </div>
            }
        </div>
    )
}

export default ApplyJobScreen
