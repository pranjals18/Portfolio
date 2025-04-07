// import { MouseEvent, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, useMotionValue } from "framer-motion";
// import { BiHomeAlt } from "react-icons/bi";
// import { FaRegStar } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { LuSend } from "react-icons/lu";
// import { RiLinkedinLine, RiTwitterXFill } from "react-icons/ri";
// import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
// import {
//   MdOutlineDarkMode,
//   MdOutlineFolder,
//   MdOutlineRateReview,
//   MdOutlineKeyboardDoubleArrowUp,
// } from "react-icons/md";
// import { ThemeContext } from "../context/ThemeContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { theme } = useContext(ThemeContext);

//   const scrollToSection = (id: string) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//       }, 300);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       {/* Left Sidebar */}
//       <div className="fixed left-0 top-0 h-screen ml-36 flex flex-col items-center">
//         <div
//           className={`w-0.5 h-[15%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//         <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
//           <NavItem
//             icon={<BiHomeAlt size={24} />}
//             onClick={() => scrollToSection("home")}
//             theme={theme}
//           />
//           <NavItem
//             icon={<FaRegStar size={24} />}
//             onClick={() => scrollToSection("skills")}
//             theme={theme}
//           />
//           <NavItem
//             icon={<MdOutlineFolder size={24} />}
//             onClick={() => scrollToSection("projects")}
//             theme={theme}
//           />
//           <NavItem
//             icon={<MdOutlineRateReview size={24} />}
//             onClick={() => scrollToSection("testimonials")}
//             theme={theme}
//           />
//           <NavItem
//             icon={<LuSend size={24} />}
//             onClick={() => scrollToSection("contact")}
//             theme={theme}
//           />
//         </div>
//         <div
//           className={`w-0.5 h-[30%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//         <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
//           <ThemeItem />
//         </div>
//         <div
//           className={`w-0.5 h-[5%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="fixed right-0 top-0 h-screen mr-36 flex flex-col items-center">
//         <div
//           className={`w-0.5 h-[5%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//         <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
//           <NavItem
//             icon={<MdOutlineKeyboardDoubleArrowUp size={24} />}
//             onClick={() => scrollToSection("home")}
//             theme={theme}
//           />
//         </div>
//         <div
//           className={`w-0.5 h-[30%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//         <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
//           <SocialItem
//             icon={<TbBrandGithub size={24} />}
//             link="https://github.com/pranjals18/"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<RiLinkedinLine size={24} />}
//             link="https://www.linkedin.com/in/pranjals18/"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<TbBrandInstagram size={24} />}
//             link="https://www.instagram.com/pranjal_s18/"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<HiOutlineMail size={24} />}
//             link="mailto:pranjalshinde.dev@gmail.com"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<RiTwitterXFill size={24} />}
//             link="https://x.com/pranjal_s18"
//             theme={theme}
//           />
//         </div>
//         <div
//           className={`w-0.5 h-[15%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//       </div>
//     </>
//   );
// };

// interface NavItemProps {
//   icon: React.ReactNode;
//   onClick: () => void;
//   theme: string;
// }

// const NavItem: React.FC<NavItemProps> = ({ icon, onClick, theme }) => {
//   return <MagneticIcon icon={icon} onClick={onClick} theme={theme} />;
// };

// interface SocialItemProps {
//   icon: React.ReactNode;
//   link: string;
//   theme: string;
// }

// const SocialItem: React.FC<SocialItemProps> = ({ icon, link, theme }) => {
//   return (
//     <MagneticIcon
//       icon={icon}
//       onClick={() => window.open(link, "_blank")}
//       theme={theme}
//     />
//   );
// };

// const ThemeItem: React.FC = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   return (
//     <MagneticIcon
//       icon={<MdOutlineDarkMode size={24} />}
//       onClick={toggleTheme}
//       theme={theme}
//     />
//   );
// };

// const MagneticIcon: React.FC<{
//   icon: React.ReactNode;
//   onClick: () => void;
//   theme: string;
// }> = ({ icon, onClick, theme }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
//     const { left, top, width, height } =
//       e.currentTarget.getBoundingClientRect();
//     x.set((e.clientX - (left + width / 2)) * 0.5);
//     y.set((e.clientY - (top + height / 2)) * 0.5);
//   };

//   return (
//     <a
//       onClick={onClick}
//       className={`cursor-pointer ${
//         theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"
//       }`}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       onMouseMove={handleMouseMove}
//     >
//       <motion.div
//         style={{ x, y }}
//         transition={{ type: "spring", stiffness: 300, damping: 10 }}
//       >
//         {icon}
//       </motion.div>
//     </a>
//   );
// };

