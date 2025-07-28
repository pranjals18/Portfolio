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
//       {/* Desktop Sidebars - Hidden on mobile and tablets */}
//       <div className="fixed left-0 top-0 h-screen ml-36 hidden xl:flex flex-col items-center">
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

//       {/* Right Sidebar - Hidden on mobile and tablets */}
//       <div className="fixed right-0 top-0 h-screen mr-36 hidden xl:flex flex-col items-center">
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

//       {/* Mobile & Tablet Navigation */}
//       <div className="xl:hidden">
//         <div
//           className={`fixed bottom-4 gap-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-4 px-8 py-2.5 rounded-full shadow-lg ${
//             theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
//           }`}
//         >
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
import { motion, useMotionValue } from "framer-motion";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiLinkedinLine, RiTwitterXFill } from "react-icons/ri";
import { TbBrandGithub, TbBrandInstagram } from "react-icons/tb";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
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
      <SocialItem
        icon={<RiTwitterXFill size={24} />}
        link="https://x.com/pranjal_s18"
        theme={theme}
      />
      <ThemeItem />
    </div>
  );
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

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (left + width / 2)) * 0.5);
    y.set((e.clientY - (top + height / 2)) * 0.5);
  };

  return (
    <button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`cursor-pointer ${
        theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"
      }`}
      aria-label="social-icon"
    >
      <motion.div
        style={{ x, y }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {icon}
      </motion.div>
    </button>
  );
};

export default Navbar;
