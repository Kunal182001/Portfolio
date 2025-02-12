import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const FooterSection = () => {
    return (
        <footer className="relative bg-[#09101A] text-white pt-40">
            {/* Container for Continuous Wave Animation */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                {/* Two Waves for a Seamless Effect */}
                <div className="relative w-full h-[300px]">
                    {/* First Wave */}
                    <svg
                        className="absolute top-0 left-0 w-[200%] h-full animate-wave"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z"
                            fill="#00bf63"
                            opacity="0.8"
                        />
                    </svg>

                    {/* Second Wave (Offset for Seamless Effect) */}
                    <svg
                        className="absolute top-0 left-0 w-[200%] h-full animate-wave-reverse"
                        viewBox="0 0 1200 120"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 V120 H0 Z"
                            fill="#00bf63"
                            opacity="0.5"
                        />
                    </svg>
                </div>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 text-center w-full flex flex-col items-center">
                <div className='w-fit flex justify-between items-center gap-5  text-[#09101A] text-2xl   '>
                    <a href='https://www.linkedin.com/in/kunal-maurya-378367224/' className='w-full rounded-full p-1  bg-[#FFFFFF] hover:animate-bounce cursor-pointer'>
                        <FaLinkedin />
                    </a>
                    <a href='https://github.com/Kunal182001' className='w-full rounded-full p-1 bg-[#FFFFFF] hover:animate-ping cursor-pointer'>
                        <FaGithub />
                    </a>
                    <a href='https://www.instagram.com/kunal_maurya_1_8?igsh=MWRkNXVyeWEzdnkxZw==' className='w-full rounded-full p-1 bg-[#FFFFFF] hover:animate-spin cursor-pointer'>
                        <FaInstagramSquare />
                    </a>
                    <a href='https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend' className='w-full rounded-full p-1 bg-[#FFFFFF] hover:animate-pulse cursor-pointer'>
                        <SiIndeed />
                    </a>
                </div>
                <p className='text-[14px] md:text-[16px] text-[#09101A] font-bold font-[Lato] mt-2 pb-5 cursor-pointer'>© 2025 Kunal Maurya | All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default FooterSection