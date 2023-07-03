import React from "react";
import './SKills.css'
import logo1 from "../../../assets/images/logo/html.jpg";
import logo2 from "../../../assets/images/logo/css.jpg";
import logo3 from "../../../assets/images/logo/js.jpg";
import logo4 from "../../../assets/images/logo/bootstrap.png";
import logo5 from "../../../assets/images/logo/tailwind.png";
import logo6 from "../../../assets/images/logo/react.png";
import logo7 from "../../../assets/images/logo/node.jpg";
import logo8 from "../../../assets/images/logo/ExpressJS.png";
import logo9 from "../../../assets/images/logo/MongoDB.png";

const Skills = () => {
  return (
    <div className="about">
      <h3 className="font-bold text-4xl text-center py-12">Skills</h3>
      <div className="grid w-[80%] mx-auto   lg:grid-cols-3 gap-4 ">
        <div className="card w-96 bg-base-100 shadow-xl html">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo1} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">HTML</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo2} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">CSS</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl css">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo3} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">JAVAScript</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo4} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Bootstrap</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo5} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">TailwindCss</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo6} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">React</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo7} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Node js</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo8} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Express js</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="avatar">
            <div className="w-auto rounded">
              <img src={logo9} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">MongoDb</h2>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Skills;
