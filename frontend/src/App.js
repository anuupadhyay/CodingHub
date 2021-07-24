import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LiveCourseScreen from './screens/LiveCourseScreen';
import OnlineCourseScreen from './screens/OnlineCourseScreen';
import CourseScreen from './screens/CourseScreen';
import ApplyJobScreen from './screens/ApplyJobScreen';
import PostJobScreen from './screens/PostJobScreen';
import JobScreen from './screens/JobScreen';
import CourseListScreen from './screens/CourseListScreen';
import CategoryListScreen from './screens/CategoryListScreen';
import JobListScreen from './screens/JobListScreen';
import TutorialListScreen from './screens/TutorialListScreen';
import InstructorListScreen from './screens/InstructorListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import CourseEditScreen from './screens/CourseEditScreen';

function App() {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
          <Switch>
          <Route path='/' component={HomeScreen} exact/>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/register' component={RegisterScreen}/>
            <Route path='/post/:id' component={BlogScreen}/>
            <Route path='/courses/live/' component={LiveCourseScreen}/>
            <Route path='/courses/online/' component={OnlineCourseScreen}/>
            <Route path='/courses/:id' component={CourseScreen} exact/>
            <Route path='/jobs/apply-for-jobs/' component={ApplyJobScreen}/>
            <Route path='/jobs/post-a-job/' component={PostJobScreen}/>
            <Route path='/jobs/:id' component={JobScreen}/>
            <Route path='/admin/courselist' component={CourseListScreen}/>
            <Route path='/admin/categorylist' component={CategoryListScreen}/>
            <Route path='/admin/instructorlist' component={InstructorListScreen}/>
            <Route path='/admin/joblist' component={JobListScreen}/>
            <Route path='/admin/userlist' component={UserListScreen}/>
            <Route path='/admin/tutoriallist' component={TutorialListScreen}/>
            <Route path='/admin/user/:id/edit' component={UserEditScreen}/>
            <Route path='/admin/course/:id/edit' component={CourseEditScreen}/>
          </Switch>            
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
