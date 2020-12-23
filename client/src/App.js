import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logo from './components/Logo';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import AboutMe from './routes/AboutMe';
import Experiences from './routes/Experiences';
import Projects from './routes/Projects';
import Achievements from './routes/Achievements';
import Blog from './routes/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Logo />
                <Navigation />
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={AboutMe} />
                    <Route exact path='/experiences' component={Experiences} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/achievements' component={Achievements} />
                    <Route exact path='/blog' component={Blog} />
            </BrowserRouter>
        );
        
    }
}



export default App;