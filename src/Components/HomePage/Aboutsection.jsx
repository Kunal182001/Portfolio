import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaCode, FaServer } from "react-icons/fa";
import collegimg from "../../assets/college.jpg"; 

const Aboutsection = () => {
    const skillsData = [
        {
            id: 1,
            name: "Data Structures & Algorithms",
            url: "https://cdn-icons-png.flaticon.com/128/8637/8637660.png"
        },
        {
            id: 2,
            name: "Android Development",
            url: "https://cdn-icons-png.flaticon.com/128/11378/11378763.png"
        },
        {
            id: 3,
            name: "Game Development",
            url: "https://cdn-icons-png.flaticon.com/128/5812/5812987.png"
        },
        {
            id: 4,
            name: "C++",
            url: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png"
        },
        {
            id: 5,
            name: "Java",
            url: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png"
        },
        {
            id: 6,
            name: "JavaScript",
            url: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
        },
        {
            id: 7,
            name: "HTML5",
            url: "https://cdn-icons-png.flaticon.com/128/174/174854.png"
        },
        {
            id: 8,
            name: "CSS3",
            url: "https://cdn-icons-png.flaticon.com/128/732/732190.png"
        },
        {
            id: 9,
            name: "TailWind CSS",
            url: "https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png"
        },
        {
            id: 10,
            name: "React",
            url: "https://cdn-icons-png.flaticon.com/128/875/875209.png"
        },
         {
            id: 11,
            name: "Next.js",
            url: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png"
        },
        {
            id: 12,
            name: "API integration",
            url: "https://cdn-icons-png.flaticon.com/128/13542/13542989.png"
        },
        {
            id: 13,
            name: "Unity",
            url: "https://cdn-icons-png.flaticon.com/128/5969/5969346.png"
        },
        {
            id: 14,
            name: "Unreal Engine 4",
            url: "https://www.citypng.com/public/uploads/preview/unreal-engine-black-logo-icon-png-701751694969791yzh1krpqaa.png"
        },
       

    ]
    return (
        <div className='w-full flex justify-center  bg-[#09101A]  pt-[200px] overflow-hidden'>
            <div className='w-full md:w-[85%] flex flex-col items-center md:items-start'>
                {/* About me */}
                <div className="relative w-full flex flex-col  items-center md:items-start">
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="text-3xl font-[Lato] font-extrabold text-[#00bf63]"
                    >
                        About Me
                    </motion.p>

                    <motion.div
                        className="absolute hidden right-[15%] top-[15%] md:flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    >
                        <motion.div
                            className="text-[#00bf63] text-7xl"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaReact />
                        </motion.div>
                        <motion.div
                            className="text-[#FFFFFF] text-7xl"
                            animate={{ x: [-10, 10, -10] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaCode />
                        </motion.div>
                        <motion.div
                            className="text-[#00bf63] text-6xl"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaServer />
                        </motion.div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="w-[85%] md:w-[70%] flex flex-col items-center md:items-start mt-5">
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ textShadow: "0px 0px 15px #00bf63" }}
                            className="text-4xl md:text-5xl font-bold text-[#FFFFFF] break-words text-center md:text-left"
                        >
                            Crafting sleek, responsive UIs & scalable software solutions
                        </motion.p>
                        <div className="w-full flex justify-center md:justify-start items-start gap-8 mt-16 relative">
                            <motion.div
                                className="w-[15%] md:w-[10%] h-1 bg-[#FFFFFF] opacity-80 mt-4"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                            ></motion.div>

                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 0.5, x: 0 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ color: "#00bf63", scale: 1.05 }}
                                className="text-[16px] md:text-[18px] text-[#FFFFFF] opacity-50 break-words w-full md:w-[50%] text-left"
                            >
                                Passionate about building interactive web experiences, I specialize in React.js, JavaScript, and Tailwind CSS.
                                From sleek UIs to seamless API integration, I turn ideas into engaging digital solutions.
                            </motion.p>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
                    <div className= " w-full md:w-[50%] flex flex-col items-center md:items-start">
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="text-3xl font-[Lato] font-extrabold text-[#00bf63] mt-[150px]"
                        >
                            Education & Skills
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ textShadow: "0px 0px 15px #00bf63" }}
                            className="text-4xl md:text-5xl text-center md:text-left font-bold text-[#FFFFFF] mt-4 "
                        >
                            Education builds knowledge, skills shape success
                        </motion.p>

                        <div className="w-full flex justify-center md:justify-start items-start gap-8 mt-10">
                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 0.5, x: 0 }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
                                viewport={{ once: true }}
                                className="text-[16px] md:text-[18px] text-[#FFFFFF] text-center md:text-left opacity-50 break-words w-[70%]"
                            >
                                I pursued my B.Tech in Electronics & Communication Engineering from Indraprastha Institute of Information Technology, Delhi. My academic journey began at Kendriya Vidyalaya, Sector 5, Dwarka, Delhi, where I completed both my 10th and 12th under the CBSE Board. Throughout my education, I developed a strong foundation in technology and problem-solving, shaping my passion for software development and frontend engineering.
                            </motion.p>
                        </div>
                    </div>

                    <motion.div
                        className="w-full md:w-[40%] flex justify-center items-center relative mt-22 md:mr-18"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="absolute w-[350px] h-[250px] md:w-[420px] md:h-[320px] rounded-3xl border-4 border-[#00bf63] opacity-40"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        ></motion.div>
                        <motion.img
                            src={collegimg}
                            alt="Profile"
                            className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-2xl"
                            whileHover={{
                                scale: 1.1,
                                rotate: 3,
                                boxShadow: "0px 0px 15px rgba(0, 191, 99, 0.8)",
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className='text-3xl font-[Lato] font-extrabold text-[#00bf63] mt-[200px]  w-full flex justify-center items-center '>My Skills</motion.p>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 mt-10 p-8 md:p-0">
                    {skillsData.length > 0 ? (
                        <>
                            {skillsData.map((i, index) => (
                                <motion.div
                                    key={index}
                                    className="w-[190px] h-[150px] flex flex-col gap-2 items-center mt-10"
                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: index * 0.1, // Staggered effect
                                    }}
                                    viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of element is in view
                                    whileHover={{ scale: 1.1 }} // Hover effect on card
                                >
                                    <motion.img
                                        className="w-[80px] h-[80px]"
                                        loading="lazy"
                                        src={i.url}
                                        alt={i.name}
                                        whileHover={{
                                            scale: 1.2,
                                            transition: { duration: 0.3 },
                                        }}
                                    />
                                    <p className="w-full text-[16px] flex justify-center items-center font-bold text-[#00bf63]">
                                        {i.name}
                                    </p>
                                </motion.div>
                            ))}
                        </>
                    ) : (
                        <p className="text-2xl font-bold text-[#00bf63] flex justify-center items-center">
                            Data Loading
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Aboutsection