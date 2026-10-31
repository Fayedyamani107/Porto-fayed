import { motion } from 'framer-motion';
import logoImg from '../assets/logo-fayed.png';

export default function Logo({ 
  onClick, 
  size = "default", 
  variant = "default",
  className = "",
  imgClassName = ""
}) {
  const isDarkBg = variant === "dark" || variant === "invert";
  const sizeClasses = {
    small: "h-8 w-auto",
    default: "h-10 sm:h-11 w-auto",
    large: "h-14 sm:h-16 w-auto"
  }[size] || "h-10 sm:h-11 w-auto";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-2 focus:outline-none cursor-pointer bg-transparent border-0 p-0 text-left select-none ${className}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Fayed Yamani — Beranda"
    >
      <img
        src={logoImg}
        alt="Logo Fayed Yamani"
        className={`${sizeClasses} object-contain transition-transform duration-300 group-hover:scale-105 ${isDarkBg ? 'invert' : ''} ${imgClassName}`}
        loading="eager"
      />
      <span className="sr-only">Fayed Yamani</span>
    </motion.button>
  );
}
