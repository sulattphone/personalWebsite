import React, { Component } from 'react';
import '../index.css';

class AboutMe extends Component {

    setSchoolSphereActive = (id) => {
        var school0 = document.getElementById("schoolZero");
        var school1 = document.getElementById("schoolOne");
        var school2 = document.getElementById("schoolTwo");
        var school3 = document.getElementById("schoolThree");

        school0.classList.remove("active-school");
        school1.classList.remove("active-school");
        school2.classList.remove("active-school");
        school3.classList.remove("active-school");


        var element = document.getElementById(id);
        element.classList.add("active-school");
    }

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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit 
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                    occaecat cupidatat non proident, sunt in culpa qui officia 
                                    deserunt mollit anim id est laborum.
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
                                            <div className="about-main-edu-school 
                                                            d-flex justify-content-center 
                                                            align-items-center 
                                                            sphere-berkeley
                                                            active-school"
                                                 id="schoolZero"
                                                 onClick={()=>this.setSchoolSphereActive("schoolZero")}>
                                                UC Berkeley
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="about-main-edu-school 
                                                                d-flex justify-content-center 
                                                                align-items-center 
                                                                sphere-berkeley"
                                                 id="schoolOne"
                                                    onClick={()=>this.setSchoolSphereActive("schoolOne")}>
                                                    College of San Mateo
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="about-main-edu-school 
                                                            d-flex justify-content-center 
                                                            align-items-center 
                                                            sphere-berkeley"
                                                 id="schoolTwo"
                                                 onClick={()=>this.setSchoolSphereActive("schoolTwo")}>
                                                Horizon International School
                                            </div>    
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="about-main-edu-school 
                                                            d-flex justify-content-center 
                                                            align-items-center 
                                                            sphere-berkeley"
                                                 id="schoolThree"
                                                 onClick={()=>this.setSchoolSphereActive("schoolThree")}>
                                                B.E.P.P.S (3) BAHAN
                                            </div>   
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3" id="schoolIndicatorCol0">
                                            
                                        </div>
                                        <div className="col-lg-3" id="schoolIndicatorCol1">

                                        </div>
                                        <div className="col-lg-3" id="schoolIndicatorCol2">

                                        </div>
                                        <div className="col-lg-3" id="schoolIndicatorCol3">

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