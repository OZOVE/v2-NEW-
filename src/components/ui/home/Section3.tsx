// "use client";

// // Import Swiper core and required modules
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import i1 from "@/../public/home/section3/p1.png";
// import i2 from "@/../public/home/section3/p2.png";
// import i3 from "@/../public/home/section3/p3.png";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";
// import React from "react";
// import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// // Custom arrow components
// const PrevArrow = ({ onClick }: any) => (
//   <button
//     onClick={onClick}
//     className="custom-swiper-button custom-swiper-button-prev lg:block hidden"
//   >
//     <ChevronLeft size={24} />
//   </button>
// );

// const NextArrow = ({ onClick }: any) => (
//   <button
//     onClick={onClick}
//     className="custom-swiper-button custom-swiper-button-next lg:block hidden"
//   >
//     <ChevronRight size={24} />
//   </button>
// );

// const Section3 = () => {
//   return (
//     <div className="flex  justify-center items-center my-12 relative">
//       <div className="lg:h-[320px] lg:w-[1080px] w-[320px]">
//         {" "}
//         {/* Adjusted height for better visibility */}
//         <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation={{
//             prevEl: ".custom-swiper-button-prev",
//             nextEl: ".custom-swiper-button-next",
//           }}
//           pagination={{ clickable: true }}
//           scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log("slide change")}
//         >
//           <SwiperSlide>
//             <div className=" h-[320px]  w-[900px]">
//               {" "}
//               {/* Ensure consistent height */}
//               <Image
//                 src={i1}
//                 alt="Image 1"
//                 layout="fill"
//                 className="lg:object-cover object-cover "
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" h-[320px]  w-[900px]">
//               {" "}
//               {/* Ensure consistent height */}
//               <Image
//                 src={i2}
//                 alt="Image 1"
//                 layout="fill"
//                 className="lg:object-cover object-cover "
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className=" h-[320px]  w-[900px]">
//               {" "}
//               {/* Ensure consistent height */}
//               <Image
//                 src={i3}
//                 alt="Image 1"
//                 layout="fill"
//                 className="lg:object-cover object-cover "
//               />
//             </div>
//           </SwiperSlide>

//           {/* <SwiperSlide>
//           <div className=" h-[400px]">
//             <Image
//               src={i3}
//               alt="Image 3"
//               layout="fill"
//               className="object-cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className=" h-[400px]">
//             <Image
//               src={i4}
//               alt="Image 4"
//               layout="fill"
//               className="object-cover"
//             />
//           </div>
//         </SwiperSlide> */}
//         </Swiper>
//         <PrevArrow />
//         <NextArrow />
//       </div>
//     </div>
//   );
// };

// export default Section3;

"use client";

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import i1 from "@/../public/home/section3/p1.png";
import i2 from "@/../public/home/section3/p2.png";
import i3 from "@/../public/home/section3/p3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom arrow components
const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="custom-swiper-button custom-swiper-button-prev lg:block hidden"
  >
    <ChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="custom-swiper-button custom-swiper-button-next lg:block hidden"
  >
    <ChevronRight size={24} />
  </button>
);

const Section3 = () => {
  return (
    <div className="flex justify-center items-center my-12 relative lg:py-0 sm:py-[5px]">
      <div className="lg:h-[350px] lg:w-[1080px] w-[90vw] h-[150px]">
        {" "}
        {/* Adjusted width and height for mobile and desktop */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src={i1}
                alt="Image 1"
                width={1080}
                height={320}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src={i2}
                alt="Image 2"
                width={1080}
                height={320}
                className="object-cover"
              />
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src={i3}
                alt="Image 3"
                width={1080}
                height={320}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <PrevArrow />
        <NextArrow />
      </div>
    </div>
  );
};

export default Section3;
