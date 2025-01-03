// "use client";
// import React, { useState } from "react";

// const GradientBackground = ({ children, onClick, type = "button", className = "" }) => {
//   const gradientColors = [
//     `linear-gradient(to top, #250b50, #250b50, black)`,
//     `linear-gradient(to top, #f4a4f4, #fff, #f4a4f4, #250b50)`,
//     `linear-gradient(to bottom, #f4a4f4, #250b50, black, black, black)`,
//   ];

//   const [currentGradient, setCurrentGradient] = useState(gradientColors[0]);

//   const handleGradientChange = () => {
//     const nextGradient =
//       gradientColors[
//         (gradientColors.indexOf(currentGradient) + 1) % gradientColors.length
//       ];
//     setCurrentGradient(nextGradient);
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         background: currentGradient,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "white",
//         fontSize: "2rem",
//       }}
//     >
//       <div>
//         <p>Dynamic Gradient Background</p>
//         <button
//           onClick={handleGradientChange}
//           style={{
//             padding: "10px 20px",
//             background: "#fff",
//             color: "#000",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             marginTop: "20px",
//           }}
//         >
//           Change Gradient
//         </button>
//         <button
//       type={type}
//       onClick={onClick}
//       className={`px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200 ${className}`}
//     >
//       {children}
//     </button>
//     <button
//     onClick={onClick}
//     className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200"
//   >
//     {"Click Me"}
//   </button>
//       </div>
//     </div>
//   );
// };

// export default GradientBackground;
