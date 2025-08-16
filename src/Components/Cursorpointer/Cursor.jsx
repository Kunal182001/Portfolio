import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);
  
    useEffect(() => {
      const updateCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      const handleMouseEnter = () => setIsHoveringNavbar(true);
      const handleMouseLeave = () => setIsHoveringNavbar(false);
  
      window.addEventListener("mousemove", updateCursor);
      document.getElementById("navbar")?.addEventListener("mouseenter", handleMouseEnter);
      document.getElementById("navbar")?.addEventListener("mouseleave", handleMouseLeave);
  
      return () => {
        window.removeEventListener("mousemove", updateCursor);
        document.getElementById("navbar")?.removeEventListener("mouseenter", handleMouseEnter);
        document.getElementById("navbar")?.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);
    return (
        <motion.div
        className="hidden md:fixed md:block top-0 left-0 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - (isHoveringNavbar ? 40 : 20), // Centering the cursor
          y: position.y - (isHoveringNavbar ? 40 : 20),
          width: isHoveringNavbar ? 80 : 50,
          height: isHoveringNavbar ? 80 : 50,
          border: isHoveringNavbar ? "4px solid #00bf63" : "none",
          backgroundColor: isHoveringNavbar ? "transparent" : "#00bf63",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        style={{ borderRadius: "50%" }}
      />
    )
}

export default Cursor