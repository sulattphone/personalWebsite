import React, { Component } from 'react';
import About from '../components/About';
import Education from '../components/Education';

class Home extends Component {
    render() {
        return(
            <div>
                Home
                <About />
                <Education />
            </div>
        );
    }
}

export default Home;