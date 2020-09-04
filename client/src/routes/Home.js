import React, { Component } from 'react';
import '../index.css';


class Home extends Component {
  render() {
    return(
      <div className="page">
        <div id="homePage">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-img-div"></div>
                <div className="carousel-caption d-block">
                  <img src="https://drive.google.com/uc?/export=view&id=1PxnAFY-hedXyR3Mi5-cSYGCP_MSlAnA0" className="d-block home-page-img" alt="..." />
                  <h4 className="title home-carousel-title">Su Latt Phone</h4>
                  <div className="carousel-subTitle-div">
                    <p>Hi I’m Su Latt. Welcome! Whoever you are, I hope you get something out of visiting my website!</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-img-div"></div>
                <div className="carousel-caption d-block">
                  <img src="https://drive.google.com/uc?/export=view&id=1rZU4paIgTOAYqHaZrHfuxkqjdELxeyBy" className="d-block home-page-img" alt="..." />
                  <h4 className="title home-carousel-title">About Me</h4>
                  <div className="carousel-subTitle-div">
                    <p>Read about me! What I’m like as a software engineer, as a student, as a woman, and as a person.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-img-div"></div>
                <div className="carousel-caption d-block">
                <img src="https://drive.google.com/uc?/export=view&id=18DMuhZwkWBLA1zoHiKvBBU7SLFCT6S2d" className="d-block home-page-img" alt="..." />
                  <h4 className="title home-carousel-title">Experience</h4>
                  <div className="carousel-subTitle-div">
                    <p>Come learn about my work experiences so far! Ranging from part-time jobs to internships.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-img-div"></div>
                <div className="carousel-caption d-block">
                <img src="https://drive.google.com/uc?/export=view&id=1cpyBAWcrND6zyi2P_-BOMr5O6cvL-Zkj" className="d-block home-page-img" alt="..." />
                  <h4 className="title home-carousel-title">Personal Projects</h4>
                  <div className="carousel-subTitle-div">
                    <p>Here I present details about some of the personal projects I’ve done. Mostly technical, but others too!</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-img-div"></div>
                <div className="carousel-caption d-block">
                <img src="https://drive.google.com/uc?/export=view&id=1E-adWEJKzrRwKRTcvKIFvLiMpflAhDnm" className="d-block home-page-img" alt="..." />
                  <h4 className="title home-carousel-title">Achievements</h4>
                  <div className="carousel-subTitle-div">
                    <p>Proud to present my achievements throughout life that have encouraged me to strive higher.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-img-div"></div>
                <div className="carousel-caption d-block">
                <img src="https://drive.google.com/uc?/export=view&id=1lBRKI2S9mc3rukYJzn-a-8e1-k_N84vW" className="d-block home-page-img" alt="..." />
                <h4 className="title home-carousel-title">Personal Blog</h4>
                <div className="carousel-subTitle-div">
                  <p>Just a safe space to express myself. Hope it's thought-provoking and entertaining for you!</p>
                </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>              
        </div>
        <div className="card-img-overlay" id="darkOverlay"></div>
      </div>
    );
  }
}

export default Home;