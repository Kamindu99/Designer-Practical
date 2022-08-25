import React from "react";
import footer2 from '../images/footer2.jpg'

function Footer() {

    const Rhome=()=>{
        window.location.replace("/#");
    }
  return (

    <div>
<div className="ft-con">
               <img
                  class="img-fluid "
                  src={footer2}
                  alt=""
                />

                 <button
                 onClick={Rhome}
                  class=" fimge "
                  src='https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/footer/grand-footer-D-1440X800.p'
                  alt=""
                > <i class="fa fa-angle-up"></i><br/> Scroll Up</button>

</div>

    <div className="mainfooter">
      <div className="ftr">
        <div className="row">
          {/* Column1 */}
          <div className="col">




            <h4>About</h4>
            <h6 className="list-unstyled mt-4">
              <li>About Cinnamon Hotels & Resorts</li>
              <li>Media & Accolades</li>
              <li>Gallery</li>
              <li>CSR & Sustainability</li>
              <li>John Keells Group</li>
              <li>Cinnamon Air</li>
              <li>Nature Trails</li>
              <li>Cinnamon Box Office</li>
              <li>Terms & Conditions</li>
              <li>Privacy Statement</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Get In Touch</h4>



            <h6 className="list-unstyled gg mt-4">
              <li data-toggle="modal" data-target="#staticBackdrop">Know Sri Lanka</li>
              <li data-toggle="modal" data-target="#staticBackdrop2">Know Maldives</li>
              <li data-toggle="modal" data-target="#staticBackdrop3">Contact Us</li>
              <li data-toggle="modal" data-target="#staticBackdrop4"> FAQs</li>
            </h6>

            <h4 className="mt-5">Sections</h4>



            <h6 className="list-unstyled gg mt-4">
              <li data-toggle="modal" data-target="#staticBackdrop">Careers</li>
              <li data-toggle="modal" data-target="#staticBackdrop2">Blog</li>
            </h6>
          </div>
          {/* Column3 */}
          <div className="col abcs">
            <h4>Follow Us</h4>
            <h6 className="list-unstyled mt-4">
              <li>
              <div className=" ">
        <div className="row">
          <p className="col-sm">
            <a href="#">
              <i class="fab fa-facebook-f" ></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-twitter" ></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-instagram" ></i>
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-linkedin" ></i>
            </a>{" "} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#">
              <i class="fab fa-youtube" ></i>
            </a>{" "}
           
           
          </p>
</div></div> </li>
            

            </h6>


            <h4 className="mt-4">Get Cinnamon in your inbox</h4>
            <h6 className="list-unstyled">
              <li><input type="email" className="form-control mt-4"style={{width:"400px",height:"60px"}} placeholder="Please Enter Email Address"/> </li>
              <li><input type="radio" className="mr-3"/>By Checking this box I consent to the processing Checking this box I consent to the  this box to the processing to the  this box to the processing</li>
            </h6>

          </div>


          {/* Column4 */}
          <div className="col col-md-2 ">

          </div>
        


        </div>
       
      </div>

      
    </div>
    </div>
  );
}

export default Footer;
