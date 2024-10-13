import React from "react";
import {Button} from "@/components/ui/button";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import images from '/assets/images/help.png'

const About = () => {
  return (
    <div className="py-10 container mx-auto">
      <div className="mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6">
          <img
            src={images}
            alt="Jumbotron Image"
            // className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 p-6 mb-[120px] font-bold">
          <h1 className="font-bold mt-6 text-6xl container mx-auto font-times">
            How <span className="text-brown-200">can we</span> <br /> help you ?{" "}
          </h1>
          <div className="desc  container mx-auto">
            <p className="text-lg mt-6">
              we work with world-class experts to create wellbeing human
              centered tools and courses unite sustainable growth.
              <br />
            </p>
            <p className="mt-6">
              we tak data-driveb decisions around your wellbeing strategy.
            </p>
            <a href="/tanya-dokter/bidanku">
            <Button
              variant="primary"
              className=" bg-black text-white rounded-[100px] w-[120px] mt-5 hover:cursor-pointer hover:scale-105 hover:shadow-xl"
            >
              Get Help{" "}
              <ChevronRightIcon className="h-4 w-4 ml-1 text-orange-500" />
            </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
