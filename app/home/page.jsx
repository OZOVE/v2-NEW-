"use client";
import React from "react";
import Section11 from "../../Components/home/section11";
// import Section11 from "../../Components/home2/section11";
import Section2 from "../../Components/home/section2";
import Section3 from "../../Components/home/section3";
import Section4 from "../../Components/home/section4";
import Section5 from "../../Components/home/section5";
import Section6 from "../../Components/home/section6";
import Section7 from "../../Components/home/section7";
import WhiteFooter from "../../Layout/Footer/whiteFooter";
import "app/globals.css";

function page() {
  return (
    <>
      <div className="home">
        <Section11 className="" />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <WhiteFooter />
      </div>
    </>
  );
}

export default page;
