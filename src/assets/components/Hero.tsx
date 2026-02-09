import background from "../images/background.jpg";
import CV from "../file/Favour-CV.pdf";

function Hero() {
  return (
    <>
      <section className="relative flex items-center min-h-screen">
        <img
          src={background}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="pl-10 w-3/4 z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Full-Stack Developer
          </h1>
          <p className="p-2 lg:text-sm sm:text-xs md:text-base text-gray-600 leading-relaxed">
            Hi, I'm Kao, a passionate full-stack developer with expertise in
            React, Node.js, and database management. I love creating dynamic and
            user-friendly web applications that solve real-world problems.
          </p>
          <a href={CV} download>
            <button className="bg-red-900 rounded py-2 px-3 text-white text-xs hover:bg-black transition-ease-in-out duration-300 mt-4">
              Download CV
            </button>{" "}
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
