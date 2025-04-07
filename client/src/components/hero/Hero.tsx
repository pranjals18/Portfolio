// import { Typewriter } from "react-simple-typewriter";
// import Pranjal_Img from "../../assets/Pranjal.png";
// // import { LuSend } from "react-icons/lu";
// import { MdArrowForward } from "react-icons/md";
// import { ThemeContext } from "../context/ThemeContext";
// import { useContext } from "react";

// const Hero = () => {
//   const { theme } = useContext(ThemeContext);
//   return (
//     <div
//       id="home"
//       className="flex flex-col md:flex-row justify-center items-center pt-44 mx-12 mb-16"
//     >
//       <div className="w-full md:w-3/5 text-center md:text-left">
//         {/* Name Section */}
//         <h1 className="text-6xl font-semibold mb-8 w-fit flex flex-col">
//           <span className="mb-5">Pranjal</span>
//           <span className="flex items-center gap-2 justify-center md:justify-start">
//             Shinde
//             <svg
//               width="48"
//               height="48"
//               viewBox="0 0 48 48"
//               fill="currentColor"
//               className="text-yellow-500"
//               xmlns="http://www.w3.org/2000/svg"
//             >
              // <path
              //   d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
              //   fill="#FFDD67"
              // ></path>
              // <path
              //   d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
              //   fill="#EBA352"
              // ></path>
              // <path
              //   d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
              //   fill="#FFDD67"
              // ></path>
              // <path
              //   d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
              //   fill="#EBA352"
              // ></path>
              // <path
              //   d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
              //   fill="#FFDD67"
              // ></path>
              // <path
              //   d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
              //   fill="#EBA352"
              // ></path>
              // <path
              //   d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
              //   fill="#FFDD67"
              // ></path>
              // <path
              //   d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
              //   fill="#EBA352"
              // ></path>
              // <path
              //   d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
              //   fill="#FFDD67"
              // ></path>
              // <path
              //   d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
              //   fill="#EBA352"
              // ></path>
//             </svg>
//           </span>
//         </h1>

//         {/* Subtitle */}
//         <h1 className="text-4xl mb-8">
//           <span className="text-xl font-medium mt-6 mb-6">
//             <Typewriter
//               words={["Developer", "Student"]}
//               loop={false}
//               cursor
//               cursorStyle="..."
//               typeSpeed={50}
//               deleteSpeed={50}
//               delaySpeed={2000}
//             />
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="text-md w-4/5  mx-auto md:mx-0 mb-8">
//           Full Stack Web Developer skilled in building responsive, user-friendly
//           websites and applications. Proficient in MERN stack & Next.js, with a
//           passion for crafting scalable, efficient, and intuitive digital
//           experiences.
//         </p>

//         {/* CTA Button */}

//         <div className="flex flex-col md:flex-row gap-4">
//           {/* Contact Button */}
//           {/* <a
//             href="#contact"
//             className="flex justify-center md:justify-start items-center gap-2 bg-[#333333] w-36 text-white cursor-pointer p-4 rounded-xl hover:bg-black mx-auto md:mx-0"
//           >
//             Say Hello <LuSend size={24} />
//           </a> */}

//           {/* CV Button */}
//           <a
//             href={
//               "https://drive.google.com/file/d/1S7By1zAg5wBcrgpMbRFqR7OLg0RxS-Fd/view"
//             }
//             className={`flex justify-center md:justify-start w-36 items-center gap-3 cursor-pointer p-4 rounded-xl mx-auto md:mx-0 transition-transform hover:scale-105 ${
//               theme === "dark"
//                 ? "bg-[#fff5ec] text-[#333333] hover:bg-[#fff5ec]"
//                 : "bg-gray-800 text-[#fff5ec] hover:bg-black"
//             }`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             View CV <MdArrowForward size={24} />
//           </a>
//         </div>
//       </div>

//       {/* Profile Image */}
//       <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-10 md:mt-0">
//         <img
//           className="w-80 h-80 bg-center bg-cover shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] rounded-[30%_60%_70%_40%_/_50%_60%_30%_60%] border-8 border-[#e2e2e2]"
//           src={Pranjal_Img}
//           alt="Profile"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;






















// import { Typewriter } from "react-simple-typewriter";
// import Pranjal_Img from "../../assets/Pranjal.png";
// import { MdArrowForward } from "react-icons/md";
// import { ThemeContext } from "../context/ThemeContext";
// import { useContext } from "react";

