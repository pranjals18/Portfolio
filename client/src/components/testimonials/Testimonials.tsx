// import { useEffect, useRef, useState } from "react";
// import { MdArrowBack, MdArrowForward } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// // Define testimonial type
// interface Testimonial {
//   _id: string;
//   name: string;
//   text: string;
//   approved: boolean;
// }

// const images = [
//   "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg",
//   "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg",
//   "https://images.pexels.com/photos/3335697/pexels-photo-3335697.jpeg",
//   "https://images.pexels.com/photos/5827821/pexels-photo-5827821.jpeg",
// ];

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(true);
//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://portfolio-o8ve.onrender.com/testimonials")
//       .then((res) => res.json())
//       .then((data: Testimonial[]) => {
//         const approvedTestimonials = data.filter((t) => t.approved);
//         setTestimonials(approvedTestimonials);
//       })
//       .catch((err) => console.error("Error fetching testimonials:", err));
//   }, []);

//   useEffect(() => {
//     if (!scrollRef.current || testimonials.length === 0) return;

//     const scrollContainer = scrollRef.current;
//     let scrollSpeed = 1;

//     const scroll = () => {
//       if (isHovered || !canScrollNext) return;

//       if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
//         setCanScrollNext(false); // Stop auto-scrolling at the end
//         return;
//       }

//       scrollContainer.scrollLeft += scrollSpeed;
//     };

//     const interval = setInterval(scroll, 30);
//     return () => clearInterval(interval);
//   }, [isHovered, testimonials, canScrollNext]);

//   const updateButtonState = () => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

//     setCanScrollPrev(scrollLeft > 0);
//     setCanScrollNext(scrollLeft + clientWidth < scrollWidth);
//   };

//   const scrollNext = () => {
//     if (!scrollRef.current) return;
//     const cardWidth = scrollRef.current.children[0]?.clientWidth || 250;
//     scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
//     setTimeout(updateButtonState, 200);
//   };

//   const scrollPrev = () => {
//     if (!scrollRef.current) return;
//     const cardWidth = scrollRef.current.children[0]?.clientWidth || 250;
//     scrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
//     setTimeout(updateButtonState, 200);
//   };

//   return (
//     <div className="min-h-screen pt-24 mb-8 flex flex-col items-center mx-12 relative">
//       <h2 className="text-4xl font-semibold mb-12">Testimonials</h2>

//       {/* Testimonial Cards */}
//       <div
//         ref={scrollRef}
//         className="flex space-x-4 overflow-x-auto px-4 w-full max-w-6xl scrollbar-hide relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onScroll={updateButtonState}
//         style={{ display: "flex", whiteSpace: "nowrap", overflow: "hidden" }}
//       >
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={testimonial._id}
//             className="relative w-68 h-96 rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
//             style={{
//               backgroundImage: `url(${images[index % images.length]})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 text-[#fff5ec]">
//               <p className="text-md italic h-32 w-full break-words whitespace-normal">
//                 "{testimonial.text}"
//               </p>
//               <h3 className="flex mt-2 items-end justify-end font-light text-lg">
//                 - {testimonial.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Left & Right Buttons */}
//       <div 
//         className="absolute inset-y-1/2 left-4 right-4 flex justify-between items-center z-10"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Left Button */}
//         <button
//           className={`bg-[#fff5ec]/20 text-[#fff5ec] p-3 rounded-full hover:bg-[#fff5ec] hover:text-[#333333] transition shadow-lg 
//             ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
//           onClick={scrollPrev}
//           disabled={!canScrollPrev}
//         >
//           <MdArrowBack size={24} />
//         </button>

//         {/* Right Button */}
//         <button
//           className={`bg-[#fff5ec]/20 text-[#fff5ec] p-3 rounded-full hover:bg-[#fff5ec] hover:text-[#333333] transition shadow-lg 
//             ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""}`}
//           onClick={scrollNext}
//           disabled={!canScrollNext}
//         >
//           <MdArrowForward size={24} />
//         </button>
//       </div>

