import React from "react";
import { useSpring, animated } from "react-spring";
import bg from "../../../assets/images/bg/bg-4.jpg";
import profile from "../../../assets/images/profile/code.jpg";
import bg1 from '../../../assets/images/bg/circle-background.png'
import bg2 from '../../../assets/images/bg/happy.png'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import './Banner.css'

const Banner = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "translate3d(0, -50px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  });
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${bg})`,

        height: "600px",
      }}
    >
      <animated.div style={styles}>
        <div className=" pt-24 lg:pt-20 w-[80%]  flex  justify-between mx-auto">
          <div className="flex-1 mt-16">
            <h3 className="font-semibold text-3xl ">Assalamualaikum..!</h3>
            <br />
            <p className="font-bold text-4xl">My Self Istiak Ahamad</p> <br />
            <p className="font-bold text-gray-500">MERN STACK DEVELOPER</p>
            <button className="py-5 ps-5">
              <a href="https://github.com/">
                {" "}
                <BsGithub className="text-2xl"></BsGithub>
              </a>
            </button>
            <button className="py-5 ps-5">
              <a href="https://www.linkedin.com/feed/">
                {" "}
                <BsLinkedin className="text-2xl"></BsLinkedin>
              </a>
            </button>
          </div>
          <div className="bg">
            <img src={bg1} alt="" />
            <img src={bg2} alt="" />
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Banner;
