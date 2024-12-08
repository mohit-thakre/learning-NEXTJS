// components/Footer.js

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-between mb-6">
          <div className="text-2xl font-semibold">
            <Link href="/" className="hover:text-blue-400">
              BLOGGIFY
            </Link>
          </div>

          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
            <Link href="/blog" className="hover:text-blue-400">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>{" "}
          </Link>
          <Link href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="hover:text-blue-400">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>

        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BLOGGIFY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
