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
          </Switch>            
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
