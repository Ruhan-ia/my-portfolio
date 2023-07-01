import React from "react";
import { useSpring, animated } from "react-spring";
import bg from "../../../assets/images/bg/bg-4.jpg";
import profile from '../../../assets/images/profile/code.jpg'

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
        <div className="pt-20 w-[80%] flex mx-auto justify-between">
          <div>
            <h3 className="font-semibold text-3xl ">Assalamualaikum..!</h3>
            <br />
            <p className="font-bold text-4xl">My Self Istiak Ahamad</p> <br />
            <p className="font-bold text-gray-500">MERN STACK DEVELOPER</p>
          </div>
          <div>
            <div className="avatar">
              <div className="w-1/2 rounded ms-40">
                <img  src={profile} />
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Banner;
