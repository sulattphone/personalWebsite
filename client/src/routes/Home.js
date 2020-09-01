import React, { Component } from 'react';
import '../index.css';


class Home extends Component {
    render() {
        return(
            <div className="page">
                <div id="homePage">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-img-div"></div>
      <div class="carousel-caption d-block">
      <img src="https://drive.google.com/uc?/export=view&id=18uw8P8-QkSmDI-Dh5e03dv5O1dWe1y-d" class="d-block home-page-img" alt="..." />
        <h5>Su Latt Phone</h5>
        <div className="carousel-subTitle-div">
        <p>Hi I’m Su Latt. Welcome! Whoever you are, I hope you get something out of visiting my website!</p>
        </div>
        
      </div>
    </div>
    <div class="carousel-item">
    <div class="carousel-img-div"></div>
      <div class="carousel-caption d-block">
      <img src="https://drive.google.com/uc?/export=view&id=18uw8P8-QkSmDI-Dh5e03dv5O1dWe1y-d" class="d-block home-page-img" alt="..." />
        <h5>About Me</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
    <div class="carousel-img-div"></div>
      <div class="carousel-caption d-block">
      <img src="https://drive.google.com/uc?/export=view&id=18uw8P8-QkSmDI-Dh5e03dv5O1dWe1y-d" class="d-block home-page-img" alt="..." />
        <h5>Experience</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>              
                </div>
                <div className="card-img-overlay" id="darkOverlay">

                </div>
                
            </div>
        );
    }
}

export default Home;