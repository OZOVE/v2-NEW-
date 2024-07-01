"use client";
import React from "react";

function SectionTwo() {
  return (
    <>
      <div className="home_section_2">
        <div className="py-5 future-bg d-none d-lg-flex align-items-center">
          <div className="container py-5 p-lg-5">
            <div className="py-5 p-lg-5">
              <div className="text-center d-flex flex-column align-items-center">
                <h1 className="text-white text-uppercase fw-700 oz_ove_sub">
                  Reinventing group travel
                  <br />
                  in <span className="text-yellow">Australia.</span>
                </h1>
              </div>
              <div className="mt-3 text-center oz_ove_desc px-lg-5">
                <p className="px-lg-5">
                  Affordable, convenient group transportation service powered by
                  innovative ride share technology – easing congestion, reducing
                  emissions, and connecting communities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="py-3 d-flex justify-content-evenly">
            <div className="mx-0 d-flex justify-content-between row w-100">
              <div className="px-1 rounded mob-section-2-img future-mini d-flex justify-content-center align-items-center">
                <div className="text-center d-flex flex-column align-items-center">
                  <span className="text-uppercase fw-bolder fs-12 text-yellow">
                    Oz Ove
                  </span>
                  <span className="text-white text-uppercase fw-600 fs-12">
                    The Future of Transportation
                  </span>
                </div>
              </div>
              <div className="px-1 rounded mob-section-2-img lead-mini d-flex justify-content-center align-items-center">
                <div className="text-center d-flex flex-column align-items-center">
                  <span
                    className="text-white text-capitalize"
                    style={{ fontSize: "11px" }}
                  >
                    Lead the pack and ride
                  </span>
                  <span className="text-uppercase fw-bolder fs-12 text-yellow">
                    Oz Ove
                  </span>
                  <span
                    className="text-white text-capitalize"
                    style={{ fontSize: "11px" }}
                  >
                    Book for your group today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
