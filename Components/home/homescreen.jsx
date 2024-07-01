// "use client";
// import { useState, useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
// import useStore from "app/store/store.js";

// mapboxgl.accessToken =
//   "pk.eyJ1IjoidGFydW4yNTA2IiwiYSI6ImNsaDdwbzlvZTAwdWkzcW8xM3Bib3k4bzIifQ.KY0XQwjRpgkn7KYvdaXDbQ";

// function HomeScreen({ setComponent }) {
//   const setPickup = useStore((state) => state.setPickup);
//   const setDestination = useStore((state) => state.setDestination);
//   const setStop = useStore((state) => state.setStop);
//   const setDate = useStore((state) => state.setDate);
//   const setTime = useStore((state) => state.setTime);
//   const setVehicle = useStore((state) => state.setVehicle);
//   const setNote = useStore((state) => state.setNote);
//   const date = useStore((state) => state.date);
//   const time = useStore((state) => state.time);
//   const vehicle = useStore((state) => state.vehicle);
//   const note = useStore((state) => state.note);

//   const [pointsSelected, setPointsSelected] = useState({
//     start: "",
//     stop: "",
//     end: "",
//   });

//   const [startPointData, setStartPointData] = useState([]);
//   const [endPointData, setEndPointData] = useState([]);
//   const [stopPointData, setStopPointData] = useState([]);

//   const [startPointClick, setStartPointClick] = useState(false);
//   const [endPointClick, setEndPointClick] = useState(false);
//   const [stopPointClick, setStopPointClick] = useState(false);

//   const handleStartClick = (address, coords) => {
//     setPointsSelected((prev) => ({
//       ...prev,
//       start: coords,
//     }));
//     setPickup(address);
//     document.getElementById("start").value = address;
//     setStartPointClick(false);
//   };

//   const handleEndClick = (address, coords) => {
//     setPointsSelected((prev) => ({
//       ...prev,
//       end: coords,
//     }));
//     setDestination(address);
//     document.getElementById("end").value = address;
//     setEndPointClick(false);
//   };

//   const handleStopClick = (address) => {
//     setPointsSelected((prev) => ({
//       ...prev,
//       stop: address,
//     }));
//     setStop(address);
//     document.getElementById("stop").value = address;
//     setStopPointClick(false);
//   };

//   const handlePointPopperClick = async (point, setter, setPointClick) => {
//     const query = await fetch(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?country=au&access_token=${mapboxgl.accessToken}`,
//       { method: "GET" }
//     );
//     const json = await query.json();
//     setter(json.features);
//     setPointClick(true);
//   };

//   const vehicleTypes = [
//     {
//       id: 1,
//       name: "Small Van",
//       capacity: "5 seats",
//       price: "$4.50",
//       imageUrl: "/path-to-your-image/small-van.png",
//     },
//     {
//       id: 2,
//       name: "Large Van",
//       capacity: "10 seats",
//       price: "$4.50",
//       imageUrl: "/path-to-your-image/large-van.png",
//     },
//     {
//       id: 3,
//       name: "Bus",
//       capacity: "20 seats",
//       price: "$4.50",
//       imageUrl: "/path-to-your-image/bus.png",
//     },
//   ];

//   const calculateDistance = (coord1, coord2) => {
//     if (!coord1 || !coord2) return 0;

//     const [lng1, lat1] = coord1;
//     const [lng2, lat2] = coord2;

//     const toRadians = (degrees) => degrees * (Math.PI / 180);
//     const R = 6371; // Radius of the Earth in kilometers
//     const dLat = toRadians(lat2 - lat1);
//     const dLng = toRadians(lng2 - lng1);

//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos(toRadians(lat1)) *
//         Math.cos(toRadians(lat2)) *
//         Math.sin(dLng / 2) *
//         Math.sin(dLng / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c; // Distance in kilometers

//     return distance;
//   };

//   useEffect(() => {
//     if (pointsSelected.start && pointsSelected.end) {
//       const startEndDistance = calculateDistance(
//         pointsSelected.start,
//         pointsSelected.end
//       );
//       console.log(
//         `Distance between start and end: ${startEndDistance.toFixed(2)} km`
//       );
//     }

//     if (pointsSelected.start && pointsSelected.stop) {
//       const startStopDistance = calculateDistance(
//         pointsSelected.start,
//         pointsSelected.stop
//       );
//       console.log(
//         `Distance between start and stop: ${startStopDistance.toFixed(2)} km`
//       );
//     }

//     if (pointsSelected.stop && pointsSelected.end) {
//       const stopEndDistance = calculateDistance(
//         pointsSelected.stop,
//         pointsSelected.end
//       );
//       console.log(
//         `Distance between stop and end: ${stopEndDistance.toFixed(2)} km`
//       );
//     }
//   }, [pointsSelected]);

//   const startPointRef = useRef(null);
//   const endPointRef = useRef(null);
//   const stopPointRef = useRef(null);

//   const handleAddStopOpen = () => setAddStop(true);
//   const handleAddStopClose = () => {
//     setPointsSelected((prev) => ({
//       ...prev,
//       stop: "",
//     }));
//     setAddStop(false);
//   };

//   const [addStop, setAddStop] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState(null);

