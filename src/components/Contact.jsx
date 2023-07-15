import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const InputForm = ({
  name,
  type,
  handdleChange,
  value,
  label,
  placeholder,
  classInput,
  textArea,
  rows,
}) => {
  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      {textArea ? (
        <textarea
          rows={rows}
          name={name}
          value={value}
          onChange={handdleChange}
          placeholder={placeholder}
          className={` ${classInput} bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handdleChange}
          placeholder={placeholder}
          className={` ${classInput} bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
        />
      )}
    </label>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handdleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_do7an3f",
        "template_6v226fj",
        {
          from_name: form.name,
          to_name: "John Londoño",
          from_email: form.email,
          to_email: "johnujulin2@gmail.com",
          message: form.message,
        },
        "ND65fnZPgiaVHdK74"
      )
      .then(
        () => {
          setLoading(false);
          alert("¡Gracias por escribirme! Responderé pronto :)");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Algo salio mal...");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          ¡Estamos a un clic de distancia!
        </p>
        <h3 className={styles.sectionHeadText}>Contacto.</h3>

        <form
          ref={formRef}
          onSubmit={handdleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <InputForm
            label="Nombre"
            placeholder="Cual es tu nombre?"
            name="name"
            type="text"
            handdleChange={handdleChange}
            value={form.name}
          />
          <InputForm
            label="Email"
            placeholder="Cual es tu Email?"
            name="email"
            type="email"
            handdleChange={handdleChange}
            value={form.email}
          />
          <InputForm
            textArea
            rows="7"
            label="Mensaje"
            placeholder="Escribe tu mensaje aqui."
            name="message"
            type="text"
            handdleChange={handdleChange}
            value={form.message}
          />

          <button
            type="submit"
            className="bg-primary hover:bg-purple-800  py-3 px-12 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-lg"
          >
            {" "}
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
