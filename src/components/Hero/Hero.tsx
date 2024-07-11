import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setidebar={setSidebar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text container section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Sip, Savor, Smile
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">
                    Your New Favorite Neighborhood Coffee Haven!
                  </h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    We believe that a great cup of coffee is more than just a
                    beverage; it's an experience. Nestled in the heart of the
                    community, our shop offers a warm, inviting atmosphere where
                    friends and family can gather, work, or simply relax.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero image section */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt=""
                className="relative z-10 h-[400px] md:h-[700px] img-shadow"
              />
              {/* orange circle ring */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-[1] bg-primary/10"
              ></motion.div>
              {/* big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute top-5 left-[400px] z-[1]"
              >
                <h1 className="text-[150px] scale-150 font-bold text-darkGray/40 leading-none">
                  COZY CUPS
                </h1>
              </motion.div>
            </div>
            {/* third div section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Here's Every Sip Feels Like Home</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Come experience the warmth and charm of Cozy Cups, where
                    every cup is brewed with love and every guest is treated
                    like family. We can't wait to see you!
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>

        {/* sidebar Menu section */}
        {sidebar && (
          <div className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primayDark/80 backdrop-blur-sm z-10">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* social icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