// const Hero = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div
//       id="home"
//       className="flex flex-col md:flex-row justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 pt-32 sm:pt-36 md:pt-44 mb-16"
//     >
//       {/* Text Section */}
//       <div className="w-full md:w-3/5 text-center md:text-left">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 w-fit mx-auto md:mx-0 flex flex-col">
//           <span className="mb-3 sm:mb-5">Pranjal</span>
//           <span className="flex items-center gap-2 justify-center md:justify-start">
//             Shinde
//             <svg
//               width="36"
//               height="36"
//               viewBox="0 0 48 48"
//               fill="currentColor"
//               className="text-yellow-500"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//                <path
//                 d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
//                 fill="#EBA352"
//               ></path>
//               <path
//                 d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
//                 fill="#EBA352"
//               ></path>
//               <path
//                 d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
//                 fill="#EBA352"
//               ></path>
//               <path
//                 d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
//                 fill="#EBA352"
//               ></path>
//               <path
//                 d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
//                 fill="#EBA352"
//               ></path>
//             </svg>
//           </span>
//         </h1>

//         <h2 className="text-2xl sm:text-3xl font-medium mb-6">
//           <Typewriter
//             words={["Developer", "Student"]}
//             loop={false}
//             cursor
//             cursorStyle="..."
//             typeSpeed={50}
//             deleteSpeed={50}
//             delaySpeed={2000}
//           />
//         </h2>

//         <p className="text-base sm:text-lg max-w-md sm:max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
//           Full Stack Web Developer skilled in building responsive, user-friendly
//           websites and applications. Proficient in MERN stack & Next.js, with a
//           passion for crafting scalable, efficient, and intuitive digital
//           experiences.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center md:justify-start">
//           <a
//             href="https://drive.google.com/file/d/1S7By1zAg5wBcrgpMbRFqR7OLg0RxS-Fd/view"
//             className={`flex items-center justify-center gap-2 w-36 px-4 py-3 rounded-xl transition-transform hover:scale-105 ${
//               theme === "dark"
//                 ? "bg-[#fff5ec] text-[#333333] hover:bg-[#fff5ec]"
//                 : "bg-gray-800 text-[#fff5ec] hover:bg-black"
//             }`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             View CV <MdArrowForward size={20} />
//           </a>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-12 md:mt-0">
//         <img
//           className="w-60 sm:w-72 md:w-80 h-auto bg-center bg-cover shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] rounded-[30%_60%_70%_40%_/_50%_60%_30%_60%] border-8 border-[#e2e2e2]"
//           src={Pranjal_Img}
//           alt="Profile"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;


















// import { Typewriter } from "react-simple-typewriter";
// import Pranjal_Img from "../../assets/Pranjal.png";
// import { MdArrowForward } from "react-icons/md";
// import { ThemeContext } from "../context/ThemeContext";
// import { useContext } from "react";

// const Hero = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div
//       id="home"
//       className="flex flex-col-reverse md:flex-row justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 pt-32 sm:pt-36 md:pt-44 mb-16"
//     >
//       {/* Text Section */}
//       <div className="w-full md:w-3/5 text-center md:text-left">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 w-fit mx-auto md:mx-0 flex flex-col">
//           <span className="mb-3 sm:mb-5">Pranjal</span>
//           <span className="flex items-center gap-2 justify-center md:justify-start">
//             Shinde
//             <svg
//               width="36"
//               height="36"
//               viewBox="0 0 48 48"
//               fill="currentColor"
//               className="text-yellow-500"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//                <path
//                 d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
//                 fill="#EBA352"
//               ></path>
//               <path
//                 d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
//                 fill="#EBA352"
//               ></path>
//               <path
//                 d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
//                 fill="#EBA352"
//               ></path>
//               <path
//                 d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
//                 fill="#EBA352"
//               ></path>
//               <path
//                 d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
//                 fill="#FFDD67"
//               ></path>
//               <path
//                 d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
//                 fill="#EBA352"
//               ></path>
//             </svg>
//           </span>
//         </h1>

//         <h3 className={`text-xl sm:text-2xl font-medium mb-6 ${theme === 'dark' ? "text-[#d6d6d6]" : "text-[#525252]"}`}>
//           <Typewriter
//             words={["Developer", "Student"]}
//             loop={false}
//             cursor
//             cursorStyle="..."
//             typeSpeed={50}
//             deleteSpeed={50}
//             delaySpeed={2000}
//           />
//         </h3>