// export default Navbar;

























// import { MouseEvent, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, useMotionValue } from "framer-motion";
// import { BiHomeAlt } from "react-icons/bi";
// import { FaRegStar } from "react-icons/fa";
// import { LuSend } from "react-icons/lu";
// import { RiLinkedinLine, RiTwitterXFill } from "react-icons/ri";
// import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
// import {
//   MdOutlineDarkMode,
//   MdOutlineFolder,
//   MdOutlineRateReview,
//   MdOutlineKeyboardDoubleArrowUp,
// } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";
// import { ThemeContext } from "../context/ThemeContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const scrollToSection = (id: string) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//       }, 300);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const bgColor = theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]";
//   const iconColor = theme === "dark" ? "text-[#333333]" : "text-[#fff5ec]";
//   const borderColor = theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]";

//   return (
//     <>
//       {/* Left Sidebar (Desktop only) */}
//       <div className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:ml-36 md:flex flex-col items-center">
//         <div className={`w-0.5 h-[15%] ${borderColor}`} />
//         <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
//           <NavItem icon={<BiHomeAlt size={24} />} onClick={() => scrollToSection("home")} />
//           <NavItem icon={<FaRegStar size={24} />} onClick={() => scrollToSection("skills")} />
//           <NavItem icon={<MdOutlineFolder size={24} />} onClick={() => scrollToSection("projects")} />
//           <NavItem icon={<MdOutlineRateReview size={24} />} onClick={() => scrollToSection("testimonials")} />
//           <NavItem icon={<LuSend size={24} />} onClick={() => scrollToSection("contact")} />
//         </div>
//         <div className={`w-0.5 h-[30%] ${borderColor}`} />
//         <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
//           <ThemeItem />
//         </div>
//         <div className={`w-0.5 h-[5%] ${borderColor}`} />
//       </div>

//       {/* Right Sidebar (Desktop only) */}
//       <div className="hidden md:fixed md:right-0 md:top-0 md:h-screen md:mr-36 md:flex flex-col items-center">
//         <div className={`w-0.5 h-[5%] ${borderColor}`} />
//         <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
//           <NavItem icon={<MdOutlineKeyboardDoubleArrowUp size={24} />} onClick={() => scrollToSection("home")} />
//         </div>
//         <div className={`w-0.5 h-[30%] ${borderColor}`} />
//         <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
//           <SocialItem icon={<TbBrandGithub size={24} />} link="https://github.com/pranjals18/" />
//           <SocialItem icon={<RiLinkedinLine size={24} />} link="https://www.linkedin.com/in/pranjals18/" />
//           <SocialItem icon={<TbBrandInstagram size={24} />} link="https://www.instagram.com/pranjal_s18/" />
//           <SocialItem icon={<HiOutlineMail size={24} />} link="mailto:pranjalshinde.dev@gmail.com" />
//           <SocialItem icon={<RiTwitterXFill size={24} />} link="https://x.com/pranjal_s18" />
//         </div>
//         <div className={`w-0.5 h-[15%] ${borderColor}`} />
//       </div>

//       {/* Mobile Floating Navbar */}
//       <div
//         className={`md:hidden fixed bottom-4 left-4 right-4 ${bgColor} py-3 px-4 rounded-2xl shadow-xl flex justify-around items-center z-50`}
//       >
//         <MobileSocialItem icon={<TbBrandGithub size={28} />} link="https://github.com/pranjals18/" color={iconColor} />
//         <MobileSocialItem icon={<RiLinkedinLine size={28} />} link="https://www.linkedin.com/in/pranjals18/" color={iconColor} />
//         <MobileSocialItem icon={<TbBrandInstagram size={28} />} link="https://www.instagram.com/pranjal_s18/" color={iconColor} />
//         {/* <MobileSocialItem icon={<HiOutlineMail size={28} />} link="mailto:pranjalshinde.dev@gmail.com" color={iconColor} /> */}
//         {/* <MobileSocialItem icon={<RiTwitterXFill size={28} />} link="https://x.com/pranjal_s18" color={iconColor} /> */}
//         <button onClick={toggleTheme} className={iconColor}>
//           <MdOutlineDarkMode size={28} />
//         </button>
//       </div>
//     </>
//   );
// };

// interface NavItemProps {
//   icon: React.ReactNode;
//   onClick: () => void;
// }

// const NavItem: React.FC<NavItemProps> = ({ icon, onClick }) => {
//   return <MagneticIcon icon={icon} onClick={onClick} />;
// };

// interface SocialItemProps {
//   icon: React.ReactNode;
//   link: string;
// }

// const SocialItem: React.FC<SocialItemProps> = ({ icon, link }) => {
//   return <MagneticIcon icon={icon} onClick={() => window.open(link, "_blank")} />;
// };

// const ThemeItem: React.FC = () => {
//   const { toggleTheme } = useContext(ThemeContext);
//   return <MagneticIcon icon={<MdOutlineDarkMode size={24} />} onClick={toggleTheme} />;
// };

// const MagneticIcon: React.FC<{
//   icon: React.ReactNode;
//   onClick: () => void;
// }> = ({ icon, onClick }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     x.set((e.clientX - (left + width / 2)) * 0.5);
//     y.set((e.clientY - (top + height / 2)) * 0.5);
//   };

//   return (
//     <a
//       onClick={onClick}
//       className="cursor-pointer"
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       onMouseMove={handleMouseMove}
//     >
//       <motion.div style={{ x, y }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
//         {icon}
//       </motion.div>
//     </a>
//   );
// };

// const MobileSocialItem: React.FC<{ icon: React.ReactNode; link: string; color: string }> = ({ icon, link, color }) => {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={color}
//     >
//       {icon}
//     </a>
//   );
// };

// export default Navbar;













// import { MouseEvent, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, useMotionValue } from "framer-motion";
// import { BiHomeAlt } from "react-icons/bi";
// import { FaRegStar } from "react-icons/fa";
// import { LuSend } from "react-icons/lu";
// import { RiLinkedinLine, RiTwitterXFill } from "react-icons/ri";
// import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
// import {
//   MdOutlineDarkMode,
//   MdOutlineFolder,
//   MdOutlineRateReview,
//   MdOutlineKeyboardDoubleArrowUp,
// } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";
// import { ThemeContext } from "../context/ThemeContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const scrollToSection = (id: string) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//       }, 300);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const bgColor = theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]";
//   const iconColor = theme === "dark" ? "text-[#333333]" : "text-[#fff5ec]";
//   const borderColor = theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]";

//   return (
//     <>
//       {/* Left Sidebar (Desktop only) */}
//       <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:ml-36 md:ml-8 lg:flex flex-col items-center">
//         <div className={`w-0.5 h-[15%] ${borderColor}`} />
//         <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
//           <NavItem icon={<BiHomeAlt size={24} />} onClick={() => scrollToSection("home")} />
//           <NavItem icon={<FaRegStar size={24} />} onClick={() => scrollToSection("skills")} />
//           <NavItem icon={<MdOutlineFolder size={24} />} onClick={() => scrollToSection("projects")} />
//           <NavItem icon={<MdOutlineRateReview size={24} />} onClick={() => scrollToSection("testimonials")} />
//           <NavItem icon={<LuSend size={24} />} onClick={() => scrollToSection("contact")} />
//         </div>
//         <div className={`w-0.5 h-[30%] ${borderColor}`} />
//         <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
//           <ThemeItem />
//         </div>
//         <div className={`w-0.5 h-[5%] ${borderColor}`} />
//       </div>

//       {/* Right Sidebar (Desktop only) */}
//       <div className="hidden lg:fixed lg:right-0 lg:top-0 lg:h-screen lg:mr-36 md:mr-8 lg:flex flex-col items-center">
//         <div className={`w-0.5 h-[5%] ${borderColor}`} />
//         <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
//           <NavItem icon={<MdOutlineKeyboardDoubleArrowUp size={24} />} onClick={() => scrollToSection("home")} />
//         </div>
//         <div className={`w-0.5 h-[30%] ${borderColor}`} />
//         <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
//           <SocialItem icon={<TbBrandGithub size={24} />} link="https://github.com/pranjals18/" />
//           <SocialItem icon={<RiLinkedinLine size={24} />} link="https://www.linkedin.com/in/pranjals18/" />
//           <SocialItem icon={<TbBrandInstagram size={24} />} link="https://www.instagram.com/pranjal_s18/" />
//           <SocialItem icon={<HiOutlineMail size={24} />} link="mailto:pranjalshinde.dev@gmail.com" />
//           <SocialItem icon={<RiTwitterXFill size={24} />} link="https://x.com/pranjal_s18" />
//         </div>
//         <div className={`w-0.5 h-[15%] ${borderColor}`} />
//       </div>

//       {/* Mobile & Tablet Floating Navbar */}
//       <div
//         className={`lg:hidden fixed bottom-4 left-4 right-4 ${bgColor} py-3 px-4 rounded-2xl shadow-xl flex justify-around items-center z-50`}
//       >
//         <MobileSocialItem icon={<TbBrandGithub size={28} />} link="https://github.com/pranjals18/" color={iconColor} />
//         <MobileSocialItem icon={<RiLinkedinLine size={28} />} link="https://www.linkedin.com/in/pranjals18/" color={iconColor} />
//         <MobileSocialItem icon={<TbBrandInstagram size={28} />} link="https://www.instagram.com/pranjal_s18/" color={iconColor} />
//         {/* <MobileSocialItem icon={<HiOutlineMail size={28} />} link="mailto:pranjalshinde.dev@gmail.com" color={iconColor} /> */}
//         {/* <MobileSocialItem icon={<RiTwitterXFill size={28} />} link="https://x.com/pranjal_s18" color={iconColor} /> */}
//         <button onClick={toggleTheme} className={iconColor}>
//           <MdOutlineDarkMode size={28} />
//         </button>
//       </div>
//     </>
//   );
// };

// interface NavItemProps {
//   icon: React.ReactNode;
//   onClick: () => void;
// }

// const NavItem: React.FC<NavItemProps> = ({ icon, onClick }) => {
//   return <MagneticIcon icon={icon} onClick={onClick} />;
// };

// interface SocialItemProps {
//   icon: React.ReactNode;
//   link: string;
// }

// const SocialItem: React.FC<SocialItemProps> = ({ icon, link }) => {
//   return <MagneticIcon icon={icon} onClick={() => window.open(link, "_blank")} />;
// };

// const ThemeItem: React.FC = () => {
//   const { toggleTheme } = useContext(ThemeContext);
//   return <MagneticIcon icon={<MdOutlineDarkMode size={24} />} onClick={toggleTheme} />;
// };

// const MagneticIcon: React.FC<{
//   icon: React.ReactNode;
//   onClick: () => void;
// }> = ({ icon, onClick }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     x.set((e.clientX - (left + width / 2)) * 0.5);
//     y.set((e.clientY - (top + height / 2)) * 0.5);
//   };

//   return (
//     <a
//       onClick={onClick}
//       className="cursor-pointer"
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       onMouseMove={handleMouseMove}
//     >
//       <motion.div style={{ x, y }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
//         {icon}
//       </motion.div>
//     </a>
//   );
// };

// const MobileSocialItem: React.FC<{ icon: React.ReactNode; link: string; color: string }> = ({ icon, link, color }) => {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={color}
//     >
//       {icon}
//     </a>
//   );
// };

// export default Navbar;












// import { MouseEvent, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { motion, useMotionValue } from "framer-motion";
// import { BiHomeAlt } from "react-icons/bi";
// import { FaRegStar } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { LuSend } from "react-icons/lu";
// import { RiLinkedinLine, RiTwitterXFill } from "react-icons/ri";
// import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
// import {
//   MdOutlineDarkMode,
//   MdOutlineFolder,
//   MdOutlineRateReview,
//   MdOutlineKeyboardDoubleArrowUp,
// } from "react-icons/md";
// import { ThemeContext } from "../context/ThemeContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { theme } = useContext(ThemeContext);

//   const scrollToSection = (id: string) => {
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//       }, 300);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       {/* Desktop Sidebars - Hidden on mobile */}
//       <div className="fixed left-0 top-0 h-screen ml-36 hidden lg:flex flex-col items-center">
//         <div
//           className={`w-0.5 h-[15%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//         <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
//           <NavItem
//             icon={<BiHomeAlt size={24} />}
//             onClick={() => scrollToSection("home")}
//             theme={theme}
//           />
//           <NavItem
//             icon={<FaRegStar size={24} />}
//             onClick={() => scrollToSection("skills")}
//             theme={theme}
//           />
//           <NavItem
//             icon={<MdOutlineFolder size={24} />}
//             onClick={() => scrollToSection("projects")}
//             theme={theme}
//           />
//           <NavItem
//             icon={<MdOutlineRateReview size={24} />}
//             onClick={() => scrollToSection("testimonials")}
//             theme={theme}
//           />
//           <NavItem
//             icon={<LuSend size={24} />}
//             onClick={() => scrollToSection("contact")}
//             theme={theme}
//           />
//         </div>
//         <div
//           className={`w-0.5 h-[30%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//         <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
//           <ThemeItem />
//         </div>
//         <div
//           className={`w-0.5 h-[5%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//       </div>

