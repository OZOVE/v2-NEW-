"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LaunchingApply2Drive from "../../public/Images/apply_to_drive/launching_apply_2_drive.png";
import ArrowDownYellow from "../../public/Images/Vector.png";
import Dashpack from "../../public/Images/apply_to_drive/DASHPACK.png";
import vehiclesticker from "../../public/Images/apply_to_drive/vehiclesticker.png";
import MissionBonuses from "../../public/Images/apply_to_drive/MissionBonuses.png";
import Insurance from "../../public/Images/apply_to_drive/Insurance.png";
import VehicleRental from "../../public/Images/apply_to_drive/VehicleRental.png";
import HealthandFitness from "../../public/Images/apply_to_drive/HealthandFitness.png";
import Link from "next/link";
import { isMobile } from "react-device-detect";

function Launching() {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState({
    multiCollapseExample1: false,
    multiCollapseExample2: false,
    multiCollapseExample3: false,
    multiCollapseExample4: false,
    multiCollapseExample5: false,
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
    }
  }, []);

  const handleCollapse = (id) => {
    setIsExpanded((value) => {
      return {
        ...value,
        [id]: !isExpanded[id],
      };
    });
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div
        className={`launching_section1 cost_section ${
          isMobile ? "pt-3" : "pt-5 pb-4"
        }`}
      >
        <div className="container my-3">
          <div
            className={`${isMobile ? "card" : ""}`}
            style={{ backgroundColor: isMobile ? "#333333" : "" }}
          >
            <div className="row w-100 mx-0 d-flex align-items-center">
              <div className="col-md-6 order-2 order-lg-1">
                <h2 className="text-capitalize fw-700 my-2 text-white">
                  Chart your course
                  <br />
                  with <span className="text-yellow">OZ Ove</span>
                </h2>
                <p
                  className={`my-2 how_much_desc fw-600 text-white ${
                    isMobile ? "fs-6" : "fs-3"
                  }`}
                >
                  OZ Ove offers you the chance to establish and grow your own
                  transportation business, paving the way to a brighter future.
                  As a Captain with OZ Ove, you&apos;ll receive access to our
                  fleet of vehicles and cutting-edge technology, tailored for
                  servicing groups and businesses with precision and ease.
                  Backed by a well-known brand, our Captains can concentrate on
                  delivering an exceptional transportation experience to every
                  passenger, ensuring every journey is as fun as the
                  destination.
                </p>
              </div>
              <div className="col-md-6 order-1 order-lg-2">
                <Image
                  loader={myLoader}
                  className="w-100 object-fit-contain h-100 py-2"
                  src={LaunchingApply2Drive}
                  alt="LaunchingApply2Drive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Launching;
