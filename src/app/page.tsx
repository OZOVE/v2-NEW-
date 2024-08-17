import Section1 from "@/components/ui/home/Section1";
import Section2 from "@/components/ui/home/Section2";
import Section3 from "@/components/ui/home/Section3";
import Section4 from "@/components/ui/home/Section4";
import Section5 from "@/components/ui/home/Section5";
import Section6 from "@/components/ui/home/Section6";
import Section7 from "@/components/ui/home/Section7";
import Section8 from "@/components/ui/home/Section8";
import Section9 from "@/components/ui/home/Section9";
import React from "react";

export default function page() {
  return (
    <>
      <Section1 />
      <Section2 />
      {/* <div className=" hidden sm:block"> */}
      <Section3 />
      {/* </div> */}

      <Section4 />
      <Section5 />
      <Section6 />
      {/* <div className=" bg-graish"> */}
      <Section7 />
      {/* </div> */}

      <Section8 />
      <Section9 />
    </>
  );
}
