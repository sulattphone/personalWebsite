import React, { Component } from 'react';
import FlipCard from '../components/FlipCard';
import AchievementsList from '../json/achievements.json';
import '../index.css';

class AboutMe extends Component {

  setSchoolSphereActive = (id, infoId) => {
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

    var schoolInfo0 = document.getElementById("schoolInfoBerkeley");
    var schoolInfo1 = document.getElementById("schoolInfoCSM");
    var schoolInfo2 = document.getElementById("schoolInfoHorizon");
    var schoolInfo3 = document.getElementById("schoolInfoBEPPS");

    schoolInfo0.classList.add("display-none");
    schoolInfo1.classList.add("display-none");
    schoolInfo2.classList.add("display-none");
    schoolInfo3.classList.add("display-none");

    var infoElement = document.getElementById(infoId);
    infoElement.classList.remove("display-none");
  }

  schoolInfo = [
    {
      "name": "UC Berkeley",
      "description": "I transferred into UC Berkeley College of Engineering with Electrical Engineering and Computer Science major in my junior year.  As a transfer, I had to take a few lower division courses before starting to take the upper division CS courses.  At the same time, I was part of IEEE UC Berkley student branch as the club's Website Committee Director, leading the website team to innovate, improve and maintain the club's website, our main outreach medium to the student body.  I graduated with B.S. in EECS (Electrical Engineering and Computer Science) in May 2021.",
      "courses": ["Data Structures", "Computer Architecture", "Discrete Math and Probability Theory", "Artificial Intelligence", "Machine Learning", "Computer Security", "Computer Graphics"],
      "schoolId": "schoolZero",
      "schoolInfoId": "schoolInfoBerkeley"
    },
    {
      "name": "College of San Mateo",
      "description": "With the goal of transferring to UC Berkeley in mind, I took required courses and recommended courses in Computer Science, Maths, Physics and more.  At the same time, I was part of the Honors Research Society partaking the Honors Research Project for 3 semeters, and completed 3 papers and school-wide presentation on 3 different very interesting topics - WPA2 And KRACK vulnerability, Double Consciousness within Race and Gender, and Stable Marriage Problem.  I was selected for my paper on Double Consciousness within Race and Gender as a presenter and gave a talk/presentation at the Honors Research Symposium held at Stanford University.  In the meantime, I was also taking on 2 part-time jobs as a Computer Science Tutor and a Computer Lab Aide, keeping in touch with my field even outside of class.",
      "courses": ["Object Oriented Programming and Design", "Programming Methods Java", "Data Structures Java", "Computer Architecture and Assembly Language", "Calculus 1-3", "Linear Algebra", "Differential Equations", "Discrete Mathematics", "Physics with Calculus 1-3"],
      "schoolId": "schoolOne",
      "schoolInfoId": "schoolInfoCSM"
    },
    {
      "name": "Horizon International School",
      "description": "Horizon International School - Lorem ipsum BERKELEY BERKELEY iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "schoolId": "schoolTwo",
      "schoolInfoId": "schoolInfoHorizon"
    },
    {
      "name": "B.E.P.P.S (3) BAHAN",
      "description": "BEPPS (3) BAHAN - Lorem ipsum BERKELEY BERKELEY iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "schoolId": "schoolThree",
      "schoolInfoId": "schoolInfoBEPPS"
    }
  ];

