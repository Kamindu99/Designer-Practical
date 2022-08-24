import React from 'react';
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

export default function Navbar (){

    return(

        <div className=''>
            <nav className="navbar bg-light">
  <div className="container-fluid">
    
    <a className="navbar-brand menupp"><i class="fa fa-bed "></i> SHANGRI-LA</a>
    <div className="d-flex menupp" >
      <a className="navbar-brand"><i class="fa fa-user"></i> Sign In </a>
      <a className="navbar-brand">| Join Now </a>
      <a className="navbar-brand">| Find Reservation </a>
      <a className="navbar-brand">| <i class="fa fa-globe"></i> English</a>
      <a className="navbar-brand">| LKR</a>
    </div>
  </div>
</nav>     


<nav class="navbar navbar-expand-lg bg-dark" >
  <div class="container-fluid" >
    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav aaa"  >
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           ABOUT
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ROOMS & SUITES
          </a>
        </li><li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EXPERIENCE
          </a>
        </li><li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EVENT
          </a>
        </li><li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GALLERY
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OFFERS
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MORE
          </a>
        </li>
        <li class="nav-item"  >
          <button type="button" class="btn btn-outline-secondary" style={{marginLeft:"300px"}} >FIND A HOTEL</button>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">


  <div class="carousel-inner" style={{textShadow:" 1px 1px #000000"}}>
  <div class="carousel-item active" data-bs-interval="5000">
      <img style={{width:"100%", height:"480px"}} src={img2}  class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block" style={{marginBottom:"140px"}} >
        <h1 >Shangri-La Colombo</h1>
        <h5>A personal tropical sanctuary set within the heart of the city</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img style={{width:"100%", height:"480px"}} src={img1}  class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block" style={{marginBottom:"140px"}}>
        <h1 >Shangri-La Colombo</h1>
        <h5>Your well-being in our care - learn more about our safety standards</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img style={{width:"100%", height:"480px"}} src={img3}  class="d-block w-100" />
      <div class="carousel-caption d-none d-md-block" style={{marginBottom:"140px"}}>
        <h1 >We Are Vaccinated</h1>
        <h5>Our highly vaccinated workforce provides the safest possible environment for your next holiday</h5>
      </div>
    </div>
  
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>













        </div>

    )

}