import React from "react";
import ss1 from "../../../assets/images/profile/Screenshot 2023-07-03 215642.png";
import ss2 from '../../../assets/images/profile/Screenshot 2023-07-03 220532.png'
import ss3 from '../../../assets/images/profile/Screenshot 2023-07-03 220610.png'
const Projects = () => {
  return (
    <div>
        <h2 className="font-bold text-4xl text-center my-12">Projects</h2>
    <div className="grid px-20 mt-20 about lg:grid-cols-3 gap-5">
      <div className="card    bg-base-100 shadow-xl">
      <div className="avatar">
          <div className="w-3/4 mx-auto rounded">
            <img src={ss3} />
          </div>
        </div>
        <div className="card-body ">
          <h2 className="card-title font-bold text-green-500">
            Italian food Recipe
          </h2>
          <ul>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://github.com/Ruhan-ia/chef-recipe-client"
              >
                Client Site
              </a>
            </li>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://github.com/Ruhan-ia/chef-recipe-server"
              >
                Server Site
              </a>
            </li>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://italian-food-recipe.web.app"
              >
                Live Site
              </a>
            </li>
          </ul>
          <p>1.This site for food-lover.They Can Buy any type on italian food from this site.</p>
            <p>2.Also can Add any food recipe.</p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-3/4 mx-auto rounded">
            <img src={ss1} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-green-500">Toy Spots Car</h2>
          <ul>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://github.com/Ruhan-ia/toy-client"
              >
                Client Site
              </a>
            </li>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://github.com/Ruhan-ia/toy-server"
              >
                Server Site
              </a>
            </li>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://toy-store-98bee.web.app"
              >
                Live Site
              </a>
            </li>
          </ul>
          <p>1.This site for kinds.They just love Toys.You can buy any toys add any toys.This site has very much fun.</p>
        </div>
      </div>
      <div className="card  bg-base-100 shadow-xl">
      <div className="avatar">
          <div className="w-3/4 mx-auto  rounded">
            <img src={ss2} />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title font-bold text-green-500">
            Summer Camp for Sports
          </h2>
          <ul>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://github.com/Ruhan-ia/summer-camp"
              >
                Client Site
              </a>
            </li>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://github.com/Ruhan-ia/summer-camp-server"
              >
                Server Site
              </a>
            </li>
            <li>
              {" "}
              <a
                className="font-semibold text-blue-600"
                href="https://summer-camp-9129e.web.app"
              >
                Live Site
              </a>
            </li>
          </ul>

          <p>
            1.This site helps you to find the the sports according to your
            choice!!
          </p>
          <p>2.And three different types of dashboard are included.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
