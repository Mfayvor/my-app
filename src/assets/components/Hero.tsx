import background from "../images/background.jpg";

function Hero() {
  return (
    <>
      <section className="absolute grid pt-32">
        <img src={background} alt="" className="relative top-0 w-full z-0" />
        <div className=" pl-10  w-3/4 z-10">
          <h1 className="text-3xl text-white">Full-Stack Developer</h1>
          <p className="pl-5 pt-3 text-red-900 text-sm lg:w-1/2 md:w-full">
            Hi, I'm Kao, a passionate full-stack developer with expertise in
            React, Node.js, and database management. I love creating dynamic and
            user-friendly web applications that solve real-world problems.
          </p>
          <button className="bg-red-900 rounded py-2 px-3 text-white text-xs hover:bg-black transition-ease-in-out duration-300 mt-4">
            Download CV
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
