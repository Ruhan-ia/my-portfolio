import React from "react";
import bg from "../../../assets/images/bg/profolio.jpg";
import bg1 from "../../../assets/images/bg/black-2.svg";
import bg2 from "../../../assets/images/bg/protfol.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import animationData from '../../../assets/Animation - 1714494552381.json'
import "./Banner.css";
import Lottie from "react-lottie-player";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  // const styles = useSpring({
  //   from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
  //   to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  // });
  return (
    <div
      className="bg-fixed sm:h-auto"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${bg})`,
        height: 800,
      }}
    >
      
        <div className=" pt-24 lg:pt-20 w-[80%]  lg:flex  justify-between mx-auto">
          <div className="lg:flex-1 mt-16">
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Assalamualaikum My Self Istiak Ahamad',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Assalamualaikum FrontEnd Developer',
        1000,
        'Assalamualaikum React Developer',
        1000,
       
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem',color:"white", display: 'inline-block' }}
      repeat={Infinity}
    />
            <br />
            {/* <p className="font-bold text-white text-4xl">
              My Self Istiak Ahamad
            </p>{" "}
            <br />
            <p className="font-bold  text-gray-500">MERN STACK DEVELOPER</p> */}
            <button className="py-5 text-white ps-5">
              <a href="https://github.com/">
                {" "}
                <BsGithub className="text-2xl"></BsGithub>
              </a>
            </button>
            <button className="py-5 text-white ps-5">
              <a href="https://www.linkedin.com/feed/">
                {" "}
                <BsLinkedin className="text-2xl"></BsLinkedin>
              </a>
            </button>
          </div>
          <div className="bg">
           
           
            <Lottie 
              animationData={animationData}
              play
              loop
              ></Lottie>
            
          </div>
        </div>
      
    </div>
  );
};

export default Banner;
