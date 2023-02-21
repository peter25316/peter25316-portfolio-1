import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
import avatar from "../../../public/assets/avatar.png";

const Hero = () => {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
          Peter Huynh
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl">React Developer</h3>
        <p className="py-5 leading-8 text-gray-800 md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odio
          ipsam voluptates explicabo nam, praesentium doloremque eum nulla animi
          eos deserunt iste laborum ea aliquam minus maxime dolor aliquid? A.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiOutlineTwitter />
      </div>
      <div className="relative my-14 mx-auto w-80 h-80 md:w-96 md:h-96">
        <Image src={avatar} />
      </div>
    </>
  );
};

export default Hero;
