import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
let aboutMe = {
  firstName: "Chandrakanth",
  lastName: "Avula",
  email: "chandrakantavula@gmail.com",
  mobile: "9553251408",
  age: 23,
  Freelance: "Available",
  nationality: "Indian",
  address: "Kurnool, AP, 518380, India",
};

const About = () => {
  return (
    <div className="row">
      <div className="col-12 mt-2">
        <h1>About Me</h1>
      </div>
      <div className="col-lg-8 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
        <tbody className="row">
          <tr className="col-6 col-sm-12 row">
            <th className="col-4">First Name</th>
            <td className="col-1">:</td>
            <td className="col-6 col-sm-6">{aboutMe.firstName}</td>
          </tr>
          <tr className="col-6 col-sm-12 row">
            <th className="col-4">Last Name</th>
            <td className="col-1">:</td>
            <td className="col-6 col-sm-6">{aboutMe.lastName}</td>
          </tr>
          <tr className="col-6 col-sm-12 row">
            <th className="col-4">Age</th>
            <td className="col-1">:</td>
            <td className="col-6 col-sm-6">{aboutMe.age}</td>
          </tr>
          <tr className="col-6 col-sm-12 row">
            <th className="col-4">Nationality</th>
            <td className="col-1">:</td>
            <td className="col-6 col-sm-6">{aboutMe.nationality}</td>
          </tr>
          <tr className="col-6 col-sm-12 row">
            <th className="col-4">Freelance</th>
            <td className="col-1">:</td>
            <td className="col-6 col-sm-6">{aboutMe.Freelance}</td>
          </tr>
          <tr className="col-6 col-sm-12 row">
            <th className="col-4">Address</th>
            <td className="col-1">:</td>
            <td className="col-6 col-sm-6">{aboutMe.address}</td>
          </tr>
          <tr className="col-6 col-sm-12 row">
            <th className="col-4">Mobile</th>
            <td className="col-1 col-sm-1">:</td>
            <td className="col-6 col-sm-8">{aboutMe.mobile}</td>
          </tr>
          <tr className="col-6 col-sm-12 row">
            <th className="col-4">email</th>
            <td className="col-1">:</td>
            <td className="col-6 col-sm-8">{aboutMe.email}</td>
          </tr>
        </tbody>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
        <div>
          <p>
            Dive into my portfolio and discover the seamless fusion of
            creativity and technology in frontend development. Whether it's
            sculpting immersive user experiences with Angular or crafting
            dynamic interfaces with React, every line of code tells a
            captivating story. Explore the intersection where design meets
            functionality, where innovation thrives, and where user engagement
            is paramount. Welcome to a world where pixels come to life and user
            interfaces become works of art.
          </p>
          <button className="btn btn-outline-primary btn-lg my-3">
            Download CV <FontAwesomeIcon icon={faCircleDown} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
