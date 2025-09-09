"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (formData.name.length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse e-mail valide";
      isValid = false;
    }

    if (formData.subject.length < 5) {
      newErrors.subject = "Le sujet doit contenir au moins 5 caractères";
      isValid = false;
    }

    if (formData.message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <section className="bg-black   text-white py-12">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Texte à gauche */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-5xl font-bold mb-4">Nous contacter</h1>
          <p className="text-lg mb-8">
            {`Si vous avez des questions ou souhaitez obtenir plus
            d'informations, n'hésitez pas à nous envoyer un message via le
            formulaire ci-dessous. Nous répondrons dans les plus brefs délais.`}
          </p>
        </div>

        {/* Formulaire centré */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl p-8 rounded-lg shadow-xl"
        >
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Nom complet"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Votre adresse e-mail"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Sujet de votre message"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg bg-black text-white focus:outline-none focus:ring-2 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows={5}
              placeholder="Votre message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#FBBF24] text-black font-bold rounded-lg hover:bg-black hover:text-white hover:border hover:border-white focus:outline-none focus:ring-2"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