//       {/* Right Sidebar - Hidden on mobile */}
//       <div className="fixed right-0 top-0 h-screen mr-36 hidden lg:flex flex-col items-center">
//         <div
//           className={`w-0.5 h-[5%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//         <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
//           <NavItem
//             icon={<MdOutlineKeyboardDoubleArrowUp size={24} />}
//             onClick={() => scrollToSection("home")}
//             theme={theme}
//           />
//         </div>
//         <div
//           className={`w-0.5 h-[30%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//         <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
//           <SocialItem
//             icon={<TbBrandGithub size={24} />}
//             link="https://github.com/pranjals18/"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<RiLinkedinLine size={24} />}
//             link="https://www.linkedin.com/in/pranjals18/"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<TbBrandInstagram size={24} />}
//             link="https://www.instagram.com/pranjal_s18/"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<HiOutlineMail size={24} />}
//             link="mailto:pranjalshinde.dev@gmail.com"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<RiTwitterXFill size={24} />}
//             link="https://x.com/pranjal_s18"
//             theme={theme}
//           />
//         </div>
//         <div
//           className={`w-0.5 h-[15%] transition-colors ${
//             theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
//           }`}
//         ></div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="lg:hidden">
//         {/* Floating Mobile Navigation */}
//         <div className={`fixed bottom-4 gap-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-4 px-8 py-2.5 rounded-full shadow-lg ${
//           theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
//         }`}>
//           <SocialItem
//             icon={<TbBrandGithub size={24} />}
//             link="https://github.com/pranjals18/"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<RiLinkedinLine size={24} />}
//             link="https://www.linkedin.com/in/pranjals18/"
//             theme={theme}
//           />
//           <SocialItem
//             icon={<TbBrandInstagram size={24} />}
//             link="https://www.instagram.com/pranjal_s18/"
//             theme={theme}
//           />
//           <ThemeItem />
//         </div>
//       </div>
//     </>
//   );
// };

// interface NavItemProps {
//   icon: React.ReactNode;
//   onClick: () => void;
//   theme: string;
// }

// const NavItem: React.FC<NavItemProps> = ({ icon, onClick, theme }) => {
//   return <MagneticIcon icon={icon} onClick={onClick} theme={theme} />;
// };

// interface SocialItemProps {
//   icon: React.ReactNode;
//   link: string;
//   theme: string;
// }

// const SocialItem: React.FC<SocialItemProps> = ({ icon, link, theme }) => {
//   return (
//     <MagneticIcon
//       icon={icon}
//       onClick={() => window.open(link, "_blank")}
//       theme={theme}
//     />
//   );
// };

// const ThemeItem: React.FC = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   return (
//     <MagneticIcon
//       icon={<MdOutlineDarkMode size={24} />}
//       onClick={toggleTheme}
//       theme={theme}
//     />
//   );
// };

// const MagneticIcon: React.FC<{
//   icon: React.ReactNode;
//   onClick: () => void;
//   theme: string;
// }> = ({ icon, onClick, theme }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
//     const { left, top, width, height } =
//       e.currentTarget.getBoundingClientRect();
//     x.set((e.clientX - (left + width / 2)) * 0.5);
//     y.set((e.clientY - (top + height / 2)) * 0.5);
//   };

//   return (
//     <a
//       onClick={onClick}
//       className={`cursor-pointer ${
//         theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"
//       }`}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//       onMouseMove={handleMouseMove}
//     >
//       <motion.div
//         style={{ x, y }}
//         transition={{ type: "spring", stiffness: 300, damping: 10 }}
//       >
//         {icon}
//       </motion.div>
//     </a>
//   );
// };

// export default Navbar;









