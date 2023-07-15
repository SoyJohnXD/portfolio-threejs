import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_preview,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
            {live_preview && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-r from-cyan-500 to-blue-500   w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={live_preview}
                  alt="github"
                  className="w-1/3 h-1/3 object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mis trabajo</p>
        <h2 className={styles.sectionHeadText}>Proyectos.</h2>
      </motion.div>
      <div className="w-full felx">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Estos proyectos muestran mi experiencia y habilidades con ejemplos del
          mundo real. Cada uno se presenta con una breve descripción, enlaces a
          repositorios de código y demostraciones en vivo. Reflejan mi capacidad
          para resolver problemas complejos, trabajar con diversas tecnologías y
          gestionar proyectos eficazmente
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
