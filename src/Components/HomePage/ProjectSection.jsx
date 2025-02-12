import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { motion } from 'framer-motion';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import { LuDownload } from "react-icons/lu";

const ProjectSection = () => {
    return (
        <div className='w-full  bg-[#09101A] flex justify-center pt-[130px]'>
            <div className='w-full md:w-[85%] flex flex-col items-center md:items-start'>
                {/* Projects */}
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className='text-3xl font-[Lato] font-extrabold text-[#00bf63] '>Projects</motion.p>
                <div className='w-full md:w-[55%] flex flex-col items-start mt-5'>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className='text-4xl md:text-5xl text-center md:text-left font-bold text-[#FFFFFF]'>Turning ideas into reality through code</motion.p>
                </div>
                {/* Project 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05, // Slight zoom effect
                        rotateX: 5, // 3D rotation on hover
                        rotateY: 5,
                        boxShadow: "0px 10px 40px rgba(0, 191, 99, 0.5)", // Green glowing shadow
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    className="w-[90%] md:w-full h-[550px] md:h-[300px] border-2 border-[#00bf63] rounded-4xl mt-18 flex flex-col md:flex-row justify-between items-center p-8 relative bg-[#09101A] transition-all"
                >
                    {/* Image Section with Depth Effect */}
                    <motion.img
                        src={project1}
                        alt="Project Screenshot"
                        className="w-full h-[350px] md:w-[30%] md:h-[250px] rounded-2xl mt-10 md:mt-0"
                        whileHover={{
                            scale: 1.1,
                            rotate: 3, // Slight tilt effect
                            filter: "brightness(1.2)", // Brighten the image on hover
                            transition: { duration: 0.3 },
                        }}
                    />

                    {/* Project Details with Floating Effect */}
                    <motion.div
                        className=" w-full md:w-[60%] flex flex-col items-start mt-2 md:mt-0"
                        whileHover={{
                            y: -5, // Float effect when hovering over card
                            transition: { duration: 0.3, ease: "easeOut" },
                        }}
                    >
                        <p className="text-xl md:text-2xl font-extrabold text-[#00bf63]">Full Stack E-commerce Website</p>
                        <p className="text-[14px] md:text-[16px] text-[#FFFFFF] opacity-50 break-words mt-3">
                            Developed a robust full-stack e-commerce platform inspired by Amazon & Flipkart. Includes user authentication, product browsing, wishlist, cart, payments, and admin panel.
                        </p>

                        {/* Tech Stack Badges with Flip Animation */}
                        <div className="w-full grid grid-cols-2 md:grid-cols-5 text-[#FFFFFF] mt-5 gap-4">
                            {["REACT", "JAVASCRIPT", "TAILWINDCSS", "NODE.js", "MONGODB"].map((tech, index) => (
                                <motion.p
                                    key={index}
                                    className="w-[120px] md:w-[100px] h-[40px] border-[2px] border-[#00bf63] rounded-2xl flex justify-center items-center"
                                    whileHover={{
                                        rotateX: 360, // Flips on hover
                                        backgroundColor: "#00bf63",
                                        color: "#09101A",
                                        transition: { duration: 0.1 },
                                    }}
                                >
                                    {tech}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Icons (GitHub & Live Link) with Hover Pulse */}
                    <div className="w-[100px] h-[60px] absolute top-1 right-5 flex justify-center items-center gap-4">
                        <motion.a href='https://full-stack-ecommerce-project-six.vercel.app/'
                            whileHover={{ scale: 1.3, y: -3, transition: { duration: 0.3 } }} 
                        >
                            <FaLink className="w-[40px] h-[40px] cursor-pointer text-[#00bf63]" />
                        </motion.a>
                        <motion.a href='https://github.com/Kunal182001/FullStack_Ecommerce_Project'
                            whileHover={{ scale: 1.3, y: -3, transition: { duration: 0.3 } }} 
                        >
                            <FaGithub className="w-[40px] h-[40px] cursor-pointer text-[#00bf63]" />
                        </motion.a>
                    </div>
                </motion.div>
                {/* Project 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05, // Slight zoom effect
                        rotateX: 5, // 3D rotation on hover
                        rotateY: 5,
                        boxShadow: "0px 10px 40px rgba(0, 191, 99, 0.5)", // Green glowing shadow
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    className="w-[90%] md:w-full h-[550px] md:h-[300px] border-2 border-[#00bf63] rounded-4xl mt-18 flex flex-col md:flex-row justify-between items-center p-8 relative bg-[#09101A] transition-all"
                >
                    {/* Image Section with Depth Effect */}
                    <motion.img
                        src={project2}
                        alt="Project Screenshot"
                        className="w-full h-[350px] md:w-[30%] md:h-[250px] rounded-2xl mt-10 md:mt-0"
                        whileHover={{
                            scale: 1.1,
                            rotate: 3, // Slight tilt effect
                            filter: "brightness(1.2)", // Brighten the image on hover
                            transition: { duration: 0.3 },
                        }}
                    />

                    {/* Project Details with Floating Effect */}
                    <motion.div
                        className="w-full md:w-[60%] flex flex-col items-start mt-2 md:mt-0"
                        whileHover={{
                            y: -5, // Float effect when hovering over card
                            transition: { duration: 0.3, ease: "easeOut" },
                        }}
                    >
                        <p className="text-xl md:text-2xl font-extrabold text-[#00bf63]">Dark Escape</p>
                        <p className="text-[14px] md:text-[16px] text-[#FFFFFF] opacity-50 break-words mt-3">
                            Dark Escape is a thrilling stealth and parkour game where players solve puzzles,
                         evade enemies, and uncover hidden documents. Featuring action-packed gun sequences
                          and strategic stealth mechanics,
                         it offers an immersive challenge. Optimized for Windows 7 and above, 
                         it delivers an unforgettable gaming experience.
                        </p>

                        {/* Tech Stack Badges with Flip Animation */}
                        <div className="w-full flex justify-start items-center text-[#FFFFFF] mt-5 gap-4">
                            {["C#","UNITY"].map((tech, index) => (
                                <motion.p
                                    key={index}
                                    className="w-[100px] h-[40px] border-[2px] border-[#00bf63] rounded-2xl flex justify-center items-center"
                                    whileHover={{
                                        rotateX: 360, // Flips on hover
                                        backgroundColor: "#00bf63",
                                        color: "#09101A",
                                        transition: { duration: 0.1 },
                                    }}
                                >
                                    {tech}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Icons (GitHub & Live Link) with Hover Pulse */}
                    <div className="w-[100px] h-[60px] absolute top-1 right-5 flex justify-center items-center gap-4">
                        <motion.a href='https://drive.google.com/drive/folders/1bzTvqw30tpm1FlpTF14RfT-_Hfsj6tCF?usp=sharing'
                            whileHover={{ scale: 1.3, y: -3, transition: { duration: 0.3 } }} 
                        >
                            <LuDownload className="w-[40px] h-[40px] cursor-pointer text-[#00bf63]" />
                        </motion.a>
                        
                    </div>
                </motion.div>
                {/* Project 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.05, 
                        rotateX: 5, 
                        rotateY: 5,
                        boxShadow: "0px 10px 40px rgba(0, 191, 99, 0.5)", 
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    className="w-[90%] md:w-full h-[550px] md:h-[300px] border-2 border-[#00bf63] rounded-4xl mt-18 flex flex-col md:flex-row justify-between items-center p-8 relative bg-[#09101A] transition-all"
                >
                    {/* Image Section with Depth Effect */}
                    <motion.img
                        src={project3}
                        alt="Project Screenshot"
                        className="w-full h-[350px] md:w-[30%] md:h-[250px] rounded-2xl mt-10 md:mt-0"
                        whileHover={{
                            scale: 1.1,
                            rotate: 3, 
                            filter: "brightness(1.2)", 
                            transition: { duration: 0.3 },
                        }}
                    />

                    {/* Project Details with Floating Effect */}
                    <motion.div
                        className="w-full md:w-[60%] flex flex-col items-start"
                        whileHover={{
                            y: -5, 
                            transition: { duration: 0.3, ease: "easeOut" },
                        }}
                    >
                        <p className="text-xl md:text-2xl font-extrabold text-[#00bf63]">Paste App</p>
                        <p className="text-[14px] md:text-[16px] text-[#FFFFFF] opacity-50 break-words mt-3">
                        Paste App is a simple and efficient tool for quickly saving and sharing text snippets.
                         It provides a clean UI for creating, storing, and accessing pastes with ease. 
                        Built with modern web technologies, it ensures a smooth and responsive experience.
                        </p>

                        {/* Tech Stack Badges with Flip Animation */}
                        <div className="w-full grid grid-cols-2 md:grid-cols-5 text-[#FFFFFF] mt-5 gap-4">
                            {["REACT", "JAVASCRIPT", "TAILWINDCSS"].map((tech, index) => (
                                <motion.p
                                    key={index}
                                    className="w-[120px] md:w-[100px] h-[40px] border-[2px] border-[#00bf63] rounded-2xl flex justify-center items-center"
                                    whileHover={{
                                        rotateX: 360, 
                                        backgroundColor: "#00bf63",
                                        color: "#09101A",
                                        transition: { duration: 0.1 },
                                    }}
                                >
                                    {tech}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Icons (GitHub & Live Link) with Hover Pulse */}
                    <div className="w-[100px] h-[60px] absolute top-1 right-5 flex justify-center items-center gap-4">
                        <motion.a href='https://paste-app-drab-pi.vercel.app/'
                            whileHover={{ scale: 1.3, y: -3, transition: { duration: 0.3 } }} 
                        >
                            <FaLink className="w-[40px] h-[40px] cursor-pointer text-[#00bf63]" />
                        </motion.a>
                        <motion.a href='https://github.com/Kunal182001/Paste-App'
                            whileHover={{ scale: 1.3, y: -3, transition: { duration: 0.3 } }} 
                        >
                            <FaGithub className="w-[40px] h-[40px] cursor-pointer text-[#00bf63]" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default ProjectSection;