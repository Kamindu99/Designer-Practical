import React, { useState } from 'react';
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

export default function Navbar (){

  const [roomnbook, setbook]=useState({
    adult:1,
    child:1
  })

  const onClickplus1 = ()=>{
    setbook({
      ...roomnbook,
      adult:roomnbook.adult + 1  
    })
  }
  const onClickplus2 = ()=>{
    setbook({
      ...roomnbook,
      child:roomnbook.child + 1  
    })
  }

  const onClickminus1 = ()=>{
    setbook({
      ...roomnbook,
      adult:roomnbook.adult - 1  
    })
  }
  const onClickminus2 = ()=>{
    setbook({
      ...roomnbook,
      child:roomnbook.child - 1  
    })
  }
    return(

        <div className=''>
            <nav className="navbar bg-light">
  <div className="container-fluid mr-5">
    
    <a className="navbar-brand menupp ml-5"><i class="fa fa-bed "></i> SHANGRI-LA</a>
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
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"  id="dropdownMenuButton" aria-expanded="false">
           ABOUT
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{width:"100%"}}>
    zzzzzzzzzzzzzzzzzzzzsssssssssssssssssssssssssss


    
  </div>




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
          <button type="button"  style={{color:"white",background:"black", marginLeft:"270px", border:" 1px solid white",padding:"3px",width:"140px"}} className="bg-dark" >FIND A HOTEL</button>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div >
<div className='frmd-con'>



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




  <div class="formdwn" style={{backgroundColor:"hsl(0,0%,85%,0.7)",padding:"10px"}}>
    
    <form class="form-inline">
    <div class="form-group mr-3">
        <input type="date" style={{width:"180px",height:"50px",border:"0px",textAlign:"center" }} className="mr-"  />
        <input type="date" style={{width:"180px",height:"50px",border:"0px",textAlign:"center" }}  />
    
        
    
        
      </div>
    
    
    
      <div class="form-group  mr-3">
    
      <div class="dropdown">
      <button style={{width:"300px",height:"50px",textAlign:"left" ,fontSize:"16px",border:"0px"}}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="fa fa-user mr-4"></i> 1 Room, {roomnbook.adult} Adult, {roomnbook.child} Children
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{width:"350px"}}>
        <a class="dropdown-item mb-3" href="#">Max. 8 guests per room</a>
    
    
    
        
    <table class="table" >
      <thead class="thead-light">
        <tr>
          <th scope="col"></th>
          <th scope="col" style={{width:"120px",fontSize:'12px'}}>Adult(s)</th>
          <th scope="col" style={{width:"140px",fontSize:'12px'}}>Children (under 12)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Room1</td>
          <td style={{}}> <i class="fa fa-minus mr-3" style={{color:"#a58a5c",fontSize:"14px"}} onClick={onClickminus1}></i> 1 <i class=" ml-3 fa fa-plus" style={{color:"#a58a5c",fontSize:"14px"}} onClick={onClickplus1}></i></td>
          <td > <i class="fa fa-minus mr-3" style={{color:"#a58a5c",fontSize:"14px"}} onClick={onClickminus2}></i> 1 <i class=" ml-3 fa fa-plus" style={{color:"#a58a5c",fontSize:"14px"}} onClick={onClickplus2}></i></td>
        </tr>
        <br/>
       
      </tbody>
    </table>
    
    <input style={{width:"94%",margin:"10px", background:"white", border: "1px solid #9e7e47", color:"#91723e",fontSize:"17px"}} type="submit" value="+ Add Room"/>
        
      </div>
    </div>
      
    
    
      </div>
    
    
    
    
    
      <div class="form-group mr-3 ">
    
    
     
    
    
    <div class="dropdown">
      <button style={{width:"300px",height:"50px",textAlign:"left" ,fontSize:"16px",border:"0px"}}  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i class="fa fa-clipboard mr-4"></i>Special Code
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Corporate / Special Rate (Optional)</a>
    
    
        <form class="px-3 py-3">
        <div class="form-group mb-4">
        <input type="text" class="form-control px-3 " value="Select Code Type"/>
        </div>
        <div class="form-group">
          <input type="text" class="form-control px-3" id="exampleDropdownFormPassword1" placeholder="Enter Code"/>
        </div>
        
      </form>
        
      </div>
    </div>
    
    
    
    
    
      </div>
      <div class="form-group mx-sm-2 ">
      <button style={{width:"80px",height:"50px",fontSize:"15px",border:"0px",background:"#9E6F1D",color:"white",fontWeight:"bold"}}  type="submit" class="">Search</button>
    </div>
    </form>
    
    
    
      </div>
    



  
</div>








</div>




        </div>

    )

}