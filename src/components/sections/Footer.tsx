import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';

const Footer = () => {
  return (
    <motion.div
      className="bg-tertiary py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 px-6">
          {/* Company Section */}
          <div>
            <h3 className="text-white text-xl font-semibold">Quick Links</h3>
            <ul className="text-secondary mt-4 space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-500">
                  Experience
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-blue-500">
                  My Skills
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-blue-500">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white text-xl font-semibold">Services</h3>
            <ul className="text-secondary mt-4 space-y-2">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Service Developer</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Me Section */}
          <div>
            <h3 className="text-white text-xl font-semibold">Contact Me</h3>
            <ul className="text-secondary mt-4 space-y-2">
              <li>
                <a href="mailto:2000amandanm@gmail.com" className="hover:text-blue-500">
                  Email: 2000amandanm@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+251919755719" className="hover:text-blue-500">
                  Phone: +251-919-755-719
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/amanuel-daniel-4573b1309/"
                  className="hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn: Amanuel Daniel
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~014e7dc7fe05aa7131"
                  className="hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upwork: Amanuel Daniel
                </a>
              </li>
            </ul>
          </div>

          {/* GitHub Profile Section */}
          <div>
            <h3 className="text-white text-xl text-center font-semibold">Check out my GitHub</h3>
            <div className="mt-6 text-center">
              <a
                href="https://github.com/AbeDevSaga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-4"
              >
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <i className="fab fa-github text-white text-3xl"></i>
                </div>
              </a>
              <p className="text-secondary mt-4">Visit my GitHub profile to explore my projects!</p>
            </div>
          </div>
        </div>

        {/* Follow Me Section */}
        <div>
          <div className="flex flex-col px-6 mt-10 sm:flex-row sm:items-center sm:gap-12">
            <h3 className="text-white text-xl font-semibold mb-4 sm:mb-0">Follow Me</h3>
            <div className="flex gap-6 sm:gap-4">
              <a
                href="https://facebook.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-1xl hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white text-1xl hover:bg-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://youtube.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white text-1xl hover:bg-red-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://instagram.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-600 text-white text-1xl hover:bg-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-6 text-center text-secondary text-sm">
          <div
            className="border-t border-secondary mx-auto"
            style={{ maxWidth: 'calc(98% - 12px)' }}
          ></div>
          <p className="pt-4">© 2024 Amanuel Daniel. All rights reserved.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Footer, 'footer');