//       {/* Give Feedback Button */}
//       <div className="flex w-full justify-end mt-6">
//         <button
//           onClick={() => navigate("/feedback")}
//           className="flex justify-center md:justify-center text-sm items-center gap-3 cursor-pointer p-2 pr-0 rounded-xl hover:scale-103 mx-auto md:mx-0 transition-transform"
//         >
//           Give Feedback <MdArrowForward size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;












































// import { useEffect, useRef, useState } from "react";
// import { MdArrowBack, MdArrowForward } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// // Define testimonial type
// interface Testimonial {
//   _id: string;
//   name: string;
//   text: string;
//   approved: boolean;
// }

// const images = [
//   "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg",
//   "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg",
//   "https://images.pexels.com/photos/3335697/pexels-photo-3335697.jpeg",
//   "https://images.pexels.com/photos/5827821/pexels-photo-5827821.jpeg",
// ];

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(true);
//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://portfolio-o8ve.onrender.com/testimonials")
//       .then((res) => res.json())
//       .then((data: Testimonial[]) => {
//         const approvedTestimonials = data.filter((t) => t.approved);
//         setTestimonials(approvedTestimonials);
//       })
//       .catch((err) => console.error("Error fetching testimonials:", err));
//   }, []);

//   useEffect(() => {
//     if (!scrollRef.current || testimonials.length === 0) return;

//     const scrollContainer = scrollRef.current;
//     let scrollSpeed = 1;

//     const scroll = () => {
//       if (isHovered || !canScrollNext) return;

//       if (
//         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
//         scrollContainer.scrollWidth - 1
//       ) {
//         setCanScrollNext(false);
//         return;
//       }

//       scrollContainer.scrollLeft += scrollSpeed;
//     };

//     const interval = setInterval(scroll, 30);
//     return () => clearInterval(interval);
//   }, [isHovered, testimonials, canScrollNext]);

//   const updateButtonState = () => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

//     setCanScrollPrev(scrollLeft > 0);
//     setCanScrollNext(scrollLeft + clientWidth < scrollWidth);
//   };

//   const scrollNext = () => {
//     if (!scrollRef.current) return;
//     const cardWidth = scrollRef.current.children[0]?.clientWidth || 250;
//     scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
//     setTimeout(updateButtonState, 200);
//   };

//   const scrollPrev = () => {
//     if (!scrollRef.current) return;
//     const cardWidth = scrollRef.current.children[0]?.clientWidth || 250;
//     scrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
//     setTimeout(updateButtonState, 200);
//   };

//   return (
//     <div className="min-h-screen pt-24 mb-8 flex flex-col items-center px-4 sm:px-8 lg:px-16 relative">
//       <h2 className="text-4xl font-semibold mb-12 text-center">Testimonials</h2>

//       {/* Testimonial Cards */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-x-auto w-full max-w-6xl px-2 hide-scrollbar"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onScroll={updateButtonState}
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={testimonial._id}
//             className="relative min-w-[240px] sm:min-w-[280px] md:min-w-[280px] h-80 sm:h-96 rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
//             style={{
//               backgroundImage: `url(${images[index % images.length]})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 text-[#fff5ec]">
//               <p className="text-md italic h-32 w-full break-words whitespace-normal overflow-y-auto hide-scrollbar">
//                 "{testimonial.text}"
//               </p>
//               <h3 className="flex mt-2 items-end justify-end font-light text-lg">
//                 - {testimonial.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div
//         className="absolute top-1/2 left-0 right-0 flex justify-between items-center z-10 px-8 sm:px-8 lg:px-16 -translate-y-1/2"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button
//           className={`bg-[#fff5ec]/20 text-[#fff5ec] p-2.5 mx-2 rounded-full hover:bg-[#fff5ec] hover:text-[#333333] transition shadow-lg 
//             ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
//           onClick={scrollPrev}
//           disabled={!canScrollPrev}
//         >
//           <MdArrowBack size={24} />
//         </button>

//         <button
//           className={`bg-[#fff5ec]/20 text-[#fff5ec] p-2.5 mx-2 rounded-full hover:bg-[#fff5ec] hover:text-[#333333] transition shadow-lg 
//             ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""}`}
//           onClick={scrollNext}
//           disabled={!canScrollNext}
//         >
//           <MdArrowForward size={24} />
//         </button>
//       </div>