//         <p className={`text-base sm:text-lg max-w-md sm:max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed ${theme === 'dark' ? "text-[#d6d6d6]" : "text-[#525252]"}`}>
//           Full Stack Web Developer skilled in building responsive, user-friendly
//           websites and applications. Proficient in MERN stack & Next.js, with a
//           passion for crafting scalable, efficient, and intuitive digital
//           experiences.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center md:justify-start">
//           <a
//             href="https://drive.google.com/file/d/1S7By1zAg5wBcrgpMbRFqR7OLg0RxS-Fd/view"
//             className={`flex items-center justify-center gap-2 w-36 px-4 py-3 rounded-xl transition-transform hover:scale-105 ${
//               theme === "dark"
//                 ? "bg-[#fff5ec] text-[#333333] hover:bg-[#fff5ec]"
//                 : "bg-gray-800 text-[#fff5ec] hover:bg-black"
//             }`}
//             target="_blank"
//             rel="noreferrer"
//           >
//             View CV <MdArrowForward size={20} />
//           </a>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="w-full md:w-2/5 flex justify-center md:justify-end mb-12 md:mb-0">
//         <img
//           className="w-60 sm:w-72 md:w-80 h-auto bg-center bg-cover shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] rounded-[30%_60%_70%_40%_/_50%_60%_30%_60%] border-8 border-[#e2e2e2]"
//           src={Pranjal_Img}
//           alt="Profile"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;






















import { Typewriter } from "react-simple-typewriter";
import Pranjal_Img from "../../assets/Pranjal.png";
import { MdArrowForward } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="home"
      className="flex flex-col-reverse xl:flex-row justify-center items-center px-6 sm:px-10 md:px-16 xl:px-24 pt-32 sm:pt-36 md:pt-44 mb-16"
    >
      {/* Text Section */}
      <div className="w-full xl:w-3/5 text-center xl:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 w-fit mx-auto xl:mx-0 flex flex-col">
          <span className="mb-3 sm:mb-5">Pranjal</span>
          <span className="flex items-center gap-2 justify-center xl:justify-start">
            Shinde
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="currentColor"
              className="text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
            >
               <path
                d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                fill="#EBA352"
              ></path>
              <path
                d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                fill="#EBA352"
              ></path>
              <path
                d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                fill="#EBA352"
              ></path>
              <path
                d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                fill="#EBA352"
              ></path>
              <path
                d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                fill="#FFDD67"
              ></path>
              <path
                d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                fill="#EBA352"
              ></path>
            </svg>
          </span>
        </h1>

        <h2 className={`text-xl sm:text-2xl font-medium mb-6 ${theme === 'dark' ? "text-[#d6d6d6]" : "text-[#525252]"}`}>
          <Typewriter
            words={["Developer", "Student"]}
            loop={false}
            cursor
            cursorStyle="..."
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <p className={`text-base sm:text-lg max-w-md sm:max-w-lg mx-auto xl:mx-0 mb-8 leading-relaxed ${theme === 'dark' ? "text-[#d6d6d6]" : "text-[#525252]"}`}>
          Full Stack Web Developer skilled in building responsive, user-friendly
          websites and applications. Proficient in MERN stack & Next.js, with a
          passion for crafting scalable, efficient, and intuitive digital
          experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center xl:justify-start">
          <a
            href="https://drive.google.com/file/d/1S7By1zAg5wBcrgpMbRFqR7OLg0RxS-Fd/view"
            className={`flex items-center justify-center gap-2 w-36 px-4 py-3 rounded-xl transition-transform hover:scale-105 ${
              theme === "dark"
                ? "bg-[#fff5ec] text-[#333333] hover:bg-[#fff5ec]"
                : "bg-gray-800 text-[#fff5ec] hover:bg-black"
            }`}
            target="_blank"
            rel="noreferrer"
          >
            View CV <MdArrowForward size={20} />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full xl:w-2/5 flex justify-center xl:justify-end mb-12 xl:mb-0">
        <img
          className="w-60 sm:w-72 md:w-80 h-auto bg-center bg-cover shadow-[inset_0_0_0_9px_rgba(255,255,255,0.3)] rounded-[30%_60%_70%_40%_/_50%_60%_30%_60%] border-8 border-[#e2e2e2]"
          src={Pranjal_Img}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Hero;
