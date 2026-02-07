import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-20 py-20 bg-yellow-600">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Contact Me
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-16 md:w-24 bg-white"></div>
            <h2 className="text-xl md:text-2xl font-semibold text-red-900">
              Get In Touch
            </h2>
            <div className="h-1 w-16 md:w-24 bg-white"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl w-full mx-auto">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-900 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 hover:text-red-900"
                >
                  mfavour919@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-red-900 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-red-900"
                >
                  +234 706 879 3525
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-900 text-2xl" />
              <div>
                <p className="font-semibold text-gray-800">Address</p>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Social Media
              </h4>
              <div className="flex gap-6">
                <a
                  href="https://x.com/KaoWebber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-900 transition-colors"
                >
                  <FaXTwitter className="text-3xl" />
                </a>
                <a
                  href="https://github.com/mfayvor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-900 transition-colors"
                >
                  <FaGithub className="text-3xl" />
                </a>
                <a
                  href="https://linkedin.com/in/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-900 transition-colors"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-black transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
