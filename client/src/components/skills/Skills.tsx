// import { FaReact } from "react-icons/fa6";
// import {
//   BiLogoCPlusPlus,
//   BiLogoFirebase,
//   BiLogoTailwindCss,
// } from "react-icons/bi";
// import { SiExpress, SiMongodb, SiPostman, SiSocketdotio } from "react-icons/si";
// import {
//   RiJavascriptLine,
//   RiBootstrapLine,
//   RiNodejsFill,
// } from "react-icons/ri";
// import {
//   TbBrandGithub,
//   TbBrandNextjs,
//   TbBrandTypescript,
// } from "react-icons/tb";
// import { DiFirebase, DiMysql } from "react-icons/di";
// import { FaAws } from "react-icons/fa";
// import { AiOutlinePython } from "react-icons/ai";
// import { ThemeContext } from "../context/ThemeContext";
// import { useContext } from "react";

// export default function Skills() {
//   const { theme } = useContext(ThemeContext);


//   const skills = {
//     Frontend: [
//       { name: "React", logo: <FaReact size={18} /> },
//       { name: "Next.js", logo: <TbBrandNextjs size={18} /> },
//       { name: "JavaScript", logo: <RiJavascriptLine size={18} /> },
//       { name: "TypeScript", logo: <TbBrandTypescript size={18} /> },
//       { name: "Tailwind", logo: <BiLogoTailwindCss size={18} /> },
//       { name: "Bootstrap", logo: <RiBootstrapLine size={18} /> },
//     ],
//     Backend: [
//       { name: "Node.js", logo: <RiNodejsFill size={18} /> },
//       { name: "Express.js", logo: <SiExpress size={18} /> },
//       { name: "MongoDB", logo: <SiMongodb size={18} /> },
//       { name: "Socket.io", logo: <SiSocketdotio size={18} /> },
//       { name: "Firebase", logo: <BiLogoFirebase size={18} /> },
//       { name: "FiteStore", logo: <DiFirebase size={18} /> },
//     ],
//     Other: [
//       { name: "C/C++", logo: <BiLogoCPlusPlus size={18} /> },
//       { name: "Git/GitHub", logo: <TbBrandGithub size={18} /> },
//       { name: "Postman", logo: <SiPostman size={18} /> },
//       { name: "SQL", logo: <DiMysql size={18} /> },
//       { name: "AWS", logo: <FaAws size={18} /> },
//       { name: "Python", logo: <AiOutlinePython size={18} /> },
//     ],
//   };

//   return (
//     <div id="skills" className="pt-24 mx-12 pb-72">
//       <div className={`flex font-semibold items-center justify-center text-4xl ${theme === "dark" ? "text-[#fff5ec]" : ""}`}>
//         Skills
//       </div>
//       <section className="flex flex-col items-start justify-center mt-42">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
//           {Object.entries(skills).map(([category, skillList]) => (
//             <div
//               key={category}
//               className={`shadow-md rounded-xl p-5 border transition-transform transform hover:scale-103 ${theme === "dark" ? "bg-[#2e2e2e] border-gray-200" : "bg-[#fffaf6] border-gray-600"} `}
//             >
//               <h3 className="text-xl font-medium  text-center mb-7">
//                 {category}
//               </h3>
//               <div className="grid grid-cols-2 gap-7">
//                 {skillList.map((skill) => (
//                   <div key={skill.name} className="flex items-center space-x-2">
//                     <span className="text-lg">{skill.logo}</span>
//                     <span className="text-sm ">{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }










// import { FaReact } from "react-icons/fa6";
// import {
//   BiLogoCPlusPlus,
//   BiLogoFirebase,
//   BiLogoTailwindCss,
// } from "react-icons/bi";
// import { SiExpress, SiMongodb, SiPostman, SiSocketdotio } from "react-icons/si";
// import {
//   RiJavascriptLine,
//   RiBootstrapLine,
//   RiNodejsFill,
// } from "react-icons/ri";
// import {
//   TbBrandGithub,
//   TbBrandNextjs,
//   TbBrandTypescript,
// } from "react-icons/tb";
// import { DiFirebase, DiMysql } from "react-icons/di";
// import { FaAws } from "react-icons/fa";
// import { AiOutlinePython } from "react-icons/ai";
// import { ThemeContext } from "../context/ThemeContext";
// import { useContext } from "react";

// export default function Skills() {
//   const { theme } = useContext(ThemeContext);

