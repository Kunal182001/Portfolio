import React, { useState } from 'react'
import logo from '../../assets/Logo.webp'
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {

  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], ["0px", "10px"]);
  const bgOpacity = useTransform(scrollY, [0, 200], ["rgba(20, 28, 39, 0.6)", "rgba(20, 28, 39, 0.9)"]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="navbar" className='w-full flex justify-center    bg-[#09101A] font-[Lato] z-[100] '>
      <motion.div
        style={{
          background: bgOpacity,
          backdropFilter: `blur(${blur})`,
          WebkitBackdropFilter: `blur(${blur})`
        }}
        className='w-full md:w-[85%] h-[80px] fixed top-0 flex justify-between items-center bg-[#141C27] z-[100] '>
        {/* BOX 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Fade in & slide from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-[30%] flex justify-center md:justify-between items-center gap-4"
        >
          {/* Logo Animation */}
          <motion.img
            src={logo}
            className="w-[75px] h-[75px] md:w-[80px] md:h-[80px] rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }} // Start small
            animate={{ scale: 1, opacity: 1 }} // Grow & fade in
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.2, // Slightly grow
              y: [-3, 3, -3], // Floating effect
              transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" },
            }}
          />

          {/* Name Animation */}
          <motion.p
            className="text-2xl w-full font-bold text-[#FFFFFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            whileHover={{
              textShadow: "0px 0px 8px #00bf63", // Glowing effect
              letterSpacing: ["0px", "2px", "0px"], // Stretch effect
              transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
            }}
          >
            KUNAL
          </motion.p>
        </motion.div>
        {/* BOX 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Fade in & slide up
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='w-[40%] hidden md:flex justify-between items-center text-[18px] p-5 text-[#FFFFFF] font-semibold'>
          {/* HOME */}
          <Link to="home" smooth={true} duration={600} className="text-[#FFFFFF] group cursor-pointer ">
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.7s_ease-in-out_forwards]">H</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.8s_ease-in-out_forwards]">O</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.9s_ease-in-out_forwards] ">M</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1s_ease-in-out_forwards]">E</span>
          </Link>
          {/* ABOUT ME */}
          <Link to="about" smooth={true} duration={800} className="text-[#FFFFFF] group cursor-pointer ">
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.7s_ease-in-out_forwards]">A</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.8s_ease-in-out_forwards]">B</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.9s_ease-in-out_forwards]">O</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1s_ease-in-out_forwards]">U</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.1s_ease-in-out_forwards]">T</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.2s_ease-in-out_forwards]"> </span> {/* Space between words */}
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.3s_ease-in-out_forwards]">M</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.4s_ease-in-out_forwards]">E</span>
          </Link >

          {/* PROJECTS */}
          <Link to="projects" smooth={true} duration={1000} className="text-[#FFFFFF] group cursor-pointer ">
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.7s_ease-in-out_forwards]">P</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.8s_ease-in-out_forwards]">R</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.9s_ease-in-out_forwards]">O</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1s_ease-in-out_forwards]">J</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.1s_ease-in-out_forwards]">E</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.2s_ease-in-out_forwards]">C</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.3s_ease-in-out_forwards]">T</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.4s_ease-in-out_forwards]">S</span>
          </Link>

          {/* CONTACT */}
          <Link to="contact" smooth={true} duration={1200} className="text-[#FFFFFF] group cursor-pointer ">
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.7s_ease-in-out_forwards]">C</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.8s_ease-in-out_forwards]">O</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.9s_ease-in-out_forwards]">N</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1s_ease-in-out_forwards]">T</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.1s_ease-in-out_forwards]">A</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.2s_ease-in-out_forwards]">C</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.3s_ease-in-out_forwards]">T</span>
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.4s_ease-in-out_forwards]"> </span> {/* Space between words */}
            <span className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_1.5s_ease-in-out_forwards]"> </span> {/* Additional space */}
          </Link>

        </motion.div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden pr-10">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#00bf63] text-4xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          {/* Mobile Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-[80px] left-0 w-full bg-[#141C27] flex flex-col items-center  md:hidden"
            >
              {["home", "about", "projects", "contact"].map((item, index) => (
                <Link
                  key={index}
                  to={item}
                  smooth={true}
                  duration={600 + index * 200}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#FFFFFF] text-xl cursor-pointer group"
                >
                  {item.toUpperCase().split("").map((char, idx) => (
                    <span
                      key={idx}
                      className="inline-block group-hover:text-[#00bf63] group-hover:animate-[textSlide_0.7s_ease-in-out_forwards]"
                    >
                      {char}
                    </span>
                  ))}
                </Link>
              ))}
            </motion.div>
          )}
        </div>

      </motion.div>
    </div>
  )
}

export default Navbar