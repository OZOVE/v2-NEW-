// // second best

// "use client";
// import { useState, useEffect } from "react";
// import BookingDetails from "./bookingDetails";
// import Map from "./map";
// import useStore from "app/store/store.js";
// import Component4 from "./Component4";
// import Component5 from "./Component5";

// const Section11 = () => {
//   const [component, setComponent] = useState(1);
//   const [isMobile, setIsMobile] = useState(false);
//   const state = useStore((state) => state);
//   console.log("state", state);

//   const pointsSelected = {
//     start: { longitude: 115.8613, latitude: -31.9523 },
//     stop: { longitude: 0, latitude: 0 },
//     end: { longitude: 115.8575, latitude: -31.9505 },
//   };

//   const handleResize = () => {
//     const isMobileView = window.innerWidth <= 640;
//     console.log("isMobileView:", isMobileView);
//     setIsMobile(isMobileView);
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     console.log("isMobile:", isMobile);
//   }, [isMobile]);

//   return (
//     <>
//       {isMobile ? (
//         <div className="relative flex flex-col h-full mb-2 ">
//           <div>
//             <Map {...pointsSelected} />
//           </div>
//           <div className=" left-0 w-[350px] h-full">
//             <div className="mb-10 ">
//               {component === 1 && <Component4 setComponent={setComponent} />}
//               {component === 2 && (
//                 <BookingDetails setComponent={setComponent} />
//               )}
//               {component === 3 && <Component5 setComponent={setComponent} />}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="relative h-[500px]">
//           <Map {...pointsSelected} />
//           <div className="absolute left-0 w-[350px] h-full">
//             <div className="h-full overflow-auto scrollbar-yellow">
//               {component === 1 && <Component4 setComponent={setComponent} />}
//               {component === 2 && (
//                 <BookingDetails setComponent={setComponent} />
//               )}
//               {component === 3 && <Component5 setComponent={setComponent} />}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Section11;

//  original main

"use client";
import { useState } from "react";
import HomeScreen from "./homescreen";
// import BookingDetails from "./BookingDetails";
import BookingDetails from "./bookingDetails";
import Map from "./map";
import useStore from "app/store/store.js";
import Component3 from "./component3";
import Component4 from "./Component4";
import Component5 from "./Component5";

const Section11 = () => {
  const [component, setComponent] = useState(1);
  const state = useStore((state) => state);
  console.log("state", state);
  const pointsSelected = {
    start: { longitude: 115.8613, latitude: -31.9523 },
    stop: { longitude: 0, latitude: 0 },
    end: { longitude: 115.8575, latitude: -31.9505 },
  };

  return (
    <div className="relative h-[500px]">
      <Map {...pointsSelected} />
      <div className="absolute left-0 w-[350px] h-full">
        <div className="h-full overflow-auto scrollbar-yellow">
          {component === 1 && <Component4 setComponent={setComponent} />}
          {/* </div>
        <div> */}
          {component === 2 && <BookingDetails setComponent={setComponent} />}
          {/* </div>
        <div> */}
          {component === 3 && <Component5 setComponent={setComponent} />}
        </div>
      </div>
    </div>
  );
};

export default Section11;
