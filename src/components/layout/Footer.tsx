
import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-gradient-land flex items-center justify-center">
                  <span className="text-white font-bold text-lg">LL</span>
                </div>
                <span className="text-lg font-bold text-land-700 dark:text-land-300">
                  Land<span className="text-saffron-500">Ledger</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Transforming land governance in India with blockchain technology 
              for transparent, secure, and efficient property transactions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/properties" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  Property Registration
                </Link>
              </li>
              <li>
                <Link to="/documents" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  Document Verification
                </Link>
              </li>
              <li>
                <Link to="/transfers" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  Property Transfer
                </Link>
              </li>
              <li>
                <Link to="/disputes" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  Dispute Resolution
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  Land Record Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  User Guides
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                Ministry of Electronics & IT, Electronics Niketan, 6, CGO Complex, New Delhi
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                Phone: +91 11-24301924
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm">
                Email: support@landledger.gov.in
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} LandLedger. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400">
                Terms of Service
              </Link>
              <Link to="/legal" className="text-sm text-gray-600 hover:text-land-600 dark:text-gray-400 dark:hover:text-land-400">
                Legal Notices
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
