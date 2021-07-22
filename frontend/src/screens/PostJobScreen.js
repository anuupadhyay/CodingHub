import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import  {createJobRecruiter} from '../actions/jobActions';
import { JOB_RECRUITER_REGISTER_RESET } from '../constants/jobConstants'

function PostJobScreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [designation, setDesignation] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const jobRecruiterRegister = useSelector(state => state.jobRecruiterRegister)

    const { 
        loading: loadingRecruiterRegister, 
        error: errorRecruiterRegister, 
        success: successRecruiterRegister,
        } = jobRecruiterRegister

    useEffect(() => {
            if(successRecruiterRegister) {
                setName('')
                setEmail('')
                setPhone('')
                setCompanyName('')
                setDesignation('')
                dispatch({type: JOB_RECRUITER_REGISTER_RESET })
            }
        }, [successRecruiterRegister])

    const submitHandler = (e) => {
            e.preventDefault()
            if (phone.length > 10) {
                setMessage('Enter 10 digit contact number')
            } else {
                dispatch(createJobRecruiter(
                    {
                        name,
                        email,
                        phone,
                        companyName,
                        designation
                    }
                ))
            }

    }

    return (
        <div>
            <h4>Post a job</h4>
            {loadingRecruiterRegister && <Loader/> }
            {successRecruiterRegister && <Message variant='success'>Review Submitted</Message>}
            {errorRecruiterRegister && <Message variant='danger'>{errorRecruiterRegister}</Message>}
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
                        <Form.Group controlId='companyName'>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                required
                                type='name'
                                placeholder='Enter Company Name'
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='designation'>
                            <Form.Label>Designation</Form.Label>
                            <Form.Control
                                required
                                type='name'
                                placeholder='Enter Designation'
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>
        </div>
    )
}

export default PostJobScreen
