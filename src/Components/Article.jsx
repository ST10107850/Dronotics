import React from "react";
import drone1 from "../assets/Images/drone.png";
import drone2 from "../assets/drone2.png";
import drone3 from "../assets/Images/drone3.png";
import drone4 from "../assets/Images/drone4.png";

const Article = () => {
  return (
    <div className="min-h-screen w-full mt-20">
      <div className="flex justify-center items-center flex-col">
        <h1 className="uppercase text-3xl mb-5">Latest Articles</h1>
        <hr className="w-16 h-1 bg-black mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-6">
          
          {/* Card 1 */}
          <div className="bg-white shadow-md overflow-hidden flex flex-col">
            <img
              src={drone1}
              alt="Article"
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex-grow flex flex-col items-center mt-16 mb-16">
              <hr className="w-20 h-2 bg-black mb-3"></hr>
              <p className="text-gray-700 text-center">
                How to automate surveillance drones
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md overflow-hidden flex flex-col">
            <img
              src={drone2}
              alt="Article"
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex-grow flex flex-col justify-end items-center mt-16 mb-16">
              <hr className="w-20 h-2 bg-black mb-3"></hr>
              <p className="text-gray-700 text-center">
                A brief description of the article goes here. It gives an overview of the content.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md  overflow-hidden flex flex-col">
            <img
              src={drone3}
              alt="Article"
              className="w-full h-52 object-cover"
            />
            <div className="p-5 flex-grow flex flex-col justify-end items-center mt-16 mb-16">
              <hr className="w-20 h-2 bg-black mb-3"></hr>
              <p className="text-gray-700 text-center">
                A brief description of the article goes here. It gives an overview of the content.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md  overflow-hidden flex flex-col">
            <img
              src={drone4}
              alt="Article"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex-grow flex flex-col justify-end items-center mt-16 mb-16">
              <hr className="w-20 h-2 bg-black mb-3"></hr>
              <p className="text-gray-700 text-center">
                A brief description of the article goes here. It gives an overview of the content.
              </p>
            </div>
          </div>

          {/* Additional cards can be added similarly */}
        </div>
      </div>
    </div>
  );
};

export default Article;
