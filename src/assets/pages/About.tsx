import Profile from "../images/about.jpg";
import CV from "../file/Favour-CV.pdf";

function About() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            About Me
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-16 md:w-24 bg-yellow-600"></div>
            <h2 className="text-xl md:text-2xl font-semibold text-red-900">
              Who Am I
            </h2>
            <div className="h-1 w-16 md:w-24 bg-yellow-600"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl w-full mx-auto">
          <img
            src={Profile}
            alt="Profile"
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg object-cover"
          />
          <div className="flex flex-col justify-center space-y-6 lg:flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              I am Favour Musa and I'm a Web Developer
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              I'm a passionate web developer with strong skills in HTML, CSS,
              JavaScript, and React. I love building responsive, user-friendly
              interfaces and bringing creative ideas to life through clean,
              efficient code. What drives me most is the opportunity to learn
              and grow alongside experienced mentors and talented developers. I
              believe collaboration is key to creating exceptional work, and I'm
              always eager to contribute to team projects, share knowledge, and
              tackle challenging problems together. Whether it's exploring new
              frameworks, refining best practices, or brainstorming innovative
              solutions, I'm committed to continuous improvement and making
              meaningful contributions to every project I'm part of.
            </p>
            <a href={CV} download>
              <button className="bg-red-900 rounded py-2 px-4 text-white text-sm hover:bg-black transition-all duration-300 w-fit">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
