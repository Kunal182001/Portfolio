import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { motion } from 'framer-motion';
import comlogo from '../../assets/companylogo.jpg';
import { LuDownload } from "react-icons/lu";

const ExperienceSection = () => {
    return (
        <div className='w-full  bg-[#09101A] flex justify-center pt-[130px]'>
            <div className='w-full md:w-[85%] flex flex-col items-center md:items-start'>
                {/* EXPERIENCE */}
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className='text-3xl font-[Lato] font-extrabold text-[#00bf63] '>Work Experience</motion.p>
                <div className='w-full md:w-[55%] flex flex-col items-start mt-5'>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className='text-4xl md:text-5xl text-center md:text-left font-bold text-[#FFFFFF]'>Where skills meet real-world impact</motion.p>
                </div>
                {/* KT IT SOLUTION PVT  */}
                <motion.div
                    initial={{ opacity: 0, y: 80, rotateX: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.6, ease: "easeOut" },
                    }}
                    className="w-[90%] md:w-full h-[550px] md:h-[320px]  mt-18 flex flex-col md:flex-row justify-between items-center p-8 relative bg-[#09101A]/70 backdrop-blur-md transition-all"
                >
                    {/* Image with Bobbing and Glow */}
                    <motion.img
                        src={comlogo}
                        alt="Company logo"
                        className="w-full h-[350px] md:w-[30%] md:h-[250px] rounded-2xl mt-10 md:mt-0 shadow-lg"


                        whileHover={{
                            scale: 1.06,
                            rotate: 2,
                            filter: "brightness(1.15)",
                            boxShadow: "0 10px 30px rgba(0, 191, 99, 0.4)",
                            transition: { duration: 0.4 },
                        }}
                        animate={{
                            rotate: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Details Section */}
                    <motion.div
                        className="w-full md:w-[60%] flex flex-col items-start mt-2 md:mt-0"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                    >
                        <p className="text-xl md:text-2xl font-extrabold text-[#00bf63]">Frontend Developer — KV IT Solutions Pvt. Ltd.</p>
                        <p className="text-[18px] md:text-xl font-bold text-[#00bf63]">July 2024 – Present</p>

                        <p className="text-[18px] md:text-xl font-bold text-[#00bf63] mt-2">Key Responsibilities:</p>

                        <ul className="list-disc text-[14px] md:text-[16px] text-[#FFFFFF] opacity-70 break-words mt-3 md:ml-7 space-y-1">
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.3 }}>Built responsive, user-friendly interfaces using React.js, JavaScript, and Tailwind CSS</motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.3 }}>Integrated RESTful APIs and managed dynamic data rendering efficiently</motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.3 }}>Resolved bugs, optimized performance, and implemented new features</motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.3 }}>Collaborated closely with designers to develop clean and functional UI components</motion.li>
                            <motion.li initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.4, duration: 0.3 }}>Used Git for version control and actively participated in code reviews</motion.li>
                        </ul>

                        {/* Tech Stack */}
                        <p className="text-[18px] md:text-xl font-bold text-[#00bf63] mt-4">Tech Stack</p>
                        <div className="w-full grid grid-cols-2 md:grid-cols-5 text-[#FFFFFF] mt-4 gap-4">
                            {["HTML5", "CSS3", "JAVASCRIPT", "REACT", "TAILWINDCSS", "GIT", "REST API"].map((tech, index) => (
                                <motion.p
                                    key={index}
                                    className="w-[120px] md:w-[100px] h-[40px] border border-[#00bf63] rounded-2xl flex justify-center items-center hover:cursor-pointer transition-all"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.6 + index * 0.1, duration: 0.3, ease: "easeOut" }}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#00bf63",
                                        color: "#09101A",
                                        boxShadow: "0 0 15px rgba(0,191,99,0.6)",
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    {tech}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    )
}

export default ExperienceSection