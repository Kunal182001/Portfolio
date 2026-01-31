import React, { useEffect, useState } from 'react'
import { LuDownload } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { motion } from 'framer-motion';

const HomeMidSection = () => {
    const words = ["FRONTEND DEVELOPER", "SOFTWARE DEVELOPER", "FULL STACK DEVELOPER"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const cycleInterval = setInterval(() => {
            setIsTyping(false); // Start backspacing
            setTimeout(() => {
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                setIsTyping(true); // Start typing new word
            }, 2000); // Duration for backspace animation
        }, 6500); // Total cycle time (typing + backspacing)

        return () => clearInterval(cycleInterval);
    }, []);

    return (
        <div className='w-full flex  justify-center  bg-[#09101A] overflow-hidden'>
            <div className='w-full md:w-[85%] flex flex-col items-center md:items-start mt-[150px]'>
                {/* Upper Part */}
                <div className='w-full flex flex-col md:flex-row justify-start items-center md:items-start '>
                    {/* Text Box */}
                    <div className='w-full md:w-[70%] flex flex-col items-center md:items-start gap-2 font-[Lato] mt-5'>
                        <motion.p 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        whileHover={{ textShadow: "0px 0px 15px #00bf63" }} 
                        className='font-bold text-xl md:text-5xl text-[#FFFFFF] break-words'>HI, I AM KUNAL MAURYA!</motion.p>
                        <p className="font-bold text-xl md:text-5xl text-[#FFFFFF] break-words">
                            <span
                                className={`text-3xl md:text-6xl font-extrabold text-[#00bf63] inline-flex relative border-r-[3px] border-[#00bf63] overflow-hidden h-[40px] md:h-[55px]
                                 ${isTyping ? "animate-typewriter" : "animate-backspace"
                                    }`}
                                style={{ whiteSpace: "nowrap" }}
                            >
                                {words[currentWordIndex]}
                            </span>
                        </p>
                        <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ once: true }}
                         className='max-w-[70%] text-[16px] text-center md:text-left  md:text-[20px] text-[#FFFFFF] opacity-50 break-words mt-5'>
                            I’m a Frontend Developer skilled in React.js, JavaScript, and Tailwind CSS, passionate about building
                            responsive and user-friendly web experiences. I also have experience in API integration, game development, and Android apps,
                            always striving to improve and stay updated with industry trends.
                        </motion.p>
                    </div>
                    {/* Image Box */}
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                    viewport={{ once: true }}
                     className="relative flex justify-center items-center w-[250px] h-[250px] md:w-[350px] md:h-[350px] mt-14 md:mt-0">
                        {/* Corner Borders */}
                        <motion.div
                            animate={{
                                scale: [1.07, 1, 1.07]
                            }}
                            transition={{
                                duration: 5,
                                ease: "easeIn",
                                repeat: Infinity
                            }}
                            className="absolute w-full h-full">
                            {/* Top Left Corner */}
                            <div
                                className="absolute -top-8 md:top-0 -left-5 md:left-0 w-30 h-30 border-t-10 border-l-10 border-[#00bf63]"></div>

                            {/* Top Right Corner */}
                            <div className="absolute -top-8 md:top-0 -right-5 md:right-0 w-30 h-30 border-t-10 border-r-10 border-[#00bf63]"></div>

                            {/* Bottom Left Corner */}
                            <div className="absolute -bottom-8 -left-5 md:bottom-0 md:left-0 w-30 h-30 border-b-10 border-l-10 border-[#00bf63]"></div>

                            {/* Bottom Right Corner */}
                            <div className="absolute -bottom-8 -right-5 md:bottom-0 md:right-0 w-30 h-30 border-b-10 border-r-10 border-[#00bf63]"></div>
                        </motion.div>

                        {/* Image (Perfectly Centered) */}
                        <motion.img
                            animate={{
                                scale: [1.06, 1, 1.06]
                            }}
                            transition={{
                                duration: 4,
                                ease: "easeIn",
                                repeat: Infinity
                            }}
                            className="w-[280px] h-[280px] rounded-2xl"
                            src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
                            alt="Profile"
                        />
                    </motion.div>

                </div>
                {/* Lower Part */}
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                viewport={{ once: true }}
                 className='w-full flex flex-col md:flex-row justify-start items-center gap-10 mt-18 md:mt-5'>
                    {/* Download section */}
                    <motion.a
                        href="https://drive.usercontent.google.com/download?id=12F9ZcSqhs08oh5TBY5vbBfDxxHGZcaMs"
                        download
                        className="w-[170px] h-[60px] text-[#09101A] rounded-2xl font-bold 
                            font-[Lato] bg-[#00bf63] flex justify-between items-center p-6 cursor-pointer relative overflow-hidden"
                        whileHover={{
                            rotateX: 360,
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(0, 191, 99, 0.5)",
                            transition: { duration: 0.1 },
                        }}
                      
                        whileTap={{ scale: 0.95 }} 
                    >
                        {/* Animated Text */}
                        <motion.p
                            className="text-[16px]"
                            whileTap={{ x: -5, transition: { duration: 0.2 } }}
                        >
                            Download CV
                        </motion.p>

                        {/* Animated Icon */}
                        <motion.div
                            className="text-[16px]"
                            whileTap={{
                                rotate: 360,
                                scale: 1.3,
                                transition: { duration: 0.5, ease: "easeOut" },
                            }}
                        >
                            <LuDownload />
                        </motion.div>
                    </motion.a>
                    {/* Socail Media Handle */}
                    <div className='w-fit flex justify-between items-center gap-5  text-[#09101A] text-2xl   '>
                        <a href='https://www.linkedin.com/in/kunal-maurya-378367224/'  className='w-full rounded-full p-1 bg-[#00bf63] hover:animate-ping cursor-pointer'>
                            <FaLinkedin />
                        </a>
                        <a href='https://github.com/Kunal182001' className='w-full rounded-full p-1 bg-[#00bf63] hover:animate-ping cursor-pointer'>
                            <FaGithub />
                        </a>
                        <a href='https://www.instagram.com/kunal_maurya_1_8?igsh=MWRkNXVyeWEzdnkxZw==' className='w-full rounded-full p-1 bg-[#00bf63] hover:animate-ping cursor-pointer'>
                            <FaInstagramSquare />
                        </a>
                        <a href='https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend' className='w-full rounded-full p-1 bg-[#00bf63] hover:animate-ping cursor-pointer'>
                            <SiIndeed />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HomeMidSection