//       {/* Give Feedback Button */}
//       <div className="flex w-full justify-end mt-6">
//         <button
//           onClick={() => navigate("/feedback")}
//           className="flex justify-center text-sm items-center gap-3 cursor-pointer p-2 pr-0 rounded-xl hover:scale-103 transition-transform text-[#fff5ec] hover:text-[#333333] hover:bg-[#fff5ec]"
//         >
//           Give Feedback <MdArrowForward size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;



























// import { useEffect, useRef, useState } from "react";
// import { MdArrowBack, MdArrowForward } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

// // Define testimonial type
// interface Testimonial {
//   _id: string;
//   name: string;
//   text: string;
//   approved: boolean;
// }

// const images = [
//   "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg",
//   "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg",
//   "https://images.pexels.com/photos/3335697/pexels-photo-3335697.jpeg",
//   "https://images.pexels.com/photos/5827821/pexels-photo-5827821.jpeg",
// ];

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(true);
//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://portfolio-o8ve.onrender.com/testimonials")
//       .then((res) => res.json())
//       .then((data: Testimonial[]) => {
//         const approvedTestimonials = data.filter((t) => t.approved);
//         setTestimonials(approvedTestimonials);
//       })
//       .catch((err) => console.error("Error fetching testimonials:", err));
//   }, []);

//   useEffect(() => {
//     if (!scrollRef.current || testimonials.length === 0) return;

//     const scrollContainer = scrollRef.current;
//     let scrollSpeed = 1;

//     const scroll = () => {
//       if (isHovered || !canScrollNext) return;

//       if (
//         scrollContainer.scrollLeft + scrollContainer.clientWidth >=
//         scrollContainer.scrollWidth - 1
//       ) {
//         setCanScrollNext(false);
//         return;
//       }

//       scrollContainer.scrollLeft += scrollSpeed;
//     };

//     const interval = setInterval(scroll, 30);
//     return () => clearInterval(interval);
//   }, [isHovered, testimonials, canScrollNext]);

//   const updateButtonState = () => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

//     setCanScrollPrev(scrollLeft > 0);
//     setCanScrollNext(scrollLeft + clientWidth < scrollWidth);
//   };

//   const scrollNext = () => {
//     if (!scrollRef.current) return;
//     const cardWidth = scrollRef.current.children[0]?.clientWidth || 250;
//     scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
//     setTimeout(updateButtonState, 200);
//   };

//   const scrollPrev = () => {
//     if (!scrollRef.current) return;
//     const cardWidth = scrollRef.current.children[0]?.clientWidth || 250;
//     scrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
//     setTimeout(updateButtonState, 200);
//   };

//   return (
//     <div className="min-h-screen pt-24 mb-8 flex flex-col items-center px-4 sm:px-8 lg:px-16 relative">
//       <h2 className="text-4xl font-semibold mb-12 text-center">Testimonials</h2>

//       {/* Testimonial Cards */}
//       <div
//         ref={scrollRef}
//         className="flex gap-4 overflow-x-auto w-full max-w-6xl px-2 hide-scrollbar"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onScroll={updateButtonState}
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={testimonial._id}
//             className="relative min-w-[240px] sm:min-w-[280px] md:min-w-[280px] h-80 sm:h-96 rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
//             style={{
//               backgroundImage: `url(${images[index % images.length]})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 text-[#fff5ec]">
//               <p className="text-md italic h-32 w-full break-words whitespace-normal overflow-y-auto hide-scrollbar">
//                 "{testimonial.text}"
//               </p>
//               <h3 className="flex mt-2 items-end justify-end font-light text-lg">
//                 - {testimonial.name}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows - Hidden on mobile/tablet */}
//       <div
//         className="absolute top-1/2 left-0 right-0 hidden lg:flex justify-between items-center z-10 px-8 lg:px-16 -translate-y-1/2"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <button
//           className={`bg-[#fff5ec]/20 text-[#fff5ec] p-2.5 mx-2 rounded-full hover:bg-[#fff5ec] hover:text-[#333333] transition shadow-lg 
//             ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
//           onClick={scrollPrev}
//           disabled={!canScrollPrev}
//         >
//           <MdArrowBack size={24} />
//         </button>

