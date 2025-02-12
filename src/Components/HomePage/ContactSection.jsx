import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";

const ContactSection = () => {

    //email for contact
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false); 
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const emailData = {
            ...formData,
            date: new Date().toLocaleString(), 
        };

        emailjs
            .send("service_1fz9b7i", "template_kcgjr7l", emailData, "2_CineA9WyHHi84kA")
            .then(() => {
                setIsSending(false);
                setIsSent(true); 
                setTimeout(() => setIsSent(false), 4000);
                setFormData({ name: "", email: "", phone: "", message: "" });
            })
            .catch((error) => console.error("Error sending email:", error));
    };


    return (
        <div className='w-full   bg-[#09101A] flex  justify-center pt-[130px] font-[Lato]'>
            <div className='w-full md:w-[85%] flex flex-col items-center md:items-start'>
                {/* Contact */}
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className='text-3xl font-[Lato] font-extrabold text-[#00bf63] '>Contact Me</motion.p>
                <div className='w-full flex flex-col md:flex-row justify-between items-center md:items-start  mt-10'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className='w-full md:w-[40%] flex flex-col items-center md:items-start gap-2 '>
                        < p

                            className='text-[16px] md:text-[18px] text-[#FFFFFF] opacity-50  break-words w-[80%] text-center md:text-left '>
                            Feel free to reach out for collaborations, project inquiries,
                            or just to say hello! I'm always open to discussing new ideas
                            and opportunities
                        </p>
                        <p className='text-[18px] text-[#FFFFFF] font-bold mt-2'>Location:{" "}<span className='font-medium opacity-50'>Delhi,India</span></p>
                        <p className='text-[18px] text-[#FFFFFF] font-bold mt-2'>Email:{" "}<span className='font-medium opacity-50'>kunal20215@iiitd.ac.in</span></p>
                        <p className='text-[18px] text-[#FFFFFF] font-bold mt-2'>Phone:{" "}<span className='font-medium opacity-50'>7678531570</span></p>
                    </motion.div>
                    {/* Contact Foam */}
                    <motion.form
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-[90%] md:w-[50%] h-full flex flex-col items-start bg-[#141C27] p-6 gap-6 mt-10 md:mt-0"
                    >
                        <motion.p
                            className="text-4xl font-extrabold text-[#FFFFFF]"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            GET IN TOUCH
                        </motion.p>

                        {/* Input Fields */}
                        {["name", "email", "phone"].map((field, index) => (
                            <motion.input
                                key={index}
                                type={field === "phone" ? "number" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={field.replace(/^\w/, (c) => c.toUpperCase())} // Capitalizes first letter
                                className="w-full h-[60px] text-[18px] p-3 text-[#FFFFFF] border-2 border-[#00bf63] bg-transparent outline-none"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ scale: 1.05 }}
                                whileFocus={{ scale: 1.05, borderColor: "#00ff99" }}
                            />
                        ))}

                        {/* Message Textarea */}
                        <motion.textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="w-full h-[100px] text-[18px] p-3 text-[#FFFFFF] border-2 border-[#00bf63] bg-transparent outline-none"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            whileFocus={{ scale: 1.05, borderColor: "#00ff99" }}
                        />

                        {/* Submit Button */}
                        <motion.button
                            onClick={handleSubmit}
                            className="w-[150px] h-[60px] bg-[#00bf63] font-bold rounded-3xl text-[#09101A] hover:text-[#FFFFFF] hover:bg-[#141C27] hover:border-2 hover:border-[#FFFFFF] flex justify-center items-center"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 0px 10px rgba(0, 191, 99, 0.8)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isSending ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-5 h-5 border-4 border-white border-t-transparent rounded-full"
                                />
                            ) : (
                                "Send Message"
                            )}

                           
                        </motion.button>
                         {/* Success Message Animation */}
                         {isSent && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full p-4 mt-4 bg-green-500 text-white text-center font-bold rounded-md"
                                >
                                    Message Sent Successfully!
                                </motion.div>
                            )}
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection