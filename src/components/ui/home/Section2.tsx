import Image from "next/image";
import taxiImage from "@/../public/home/section2.png"; // make sure to add the image in the public folder and name it taxi.png

import Link from "next/link";

const Section2 = () => {
  return (
    <section className="bg-graish text-white  py-20 lg:px-10 2xl:px-0 flex items-center justify-center">
      <div className=" flex flex-col md:flex-row items-center">
        <div className="w-full flex justify-center lg:px-0 px-6 shadow-lg rounded-lg    mb-8 ">
          <Image
            src={taxiImage}
            alt="Group travel"
            width={500}
            height={500}
            className="rounded-lg shadow-lg "
          />
        </div>
        <div className="w-full lg:px-12 2xl:px-0  px-6  text-start ">
          <h1 className="text-4xl font-bold text-customYellow mb-4">
            Reinventing
            <span className="text-white">
              {" "}
              Group Travel In{" "}
              <span className=" text-customYellow ">Australia</span>
            </span>
            .
          </h1>
          <p className="text-base mb-8">
            Affordable, convenient group transportation service powered by
            innovative ride share technology – easing congestion, reducing
            emissions, and connecting communities.
          </p>
          <Link href="/get-started">
            <p className="inline-block bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-customYellow transition duration-300">
              Get Started
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;