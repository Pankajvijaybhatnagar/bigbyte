import React from 'react';
import { motion } from 'framer-motion'

const Herobanner2 = () => {
  return (
    <motion.section
    initial={{opacity: 0, x:200}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    className="bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
        PETROLEUM INDUSTRY/MODULAR REFINERY
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-orange-500 rounded-sm"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
            <img
              src="src/assets/sectors8.webp "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          {/* Left Text Section */}
          <div className="md:w-1/2 text-gray-800">
            <p className="mb-4">
            The company is dealing in all aspects of oil and gas production and conversion and have considerable experience in Oil Refining and EPC projects. We have specialists of system engineering who have many years of experience in all fields of Production and Conversion from all type of oil and gas to finished products. The company also has considerable experience in the custom design, manufacture and supply of plant to the Iron & Steel industry sector. The company has come up with a Modular refinery project which is very economical as compared to the full fledged refinery and also is willing to fund the project based on certain terms and conditions to be fulfilled by prospective partners in business. We are an EPC company representing some of the world’s leading oil and gas process plant manufacturers based in North America. Our technical partners manufacture equipment to process crude oil into AGO, PMS, DPK and a residual product of LPFO. A small amount of gas is given off which is recovered and used to power the process making the plant self-sufficient in power. These processes are not a full refining process as such but are referred to in the industry as Modular Refineries or Crude Topping Units. These process plants have some advantages over a full refining process in that they are much more economical and much faster to implement.
            </p><br />

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition duration-200">
              Read More
            </button>
          </div>

          {/* Right Image Section */}
          {/* <div className="md:w-1/2 w-full">
            <img
              src="src/assets/powerplant.jpg "
              alt="Power Plant"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default Herobanner2;