//   return (
//     <div className="">
//       <div className="p-4 bg-white">
//         <div className="mb-4 ">
//           <label className="block mb-2 text-2xl font-bold text-black">
//             Book A Ride
//           </label>
//           <div className="mb-1 text-sm text-black">{date}</div>
//           <div className="mb-2 text-sm text-black">{time}</div>
//           <div className="w-full p-2 border border-gray-300 rounded">
//             <input
//               id="start"
//               type="text"
//               className="w-full px-2 text-black bg-white shadow-2xl rounded-3xl"
//               onFocus={() =>
//                 handlePointPopperClick(
//                   document.getElementById("start").value,
//                   setStartPointData,
//                   setStartPointClick
//                 )
//               }
//               placeholder="Where From?"
//             />
//             {startPointClick && (
//               <div className="z-30 flex-col mt-2 mr-8 bg-white w-80 popper">
//                 {startPointData.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex px-3 py-3 border-b border-gray-200 cursor-pointer hover:bg-slate-200 hover:shadow-xl"
//                     onClick={() =>
//                       handleStartClick(
//                         item.place_name,
//                         item.geometry.coordinates
//                       )
//                     }
//                   >
//                     <p className="text-black">
//                       {item.place_name.length > 40
//                         ? `${item.place_name.slice(0, 40)}...`
//                         : item.place_name}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="mb-4 ">
//           <label
//             className="block```jsx
// text-black mb-2"
//           ></label>
//           <div className="w-full p-2 border border-gray-300 rounded">
//             <input
//               id="end"
//               type="text"
//               className="w-full px-2 py-1 text-black bg-white shadow-2xl rounded-3xl"
//               onFocus={() =>
//                 handlePointPopperClick(
//                   document.getElementById("end").value,
//                   setEndPointData,
//                   setEndPointClick
//                 )
//               }
//               placeholder="Where To?"
//             />
//             {endPointClick && (
//               <div className="z-30 flex-col mt-2 mr-8 bg-white w-80 popper">
//                 {endPointData.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex px-3 py-3 border-b border-gray-200 cursor-pointer hover:bg-slate-200 hover:shadow-xl"
//                     onClick={() =>
//                       handleEndClick(item.place_name, item.geometry.coordinates)
//                     }
//                   >
//                     <p className="text-black">
//                       {item.place_name.length > 40
//                         ? `${item.place_name.slice(0, 40)}...`
//                         : item.place_name}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//         {addStop && (
//           <div className="mb-4">
//             <label className="block mb-2 text-black">Stop Point</label>
//             <div className="w-full p-2 border border-gray-300 rounded">
//               <input
//                 id="stop"
//                 type="text"
//                 className="w-full px-2 py-1 bg-white shadow-2xl rounded-3xl"
//                 onFocus={() =>
//                   handlePointPopperClick(
//                     document.getElementById("stop").value,
//                     setStopPointData,
//                     setStopPointClick
//                   )
//                 }
//                 placeholder="Add Stop"
//               />
//               {stopPointClick && (
//                 <div className="z-30 flex-col mt-2 mr-8 bg-white w-80 popper">
//                   {stopPointData.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex px-3 py-3 border-b border-gray-200 cursor-pointer hover:bg-slate-200 hover:shadow-xl"
//                       onClick={() => handleStopClick(item.place_name)}
//                     >
//                       <p className="text-black">
//                         {item.place_name.length > 40
//                           ? `${item.place_name.slice(0, 40)}...`
//                           : item.place_name}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         {!addStop && (
//           <button
//             className="px-4 py-2 text-white bg-blue-500 rounded"
//             onClick={handleAddStopOpen}
//           >
//             Add Stop
//           </button>
//         )}
//         {addStop && (
//           <button
//             className="px-4 py-2 text-white bg-red-500 rounded"
//             onClick={handleAddStopClose}
//           >
//             Remove Stop
//           </button>
//         )}
//         <div className="mb-4">
//           <label className="block mb-2 text-black">Select Date & Time</label>
//           <div className="flex space-x-4">
//             <input
//               type="date"
//               className="w-full p-2 text-black border border-gray-300 rounded"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//             <input
//               type="time"
//               className="w-full p-2 text-black border border-gray-300 rounded"
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-black">Select Vehicle Type</label>
//           <div className="flex space-x-4">
//             {vehicleTypes.map((vehicle) => (
//               <div
//                 key={vehicle.id}
//                 className={`cursor-pointer p-4 border rounded-lg ${
//                   selectedVehicle === vehicle.id ? "border-yellow-500" : ""
//                 }`}
//                 onClick={() => setSelectedVehicle(vehicle.id)}
//               >
//                 <img
//                   src={vehicle.imageUrl}
//                   alt={vehicle.name}
//                   className="object-cover w-full h-32"
//                 />
//                 <div className="mt-2 text-black">
//                   <h3 className="text-lg font-semibold">{vehicle.name}</h3>
//                   <p className="text-sm text-gray-500">{vehicle.capacity}</p>
//                   <p className="text-sm font-bold">{vehicle.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button
//           className="w-full px-4 py-2 text-white bg-blue-500 rounded"
//           onClick={() => setComponent(2)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default HomeScreen;
