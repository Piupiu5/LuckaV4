

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()} Lucka Agency. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