//         <button
//           className={`bg-[#fff5ec]/20 text-[#fff5ec] p-2.5 mx-2 rounded-full hover:bg-[#fff5ec] hover:text-[#333333] transition shadow-lg 
//             ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""}`}
//           onClick={scrollNext}
//           disabled={!canScrollNext}
//         >
//           <MdArrowForward size={24} />
//         </button>
//       </div>

//       {/* Give Feedback Button */}
//       <div className="flex w-full justify-end mt-6">
//         <button
//           onClick={() => navigate("/feedback")}
//           className="flex justify-center text-sm items-center gap-3 cursor-pointer p-2 pr-0 rounded-xl hover:scale-103 transition-transform text-[#fff5ec] hover:text-[#333333] hover:bg-[#fff5ec]"
//         >
//           Give Feedback <MdArrowForward size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;






















import { useContext, useEffect, useRef, useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

// Define testimonial type
interface Testimonial {
  _id: string;
  name: string;
  text: string;
  approved: boolean;
}

const images = [
  "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg",
  "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg",
  "https://images.pexels.com/photos/3335697/pexels-photo-3335697.jpeg",
  "https://images.pexels.com/photos/5827821/pexels-photo-5827821.jpeg",
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://portfolio-o8ve.onrender.com/testimonials")
      .then((res) => res.json())
      .then((data: Testimonial[]) => {
        const approvedTestimonials = data.filter((t) => t.approved);
        setTestimonials(approvedTestimonials);
      })
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  useEffect(() => {
    if (!scrollRef.current || testimonials.length === 0) return;

    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1;

    const scroll = () => {
      if (isHovered || !canScrollNext) return;

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 1
      ) {
        setCanScrollNext(false);
        return;
      }

      scrollContainer.scrollLeft += scrollSpeed;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isHovered, testimonials, canScrollNext]);

  const updateButtonState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

    setCanScrollPrev(scrollLeft > 0);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 250;
    scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
    setTimeout(updateButtonState, 200);
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 250;
    scrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
    setTimeout(updateButtonState, 200);
  };

  return (
    <div className="min-h-screen pt-24 mb-8 flex flex-col items-center px-4 sm:px-8 lg:px-16 relative">
      <h2 className="text-4xl font-semibold mb-12 text-center">Testimonials</h2>

      {/* Testimonial Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto w-full max-w-6xl px-2 hide-scrollbar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onScroll={updateButtonState}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial._id}
            className="relative min-w-[240px] sm:min-w-[280px] md:min-w-[280px] h-80 sm:h-96 rounded-xl overflow-hidden flex-shrink-0 shadow-lg"
            style={{
              backgroundImage: `url(${images[index % images.length]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 text-[#fff5ec]">
              <p className="text-md italic h-32 w-full break-words whitespace-normal overflow-y-auto hide-scrollbar">
                "{testimonial.text}"
              </p>
              <h3 className="flex mt-2 items-end justify-end font-light text-lg">
                - {testimonial.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows — Hidden on all mobile and tablet screens */}
      <div
        className="absolute top-1/2 left-0 right-0 hidden lg:flex justify-between items-center z-10 px-8 lg:px-16 -translate-y-1/2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={`bg-[#fff5ec]/20 text-[#fff5ec] p-2.5 mx-2 rounded-full hover:bg-[#fff5ec] hover:text-[#333333] transition shadow-lg 
            ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <MdArrowBack size={24} />
        </button>

        <button
          className={`bg-[#fff5ec]/20 text-[#fff5ec] p-2.5 mx-2 rounded-full hover:bg-[#fff5ec] hover:text-[#333333] transition shadow-lg 
            ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <MdArrowForward size={24} />
        </button>
      </div>

      {/* Give Feedback Button */}
      <div className="flex w-full justify-end mt-6">
        <button
          onClick={() => navigate("/feedback")}
          className={`flex justify-center text-sm items-center gap-3 cursor-pointer p-2 pr-0 rounded-xl hover:scale-103 transition-transform ${theme === "dark" ? "text-[#fff5ec]" : "text-[#333333]"} `}
        >
          Give Feedback <MdArrowForward size={18} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
