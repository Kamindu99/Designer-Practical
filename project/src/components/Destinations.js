import React, { useState } from 'react';

export default function Destinations (){

    const [image, setImage]=useState({
        lable:"Cinamon Lake",
        photo:"https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cinnamon-life-home-715x550.jpg",
        description:"Take a peak at the first-ever Integrated Resort in Sri Lanka opening in mid-2021. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options."
    })

const onclick1=()=>{
    setImage({
        photo:"https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/misc/cinnamon-life-home-715x550.jpg",
        lable:"Cinnamon Life",
        description:"Take a peak at the first-ever Integrated Resort in Sri Lanka opening in mid-2021. Envisoned to be the epicentre of modern South Asia, it is an urban sanctuary which includes a 5-Star hotel, residential units, office spaces and a wide range of shopping and entertainment options."
    })
}
const onclick2=()=>{
    setImage({
        photo:"https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/cinnamon-grand-colombo-destination-714x550-DM-Q80.jpeg",
        lable:"Cinnamon Grand Colombo",
        description:"Our 5-star hotel in the heart of Colombo offers timeless elegance and grandeur. The perfect place to relish global cuisines after a business conference or a memorable rendezvous!"
    })
}
const onclick3=()=>{
    setImage({
        photo:"https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/DEST-cinnaon_lakeside.jpg",
        lable:"Cinnamon Lakeside Colombo",
        description:"Spend time with those who matter by a calm, rippling lake at Cinnamon Lakeside, the plush oasis of peace and warmth, right in the middle of Colombo."
})
}

const onclick4=()=>{
    setImage({
        photo:"https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/cinnamon-red-colombo-destination-714x550-DM.jpg",
        lable:"Cinnamon Red Colombo",
        description:"South Asia's first ever lean luxury hotel situated right at the heart of Colombo. The vibrant rooftop bar and serene infinity pool overlooking the Colombo Skyline provides every sense of relaxation and rejuvenation for the adventurous traveller!"
})
}

const onclick5=()=>{
    setImage({
        photo:"https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/hotel_resorts/cinnamon-bentota-beach-destination-714x550-DM.jpg",
        lable:"Cinnamon Bentota Beach",
        description:"Choose Cinnamon Bentota Beach for an opulent stay on Sri Lanka's gold coast. Nestled in the groves of coconut trees is a tastefully designed piece of architecture, an ultimate destination for art and culture enthusiasts!"
})
}


    return(

        <div className='container' style={{ height:"920px"}}>
            <br/>

         <center>  <h1 style={{fontSize:"55px",color:"#a300cc"}}>Our Destinations</h1> 

<div class="dropdown mt-3 mb-5" >
  <button style={{width:"540px",height:"60px",textAlign:"left" ,fontSize:"19px"}} class="form-control  dropdown-toggle dropdown-toggle2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {image.lable} 
  </button>
  
  <ul class="dropdown-menu" style={{width:"540px",cursor:"pointer"}}>
    <li><a class="dropdown-item" onClick={onclick1}>Cinnamon Life</a></li>
    <li><a class="dropdown-item" onClick={onclick2}>Cinnamon Grand Colombo</a></li>
    <li><a class="dropdown-item" onClick={onclick3}>Cinnamon Lakeside Colombo</a></li>
    <li><a class="dropdown-item" onClick={onclick4}>Cinnamon Red Colombo</a></li>
    <li><a class="dropdown-item" onClick={onclick5}>Cinnamon Bentota Beach</a></li>
  </ul>
</div>


                  <img
                  class="srilanka"
                  src="https://www.cinnamonhotels.com/themes/cinnamon/images/srilanka.png"
                  
                  alt=""
                />
            <img
                  class="img-fluid img-thumbnail"
                  src={image.photo}
                  style={{width:"730px",height:"550px"}}
                  alt=""
                /></center>

<div class="card col-12 ml-2 description" style={{width:"330px",boxShadow:"10px 10px 10px rgb(0 0 0 / 0.2)"}}>
              <div class="card-content">
                <div class="card-body">
                  {" "}
                  
                  <div class="card-title mt-5 mb-5" > <h3 style={{fontStyle: "italic",color:" #990099"}}>{image.lable}</h3> </div>
                  <div class="card-subtitle">
                    <p class="text-muted ">
                      
                        
                        {image.description}
                
                    </p>
                  </div>
                  <button className='btn btn-lg btn-dark mt-3 mb-5' style={{background:"#000080"}}>Discover More</button>
                </div>
              </div>
          
            </div>

           

        </div>

    )

}