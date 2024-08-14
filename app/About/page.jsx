"use client";
import Spline from '@splinetool/react-spline/next';

import {
  RiArrowRightUpLine,
  RiCupLine,
  RiGitRepositoryLine,
} from "@remixicon/react";
import React from "react";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
    <div>
    <Spline
        scene="https://prod.spline.design/VN4kII2iD1gVCPCP/scene.splinecode" 
        width={1920}
        height={1080}
      />
</div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="p-12 w-full min-h-screen background_color"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center pt-10 text-5xl  md:text-6xl font-bold greadient_text"
        >
          About Us
        </motion.h1>
        <br></br>
        <p className="text-center font-semibold">
        

      Welcome to our blog app! 
      We're passionate about sharing stories, ideas, and knowledge with the world.
      Our mission is to create a platform where diverse voices can connect and inspire.
        Explore a variety of topics, discover new perspectives, and engage with our community.
        We believe that blogging is more than just writing; it's a journey of connection and growth. 
        Join us on this exciting adventure! 
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center items-center py-10 md:gap-10 flex-wrap"
        >
          <div className="mt-10 md:w-80 p-4 md:p-6 shadow-lg border-2 border-[#252A34] rounded-2xl">
            <h2 className="md:text-xl">
              <b className="flex">
                Github <RiArrowRightUpLine />
              </b>
              Feel free to contribute.
            </h2>
            <button className="hover:scale-105 duration-300">
              <a
                href="https://github.com/SwastidSolanki/"
                target="__blank"
                className="font-extrabold flex items-center gap-1 bg-[#252A34] text-[#EAEAEA] text-center  mt-3 py-2 px-4 rounded-full"
              >
                <RiGitRepositoryLine /> Visit
              </a>
            </button>
          </div>
          <div className="mt-10 md:w-80 p-4 md:p-6 border-2 bg-white border-[#252A34] rounded-2xl">
            <h2 className="md:text-xl">
              Support me on BuymeCoffee
            </h2>
            <button>
              <a
                href="https://buymeacoffee.com/swastid"
                target="__blank"
                className="font-extrabold flex items-center gap-1 bg-[#ffd43b] text-[#252A34] hover:scale-105 duration-300 text-center mt-3 py-2 px-4 rounded-full"
              >
                <RiCupLine /> Buy Me a Coffee
              </a>
            </button>
          </div>
        </motion.div>
      </motion.div>
      <hr />
      <Footer />
    </>
  );
};

export default About;
