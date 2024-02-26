import React from "react";


import coding from "../../Assets/Images/coding.gif";
import About from "../About/About";
let contactDetails = {
  gmail: "chandrakantavula@gmail.com",
  mobile: "9553251408",
  name: "Chandrakanth Avula",
};

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
          <div className="">
            <h5>Welcome to My Portfolio</h5>
            <h1>Hey I'm Chandrakanth Avula</h1>
            <h6>
              Front End Developer, Web Developer, Java Programmer, AI and ML
              Enthusiastic
            </h6>
            <a
              className="btn btn-outline-success btn-lg mt-5"
              href={"mailto:" + contactDetails.gmail}
            >
              Contact via Email
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <div className="img">
            <img className="img-fluid" src={coding} />
          </div>
        </div>
        <About/>
      </div>
    </div>
  );
};

export default Home;