  aboutSideInfo = () => {
    return(
      <div className="about-side-info-div">
        <div className="about-side-img-div"></div>
        <hr className="site-black-hr" />
        <div className="about-side-text-div">
          <p className="about-side-text">
            <ul className="about-side-ul" id="ulNoPadding">
              <li>Su Latt Phone<br /></li>
              <li>Age {new Date().getFullYear() - 1999}<br /></li>
              <li>Female (She/Her)<br /></li>
              <li>Software Engineer at Guidewire Software, Inc.<br /></li>
              <li>UC Berkeley, College of San Mateo, Horizon International School<br /></li>
              <li>Full-Stack Web Development, iOS Development, Anime, Dancing</li>
            </ul>
          </p>
        </div>
      </div>
    );
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
                      Hello, I'm Su Latt.  I was born and raised in Yangon, Myanmar.  My educational journey began with Myanmar government school No.(3) B.E.P.P.S Bahan until the 7th grade.
                      Afterwards, I transferred to Horizon International School where I went on to complete my high school diploma with IGCSE O'Level.  <br />While debating where and how to continue 
                      with my higher education, I took the GAC program at Crown Education institution.  After this, as I turn 18, my goals became clearer and I felt more than ready to go study 
                      abroad.  I decided to opt for a Computer Science degree at College of San Mateo in California, with the goal of transferring to UC Berkeley for the Bachelor's Science there, 
                      which I was able to acheive.  I graduated from UC Berkeley in May 2021 with a Bachelor's Science degree in Electrical Engineering and Computer Science (EECS).  <br />In my junior year, 
                      I obtained a Software Engineering internship position at Guidewire Software, Inc.  It was a challenging yet rewarding experience, navigating through workplace practices, new 
                      technologies, and working from home amidst the Covid-19 pandemic.  All ends well in the end, as I now have graduated and have secured a full-time Software Engineer position at 
                      Guidewire.  I have been part of our Integration Framework team ever since, working on integrations that enable our customers to have seamless tailored experience with our services.
                    </p>
                  </div>
                  <br />
                  <div className="about-main-edu-div">
                    <h3 className="about-main-edu-header">
                      Education Path
                    </h3>
                    <br />
                    <div className="row">
                      {this.schoolInfo.map(school => {
                        return(
                          <div className="col-lg-3">
                            <div className="about-main-edu-school 
                                            d-flex justify-content-center 
                                            align-items-center 
                                            sphere-berkeley
                                            active-school"
                                  id={school["schoolId"]}
                                  onClick={()=>this.setSchoolSphereActive(school["schoolId"],school["schoolInfoId"])}>
                              {school["name"]}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="row">
                      <div className="col-lg-3" id="schoolIndicatorCol0" />
                      <div className="col-lg-3" id="schoolIndicatorCol1" />
                      <div className="col-lg-3" id="schoolIndicatorCol2" />
                      <div className="col-lg-3" id="schoolIndicatorCol3" />
                    </div>
                    <div className="school-info-div">
                      <span id="schoolInfoBerkeley">
                            {this.schoolInfo[0].description}
                            <br />{this.schoolInfo[0].courses && <strong>Relevant Courses:</strong> }
                            <ul>
                              {this.schoolInfo[0].courses && this.schoolInfo[0].courses.map(course => {
                                return(<li>{course}</li>);
                              })}
                            </ul>
                      </span>
                      <span className="display-none" id="schoolInfoCSM">
                            {this.schoolInfo[1].description}
                            <br />{this.schoolInfo[1].courses && <strong>Relevant Courses:</strong> }
                            <ul>
                              {this.schoolInfo[1].courses && this.schoolInfo[1].courses.map(course => {
                                return(<li>{course}</li>);
                              })}
                            </ul>
                      </span>
                      <span className="display-none" id="schoolInfoHorizon">
                            {this.schoolInfo[2].description}
                            <br />{this.schoolInfo[2].courses && <strong>Relevant Courses:</strong> }
                            <ul>
                              {this.schoolInfo[2].courses && this.schoolInfo[2].courses.map(course => {
                                return(<li>{course}</li>);
                              })}
                            </ul>
                      </span>
                      <span className="display-none" id="schoolInfoBEPPS">
                            {this.schoolInfo[3].description}
                            <br />{this.schoolInfo[3].courses && <strong>Relevant Courses:</strong> }
                            <ul>
                              {this.schoolInfo[3].courses && this.schoolInfo[3].courses.map(course => {
                                return(<li>{course}</li>);
                              })}
                            </ul>
                      </span>
                    </div>
                  </div>
                  <br />
                  <div className="about-main-achievement-div">
                    <h3>
                      Achievements
                    </h3>
                    <div className="achievements-div">
                      <div className="row row-fix justify-content-center">
                        {AchievementsList["achievements"].map(a => {
                          return(
                            <div className="col-md-4">
                              <FlipCard
                                title={a.title}
                                description={a.description}
                                height="15rem"
                                frontBgColor="#FEEC79" />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                {this.aboutSideInfo()}
              </div>
            </div>
        </div>
    </div>
    );
  }
}

export default AboutMe;