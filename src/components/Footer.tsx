import Image from "next/image";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t flex flex-col items-center ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Colonne 1 : Informations du magasin */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-2">Store location</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            65 Market street San Francisco <br />
            CA 94105, United States.
          </p>
          <p className="text-gray-600 text-sm mt-2">1-800-222-000</p>
          <a href="mailto:hello@domain.com" className="text-blue-600 text-sm">
            hello@domain.com
          </a>
        </div>

        {/* Colonne 2 : Logo et description */}
        <div className="text-center">
          <div className="flex items-center mx-auto justify-center mb-6 gap-2">
            <Image
              src="/img/cocotiers.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-14"
            />
            <h1 className="text-3xl">
              Noucia
              <br />
              Adams{" "}
            </h1>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Restons connectés! Suivez-moi sur le réseau social de votre choix
            (petit secret: j’ai un faible pour Instagram 😉).
          </p>
          {/* Icônes sociales */}
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/Nouciaadams.Auteure/">
              <FaFacebook
                size={20}
                className="text-gray-600 hover:text-black"
              />
            </a>
            <a href="">
              <FaInstagram
                size={20}
                className="text-gray-600 hover:text-black"
              />
            </a>
            <a href="https://fr.pinterest.com/nouciaadams/">
              <FaPinterest
                size={20}
                className="text-gray-600 hover:text-black"
              />
            </a>
          </div>
        </div>

        {/* Colonne 3 : Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-2">Join our newsletter</h3>
          <p className="text-gray-600 text-sm mb-4">
            Receive early access, wishlist on discount and more. Your privacy is
            our policy.
          </p>
          <form className="flex border-b border-black">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full py-1 px-2 outline-none"
            />
            <button type="submit" className="text-black font-bold">
              →
            </button>
          </form>
        </div>
      </div>

      {/* Politique & Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500 space-x-4">
        <a href="#" className="hover:underline">
          Return policy
        </a>
        <a href="#" className="hover:underline">
          Privacy policy
        </a>
        <a href="#" className="hover:underline">
          Payment policy
        </a>
      </div>

      <div className="mt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} HONGO is proudly powered by ThemeZaa
      </div>
    </footer>
  );
};

export default Footer;
