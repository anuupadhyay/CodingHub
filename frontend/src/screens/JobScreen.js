import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Modal, Form } from 'react-bootstrap'
import Loader from '../components/Loader';
import Message from '../components/Message';
import {listJobDetails, createJobApplication} from '../actions/jobActions'
import {JOB_APPLICATION_RESET} from '../constants/jobConstants'

function JobScreen( { match }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [qualification, setQualification] = useState('')
    const [college, setCollege] = useState('')
    const [passingYear, setPassingYear] = useState('')
    const [organization, setOrganization] = useState('')
    const [experience, setExperience] = useState('')
    const [currentCTC, setCurrentCTC] = useState('')
    const [expectedCTC, setExpectedCTC] = useState('')
    const [noticePeriod, setNoticePeriod] = useState('')
    const [relocate, setRelocate] = useState('')
    const [location, setLocation] = useState('')
    const [message, setMessage] = useState('')
    
    const dispatch = useDispatch()
    const jobDetails = useSelector(state => state.jobDetails)
    const jobApplication = useSelector(state => state.jobApplication)

    const {loading, error, job} = jobDetails

    const { 
        loading: loadingJobApplication, 
        error: errorJobApplication, 
        success: successJobApplication,
        } = jobApplication

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        const submitHandler = (e) => {
                e.preventDefault()
                dispatch(createJobApplication(
                        match.params.id, {
                        name,
                        email,
                        phone,
                        qualification,
                        college,
                        passingYear,
                        organization,
                        experience,
                        currentCTC,
                        expectedCTC,
                        noticePeriod,
                        relocate,
                        location
                        }
                   ))

        }

        useEffect(() => {
                if(successJobApplication) {
                    setName('')
                    setEmail('')
                    setPhone('')
                    setQualification('')
                    setCollege('')
                    setPassingYear('')
                    setOrganization('')
                    setExperience('')
                    setCurrentCTC('')
                    setExpectedCTC('')
                    setNoticePeriod('')
                    setRelocate('')
                    setLocation('')
                    dispatch({type: JOB_APPLICATION_RESET })
                }
                dispatch(listJobDetails(match.params.id))
            }, [successJobApplication])

    return (
        <div>
            <Link to='/' className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={12}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                    <h3>{job.company_name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <p><strong>Website:</strong>{job.website}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <p><strong>Apply Before:</strong>{job.apply_date}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <p><strong>Location:</strong>{job.location}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <p><strong>About Company:</strong>{job.company_description}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <p><strong>Job Description:</strong>{job.job_description}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <Button className="button-default" 
                                     variant="primary" onClick={handleShow}
                                     >Apply Now</Button>
                            </ListGroup.Item>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Apply for {job.job_role} role</Modal.Title>
                                  {loadingJobApplication && <Loader/> }
                                  {successJobApplication && <Message variant='success'>Application Successful</Message>}
                                  {errorJobApplication && <Message variant='danger'>{errorJobApplication}</Message>}
                                </Modal.Header>
                                <Modal.Body>
                                <Form onSubmit={submitHandler}>
                                        <Form.Group controlId='name'>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='name'
                                                        placeholder='Enter name'
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>

                                                <Form.Group controlId='email'>
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='email'
                                                        placeholder='Enter Email'
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>

                                                <Form.Group controlId='phone'>
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='number'
                                                        placeholder='Enter Phone'
                                                // pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                                                // maxlength="12"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='qualification'>
                                                <Form.Label>Qualification</Form.Label>
                                                <Form.Control
                                                            as='select'
                                                            value={qualification}
                                                            onChange={(e) => setQualification(e.target.value)}
                                                >
                                                            <option disabled value=''>Select Highest Qualification</option>
                                                            <option value='B.Tech'>B.Tech</option>
                                                            <option value='M.Tech'>M.Tech</option>
                                                            <option value='B.Sc'>B.Sc.</option>
                                                            <option value='M.Sc'>M.Sc.</option>
                                                            <option value='BCA'>BCA</option>
                                                            <option value='MCA'>MCA</option>
                                                            <option value='BBA'>BBA</option>
                                                            <option value='MBA'>MBA</option>
                                                        </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='college'>
                                                <Form.Label>College</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='name'
                                                        placeholder='Enter College'
                                                        value={college}
                                                        onChange={(e) => setCollege(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='passing Year'>
                                                <Form.Label>Passing Year</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='number'
                                                        placeholder='Enter Passing Year'
                                                        value={passingYear}
                                                        onChange={(e) => setPassingYear(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='organization'>
                                                <Form.Label>Organization</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='name'
                                                        placeholder='Enter Organization'
                                                        value={organization}
                                                        onChange={(e) => setOrganization(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='experience'>
                                                <Form.Label>Experience</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='name'
                                                        placeholder='Work Experience'
                                                        value={experience}
                                                        onChange={(e) => setExperience(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='currentCTC'>
                                                <Form.Label>Current CTC</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='number'
                                                        placeholder='Set Current CTC'
                                                        value={currentCTC}
                                                        onChange={(e) => setCurrentCTC(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='expectedCTC'>
                                                <Form.Label>Expected CTC</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='number'
                                                        placeholder='Set Expected CTC'
                                                        value={expectedCTC}
                                                        onChange={(e) => setExpectedCTC(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='noticePeriod'>
                                                <Form.Label>Notice Period</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='number'
                                                        placeholder='Set Notice Period'
                                                        value={noticePeriod}
                                                        onChange={(e) => setNoticePeriod(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='relocate'>
                                                <Form.Label>Relocate</Form.Label>
                                                <Form.Control
                                                        as='select'
                                                        value={relocate}
                                                        onChange={(e) => setRelocate(e.target.value)}
                                                >
                                                        <option disabled value=''>Select YES/NO</option>
                                                        <option value='Yes'>Yes</option>
                                                        <option value='No'>No</option>
                                                </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId='location'>
                                                <Form.Label>Location</Form.Label>
                                                <Form.Control
                                                        required
                                                        type='type'
                                                        placeholder='Location'
                                                        value={location}
                                                        onChange={(e) => setLocation(e.target.value)}
                                                >
                                                </Form.Control>
                                                </Form.Group>
                                                <Button type="submit" variant="primary">
                                                Submit
                                                </Button>
                                        </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                           Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                           Save Changes
                                        </Button>
                                </Modal.Footer>
                        </Modal>
                        </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default JobScreen
