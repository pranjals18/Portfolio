// import { MdArrowForward } from "react-icons/md";
// import pizzamania_img from "../../assets/pizzamania.png";
// import alumnet_img from "../../assets/alumnet.jpg";
// import cgc_image from "../../assets/CGC.png";
// import crypinfo_img from "../../assets/crypinfo.png";


// export default function FeaturedProjects() {
//   const projects = [
//     {
//       title: "Career Guidance Cell",
//       image: cgc_image,
//       description: "Next.js, Node.js, MongoDB, JWT, TypeScript",
//       tags: [
//         {
//           name: "Github",
//           link: "https://github.com/pranjals18/CGC-Placements",
//         },
//         { name: "Visit", link: "https://cgcstudents.vercel.app" },
//       ],
//     },
//     {
//       title: "Pizza Mania",
//       image: pizzamania_img,
//       description: "A stunning deep-sea capture of the ocean.",
//       tags: [
//         {
//           name: "Github",
//           link: "https://github.com/PranjalShinde18/Pizza-Mania",
//         },
//         { name: "Visit", link: "https://pizzamania1809.vercel.app/" },
//       ],
//     },
//     {
//       title: "CrypInfo",
//       image: crypinfo_img,
//       description: "The beauty of snowy mountain landscapes.",
//       tags: [
//         {
//           name: "Github",
//           link: "https://github.com/PranjalShinde18/CrypInfo-Crypto-Currency-Information-Application",
//         },
//         { name: "Visit", link: "https://cripinfo1809.vercel.app/" },
//       ],
//     },
//     {
//       title: "Alumnet",
//       image: alumnet_img,
//       description: "Coastal cliffs meeting the deep blue sea.",
//       tags: [
//         { name: "Github", link: "https://github.com/PranjalShinde18/Alumni_Net-App" },
//         // { name: "Visit", link: "#" },
//       ],
//     },
//   ];


//   return (
//     <section id="projects" className="mx-12 pt-24 text-center">
//       <h2 className="text-4xl font-semibold mb-12">Projects</h2>
//       <div className="grid grid-cols-2 gap-6 justify-center">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="relative w-full rounded-xl overflow-hidden shadow-lg"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-58 object-cover"
//             />
//             <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-end p-4 text-[#fff5ec]">
//               <h3 className="text-lg font-semibold">{project.title}</h3>
//               <p className="text-sm">{project.description}</p>
//               <div className="flex gap-3 mt-2">
//                 {project.tags.map((tag, i) => (
//                   <a
//                     key={i}
//                     href={tag.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-1 bg-[#333333] hover:bg-black px-4 p-3 text-xs rounded-xl transition-transform hover:scale-103"
//                   >
//                     {tag.name} <MdArrowForward size={16} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* All Projects Button */}
//       {/* <div className="flex justify-end mt-6">
//         <a
//           className="flex justify-center md:justify-center text-sm items-center gap-3 cursor-pointer p-2 pr-0 rounded-xl hover:scale-103 mx-auto md:mx-0 transition-transform"
//           target="_blank"
//           rel="noreferrer"
//           href="allprojects"
//         >
//           View all projects <MdArrowForward size={18} />
//         </a>
//       </div> */}
//     </section>
//   );
// }































import { MdArrowForward } from "react-icons/md";
import pizzamania_img from "../../assets/pizzamania.png";
import alumnet_img from "../../assets/alumnet.jpg";
import cgc_image from "../../assets/CGC.png";
import crypinfo_img from "../../assets/crypinfo.png";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Career Guidance Cell",
      image: cgc_image,
      description: "Next.js, Node.js, MongoDB, JWT, TypeScript",
      tags: [
        {
          name: "Github",
          link: "https://github.com/pranjals18/CGC-Placements",
        },
        { name: "Visit", link: "https://cgcstudents.vercel.app" },
      ],
    },
    {
      title: "Pizza Mania",
      image: pizzamania_img,
      description: "A stunning deep-sea capture of the ocean.",
      tags: [
        {
          name: "Github",
          link: "https://github.com/PranjalShinde18/Pizza-Mania",
        },
        { name: "Visit", link: "https://pizzamania1809.vercel.app/" },
      ],
    },
    {
      title: "CrypInfo",
      image: crypinfo_img,
      description: "The beauty of snowy mountain landscapes.",
      tags: [
        {
          name: "Github",
          link: "https://github.com/PranjalShinde18/CrypInfo-Crypto-Currency-Information-Application",
        },
        { name: "Visit", link: "https://cripinfo1809.vercel.app/" },
      ],
    },
    {
      title: "Alumnet",
      image: alumnet_img,
      description: "Coastal cliffs meeting the deep blue sea.",
      tags: [
        {
          name: "Github",
          link: "https://github.com/PranjalShinde18/Alumni_Net-App",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="pt-24 px-6 sm:px-10 md:px-16 xl:px-24 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto mb-30">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-end p-4 text-[#fff5ec]">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex gap-3 mt-2 flex-wrap">
                {project.tags.map((tag, i) => (
                  <a
                    key={i}
                    href={tag.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 bg-[#333333] hover:bg-black px-4 py-2 text-xs rounded-xl transition-transform hover:scale-105"
                  >
                    {tag.name} <MdArrowForward size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional View All Button */}
      {/* 
      <div className="flex justify-end mt-6">
        <a
          className="flex justify-center md:justify-end text-sm items-center gap-3 cursor-pointer p-2 pr-0 rounded-xl hover:scale-105 transition-transform"
          target="_blank"
          rel="noreferrer"
          href="allprojects"
        >
          View all projects <MdArrowForward size={18} />
        </a>
      </div>
      */}
    </section>
  );
}