//   const skills = {
//     Frontend: [
//       { name: "React", logo: <FaReact size={18} /> },
//       { name: "Next.js", logo: <TbBrandNextjs size={18} /> },
//       { name: "JavaScript", logo: <RiJavascriptLine size={18} /> },
//       { name: "TypeScript", logo: <TbBrandTypescript size={18} /> },
//       { name: "Tailwind", logo: <BiLogoTailwindCss size={18} /> },
//       { name: "Bootstrap", logo: <RiBootstrapLine size={18} /> },
//     ],
//     Backend: [
//       { name: "Node.js", logo: <RiNodejsFill size={18} /> },
//       { name: "Express.js", logo: <SiExpress size={18} /> },
//       { name: "MongoDB", logo: <SiMongodb size={18} /> },
//       { name: "Socket.io", logo: <SiSocketdotio size={18} /> },
//       { name: "Firebase", logo: <BiLogoFirebase size={18} /> },
//       { name: "FiteStore", logo: <DiFirebase size={18} /> },
//     ],
//     Other: [
//       { name: "C/C++", logo: <BiLogoCPlusPlus size={18} /> },
//       { name: "Git/GitHub", logo: <TbBrandGithub size={18} /> },
//       { name: "Postman", logo: <SiPostman size={18} /> },
//       { name: "SQL", logo: <DiMysql size={18} /> },
//       { name: "AWS", logo: <FaAws size={18} /> },
//       { name: "Python", logo: <AiOutlinePython size={18} /> },
//     ],
//   };

//   return (
//     <div
//       id="skills"
//       className="pt-24 px-6 sm:px-10 md:px-16 xl:px-24 pb-32"
//     >
//       <h2
//         className={`text-center font-semibold text-3xl sm:text-4xl mb-10 ${
//           theme === "dark" ? "text-[#fff5ec]" : "text-[#333]"
//         }`}
//       >
//         Skills
//       </h2>

//       <section className="flex flex-col items-center justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
//           {Object.entries(skills).map(([category, skillList]) => (
//             <div
//               key={category}
//               className={`shadow-md rounded-xl p-5 border w-full transition-transform transform hover:scale-[1.02] ${
//                 theme === "dark"
//                   ? "bg-[#2e2e2e] border-gray-200"
//                   : "bg-[#fffaf6] border-gray-600"
//               }`}
//             >
//               <h3
//                 className={`text-xl font-medium text-center mb-6 ${
//                   theme === "dark" ? "text-white" : "text-[#1a1a1a]"
//                 }`}
//               >
//                 {category}
//               </h3>
//               <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-y-6">
//                 {skillList.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className={`flex items-center space-x-2 ${
//                       theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"
//                     }`}
//                   >
//                     <span className="text-lg">{skill.logo}</span>
//                     <span className="text-sm">{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

















// import { FaReact } from "react-icons/fa6";
// import {
//   BiLogoCPlusPlus,
//   BiLogoFirebase,
//   BiLogoTailwindCss,
// } from "react-icons/bi";
// import { SiExpress, SiMongodb, SiPostman, SiSocketdotio } from "react-icons/si";
// import {
//   RiJavascriptLine,
//   RiBootstrapLine,
//   RiNodejsFill,
// } from "react-icons/ri";
// import {
//   TbBrandGithub,
//   TbBrandNextjs,
//   TbBrandTypescript,
// } from "react-icons/tb";
// import { DiFirebase, DiMysql } from "react-icons/di";
// import { FaAws } from "react-icons/fa";
// import { AiOutlinePython } from "react-icons/ai";
// import { ThemeContext } from "../context/ThemeContext";
// import { useContext } from "react";

// export default function Skills() {
//   const { theme } = useContext(ThemeContext);

//   const skills = {
//     Frontend: [
//       { name: "React", logo: <FaReact size={18} /> },
//       { name: "Next.js", logo: <TbBrandNextjs size={18} /> },
//       { name: "JavaScript", logo: <RiJavascriptLine size={18} /> },
//       { name: "TypeScript", logo: <TbBrandTypescript size={18} /> },
//       { name: "Tailwind", logo: <BiLogoTailwindCss size={18} /> },
//       { name: "Bootstrap", logo: <RiBootstrapLine size={18} /> },
//     ],
//     Backend: [
//       { name: "Node.js", logo: <RiNodejsFill size={18} /> },
//       { name: "Express.js", logo: <SiExpress size={18} /> },
//       { name: "MongoDB", logo: <SiMongodb size={18} /> },
//       { name: "Socket.io", logo: <SiSocketdotio size={18} /> },
//       { name: "Firebase", logo: <BiLogoFirebase size={18} /> },
//       { name: "FiteStore", logo: <DiFirebase size={18} /> },
//     ],
//     Other: [
//       { name: "C/C++", logo: <BiLogoCPlusPlus size={18} /> },
//       { name: "Git/GitHub", logo: <TbBrandGithub size={18} /> },
//       { name: "Postman", logo: <SiPostman size={18} /> },
//       { name: "SQL", logo: <DiMysql size={18} /> },
//       { name: "AWS", logo: <FaAws size={18} /> },
//       { name: "Python", logo: <AiOutlinePython size={18} /> },
//     ],
//   };

