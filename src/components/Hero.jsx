import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-center`}
      >
        {/* Availability Badge */}
        <span className="text-sm text-[#915EFF] font-medium mb-4">
          Available for Full-Stack Developer Roles
        </span>

        {/* Heading */}
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#915EFF]">Ketan Bhange</span>
        </h1>

        {/* Subtext */}
        <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-2xl`}>
          I build real-world full-stack web applications with strong
          problem-solving skills and production-ready architecture.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#915EFF] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#7c4dff] transition duration-300"
          >
            View Resume ↗
          </a>

          <a
            href="#projects"
            className="border border-white text-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;