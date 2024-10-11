import React from "react";
import {IoIosArrowRoundDown} from "react-icons/io";

const Jumbotron = () => {
  return (
    <div className="container jumbotron mt-6">
      <div className="py-10">
        <div className="mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6">
            <p className=" border-2 border-brown-200 w-[200px] mr-2 text-center rounded-3xl">
              Mental Health AT 30'S
            </p>
            <h1 className="font-times text-8xl font-bold mt-6">
              {" "}
              <span className="text-brown-200">
                Mental <br /> health
              </span>{" "}
              is <br />
              wealth
            </h1>
            <div className="desc flex items-center justify-center w-[390px]">
              <div className="icon-row mr-[30px] mt-4 bg-white rounded-3xl h-[70px] shadow-lg flex items-center justify-center hover:cursor-pointer hover:scale-105 hover:shadow-xl">
                <IoIosArrowRoundDown style={{fontSize: "40px"}} />
              </div>
              <p className="text-lg mt-6">
                To live your life to the fullest, we're continuing to find ways
                to prevent mental health problems
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src="https://via.placeholder.com/500"
              alt="Jumbotron Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
