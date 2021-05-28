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
      "description": "BERKELEY - Lorem ipsum BERKELEY BERKELEY iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "schoolId": "schoolZero",
      "schoolInfoId": "schoolInfoBerkeley"
    },
    {
      "name": "College of San Mateo",
      "description": "College of San Mateo - Lorem ipsum BERKELEY BERKELEY iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
              <li>Incoming Software Engineer at Guidewire Software, Inc.<br /></li>
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
                      </span>
                      <span className="display-none" id="schoolInfoCSM">
                            {this.schoolInfo[1].description}
                      </span>
                      <span className="display-none" id="schoolInfoHorizon">
                            {this.schoolInfo[2].description}
                      </span>
                      <span className="display-none" id="schoolInfoBEPPS">
                            {this.schoolInfo[3].description}
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