//   return (
//     <div
//       id="skills"
//       className="pt-24 px-6 sm:px-10 md:px-16 xl:px-24 pb-32"
//     >
//       <h2
//         className={`text-center font-semibold text-3xl sm:text-4xl mb-28 ${
//           theme === "dark" ? "text-[#fff5ec]" : "text-[#333]"
//         }`}
//       >
//         Skills
//       </h2>

//       <section className="flex flex-col items-center justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl justify-items-center mb-44">
//           {Object.entries(skills).map(([category, skillList], index) => (
//             <div
//               key={category}
//               className={`shadow-md rounded-xl p-5 border w-full max-w-sm transition-transform transform hover:scale-[1.02] ${
//                 theme === "dark"
//                   ? "bg-[#2e2e2e] border-gray-200"
//                   : "bg-[#fffaf6] border-gray-600"
//               } ${index === 2 ? "sm:col-span-2 sm:mx-auto lg:col-span-1" : "mx-auto"}`}
//             >
//               <h3
//                 className={`text-xl font-medium text-center mb-6 ${
//                   theme === "dark" ? "text-white" : "text-[#1a1a1a]"
//                 }`}
//               >
//                 {category}
//               </h3>
//               <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-y-6">
//                 {skillList.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className={`flex items-center space-x-2 ${
//                       theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"
//                     }`}
//                   >
//                     <span className="text-lg">{skill.logo}</span>
//                     <span className="text-sm">{skill.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


















import { FaReact } from "react-icons/fa6";
import {
  BiLogoCPlusPlus,
  BiLogoFirebase,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress, SiMongodb, SiPostman, SiSocketdotio } from "react-icons/si";
import {
  RiJavascriptLine,
  RiBootstrapLine,
  RiNodejsFill,
} from "react-icons/ri";
import {
  TbBrandGithub,
  TbBrandNextjs,
  TbBrandTypescript,
} from "react-icons/tb";
import { DiFirebase, DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  const skills = {
    Frontend: [
      { name: "React", logo: <FaReact size={18} /> },
      { name: "Next.js", logo: <TbBrandNextjs size={18} /> },
      { name: "JavaScript", logo: <RiJavascriptLine size={18} /> },
      { name: "TypeScript", logo: <TbBrandTypescript size={18} /> },
      { name: "Tailwind", logo: <BiLogoTailwindCss size={18} /> },
      { name: "Bootstrap", logo: <RiBootstrapLine size={18} /> },
    ],
    Backend: [
      { name: "Node.js", logo: <RiNodejsFill size={18} /> },
      { name: "Express.js", logo: <SiExpress size={18} /> },
      { name: "MongoDB", logo: <SiMongodb size={18} /> },
      { name: "Socket.io", logo: <SiSocketdotio size={18} /> },
      { name: "Firebase", logo: <BiLogoFirebase size={18} /> },
      { name: "FiteStore", logo: <DiFirebase size={18} /> },
    ],
    Other: [
      { name: "C/C++", logo: <BiLogoCPlusPlus size={18} /> },
      { name: "Git/GitHub", logo: <TbBrandGithub size={18} /> },
      { name: "Postman", logo: <SiPostman size={18} /> },
      { name: "SQL", logo: <DiMysql size={18} /> },
      { name: "AWS", logo: <FaAws size={18} /> },
      { name: "Python", logo: <AiOutlinePython size={18} /> },
    ],
  };

  const cardBaseStyle = `shadow-md rounded-xl p-5 border w-full max-w-sm transition-transform transform hover:scale-[1.02]`;
  const darkCard = `bg-[#2e2e2e] border-gray-200`;
  const lightCard = `bg-[#fffaf6] border-gray-600`;

  return (
    <div id="skills" className="pt-24 px-6 sm:px-10 md:px-16 xl:px-24 pb-32">
      <h2
        className={`text-center font-semibold text-3xl sm:text-4xl mb-28 ${
          theme === "dark" ? "text-[#fff5ec]" : "text-[#333]"
        }`}
      >
        Skills
      </h2>

      <section className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl justify-items-center">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className={`${cardBaseStyle} ${
                theme === "dark" ? darkCard : lightCard
              } ${
                index === 2
                  ? "sm:col-span-2 sm:mx-auto md:col-span-2 md:col-start-1 md:col-end-3 md:justify-self-center lg:col-span-1 lg:col-start-auto lg:col-end-auto"
                  : ""
              }`}
            >
              <h3
                className={`text-xl font-medium text-center mb-6 ${
                  theme === "dark" ? "text-white" : "text-[#1a1a1a]"
                }`}
              >
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-y-6">
                {skillList.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center space-x-2 ${
                      theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"
                    }`}
                  >
                    <span className="text-lg">{skill.logo}</span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}