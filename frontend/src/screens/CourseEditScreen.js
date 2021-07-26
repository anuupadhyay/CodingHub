import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {Form, Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import  { listCourseDetails, updateCourse } from '../actions/courseActions';
import { COURSE_UPDATE_RESET } from '../constants/courseConstants'

function CourseEditScreen({match, history}) {

    const courseId = match.params.id;

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [overview, setOverview] = useState(false)
    const [instructor, setInstructor]= useState('')
    const [price, setPrice]= useState(0)
    const [type, setType] = useState('')
    const [paid, setPaid]= useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const courseDetails = useSelector(state => state.courseDetails)
    const { error, loading, course } = courseDetails

    const courseUpdate = useSelector(state => state.courseUpdate)
    const { error:errorUpdate, loading: loadingUpdate, success: successUpdate } = courseUpdate

    useEffect(() => {

        if(successUpdate) {
            dispatch({type: COURSE_UPDATE_RESET})
            history.push('/admin/courselist')
        } else {
            if (!course.name || course.id!== Number(courseId)) {
                dispatch(listCourseDetails(courseId))
            } else {
                setName(course.name)
                setDescription(course.description)
                setPrice(course.overview)
                setImage(course.overview)
                setOverview(course.overview)
                setInstructor(course.overview)
                setType(course.overview)
            }
        }

    }, [dispatch, course, courseId, history, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateCourse({
            id: courseId,
            name,
            description,
            image,
            overview,
            instructor,
            price,
            type,
            paid
        }))
    }

    const uploadFileHandler = async(e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        formData.append('courseId', courseId)
        setUploading(true)
        try{
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const {data} = await axios.post('/api/products/upload/', formData, config)

            setImage(data)
            setUploading(false)

        }catch(error) {
            setUploading(false)
        }
    }

    return (
        <div>
            <Link to='/admin/courselist'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Product</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{error}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> 
                : (
                    <Form onSubmit={submitHandler}>   
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Enter price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='image'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter image'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        >
                        </Form.Control>
                        <Form.File
                            id='image-file'
                            label='Choose File'
                            custom
                            onChange={uploadFileHandler}
                        >
                        </Form.File>
                        {uploading && <Loader />}
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='overview'>
                        <Form.Label>Overview</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter overview'
                            value={overview}
                            onChange={(e) => setOverview(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type="submit" variant="primary">
                        Update
                    </Button>

                </Form>
                )}
            </FormContainer>
        </div>
    )
}

export default CourseEditScreen