import { MouseEvent, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuSend } from "react-icons/lu";
import { RiLinkedinLine, RiTwitterXFill } from "react-icons/ri";
import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
import {
  MdOutlineDarkMode,
  MdOutlineFolder,
  MdOutlineRateReview,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebars - Hidden on mobile and tablets */}
      <div className="fixed left-0 top-0 h-screen ml-36 hidden xl:flex flex-col items-center">
        <div
          className={`w-0.5 h-[15%] transition-colors ${
            theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
          }`}
        ></div>
        <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
          <NavItem
            icon={<BiHomeAlt size={24} />}
            onClick={() => scrollToSection("home")}
            theme={theme}
          />
          <NavItem
            icon={<FaRegStar size={24} />}
            onClick={() => scrollToSection("skills")}
            theme={theme}
          />
          <NavItem
            icon={<MdOutlineFolder size={24} />}
            onClick={() => scrollToSection("projects")}
            theme={theme}
          />
          <NavItem
            icon={<MdOutlineRateReview size={24} />}
            onClick={() => scrollToSection("testimonials")}
            theme={theme}
          />
          <NavItem
            icon={<LuSend size={24} />}
            onClick={() => scrollToSection("contact")}
            theme={theme}
          />
        </div>
        <div
          className={`w-0.5 h-[30%] transition-colors ${
            theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
          }`}
        ></div>
        <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
          <ThemeItem />
        </div>
        <div
          className={`w-0.5 h-[5%] transition-colors ${
            theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
          }`}
        ></div>
      </div>

      {/* Right Sidebar - Hidden on mobile and tablets */}
      <div className="fixed right-0 top-0 h-screen mr-36 hidden xl:flex flex-col items-center">
        <div
          className={`w-0.5 h-[5%] transition-colors ${
            theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
          }`}
        ></div>
        <div className="flex flex-col items-center space-y-10 h-[5%] mt-6">
          <NavItem
            icon={<MdOutlineKeyboardDoubleArrowUp size={24} />}
            onClick={() => scrollToSection("home")}
            theme={theme}
          />
        </div>
        <div
          className={`w-0.5 h-[30%] transition-colors ${
            theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
          }`}
        ></div>
        <div className="flex flex-col items-center space-y-10 h-[40%] mt-6">
          <SocialItem
            icon={<TbBrandGithub size={24} />}
            link="https://github.com/pranjals18/"
            theme={theme}
          />
          <SocialItem
            icon={<RiLinkedinLine size={24} />}
            link="https://www.linkedin.com/in/pranjals18/"
            theme={theme}
          />
          <SocialItem
            icon={<TbBrandInstagram size={24} />}
            link="https://www.instagram.com/pranjal_s18/"
            theme={theme}
          />
          <SocialItem
            icon={<HiOutlineMail size={24} />}
            link="mailto:pranjalshinde.dev@gmail.com"
            theme={theme}
          />
          <SocialItem
            icon={<RiTwitterXFill size={24} />}
            link="https://x.com/pranjal_s18"
            theme={theme}
          />
        </div>
        <div
          className={`w-0.5 h-[15%] transition-colors ${
            theme === "dark" ? "bg-[#fff5ec]" : "bg-[#333333]"
          }`}
        ></div>
      </div>

      {/* Mobile & Tablet Navigation */}
      <div className="xl:hidden">
        <div
          className={`fixed bottom-4 gap-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-4 px-8 py-2.5 rounded-full shadow-lg ${
            theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
          }`}
        >
          <SocialItem
            icon={<TbBrandGithub size={24} />}
            link="https://github.com/pranjals18/"
            theme={theme}
          />
          <SocialItem
            icon={<RiLinkedinLine size={24} />}
            link="https://www.linkedin.com/in/pranjals18/"
            theme={theme}
          />
          <SocialItem
            icon={<TbBrandInstagram size={24} />}
            link="https://www.instagram.com/pranjal_s18/"
            theme={theme}
          />
          <ThemeItem />
        </div>
      </div>
    </>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  onClick: () => void;
  theme: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, onClick, theme }) => {
  return <MagneticIcon icon={icon} onClick={onClick} theme={theme} />;
};

interface SocialItemProps {
  icon: React.ReactNode;
  link: string;
  theme: string;
}

const SocialItem: React.FC<SocialItemProps> = ({ icon, link, theme }) => {
  return (
    <MagneticIcon
      icon={icon}
      onClick={() => window.open(link, "_blank")}
      theme={theme}
    />
  );
};

const ThemeItem: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <MagneticIcon
      icon={<MdOutlineDarkMode size={24} />}
      onClick={toggleTheme}
      theme={theme}
    />
  );
};

const MagneticIcon: React.FC<{
  icon: React.ReactNode;
  onClick: () => void;
  theme: string;
}> = ({ icon, onClick, theme }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (left + width / 2)) * 0.5);
    y.set((e.clientY - (top + height / 2)) * 0.5);
  };

  return (
    <a
      onClick={onClick}
      className={`cursor-pointer ${
        theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"
      }`}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ x, y }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {icon}
      </motion.div>
    </a>
  );
};

export default Navbar;
