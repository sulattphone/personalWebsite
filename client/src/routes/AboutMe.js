import React, { Component } from 'react';
import '../index.css';

class AboutMe extends Component {
    render() {
        return(
            <div>
                <div className="container container-top-padding">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="about-main-content-div">
                                <div className="about-main-img-div"></div>
                                <div className="about-main-intro-div">
                                    <p className="about-main-intro-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                    software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                                <br />
                                <div className="about-main-edu-div">
                                    <h3 className="about-main-edu-header">
                                        Education Path
                                    </h3>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="about-main-edu-school">UC Berkeley</div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="about-main-edu-school">College of San Mateo</div>
                                        </div>
                                        <div className="col-log-3">
                                            <div className="about-main-edu-school">Horizon Int'l School</div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="about-main-edu-school">B.E.P.P.S (3) Bahan</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="about-side-info-div">
                                <div className="about-side-img-div"></div>
                                <hr className="site-black-hr" />
                                <div className="about-side-text-div">
                                    <p className="about-side-text">
                                        <ul className="about-side-ul" id="ulNoPadding">
                                            <li>Su Latt Phone<br /></li>
                                            <li>Age {new Date().getFullYear() - 1999}<br /></li>
                                            <li>Female (She/Her)<br /></li>
                                            <li>Incoming Software Engineer at Guidewire Software, Inc.<br /></li>
                                            <li>UC Berkeley, College of San Mateo, Horizon International School<br /></li>
                                            <li>Full-Stack Web Development, Anime, Dancing</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AboutMe;