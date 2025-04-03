
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  LogIn,
  User,
  FileText,
  Map,
  Search,
  HelpCircle,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="h-4 w-4 mr-1" /> },
    { name: 'Properties', path: '/properties', icon: <Map className="h-4 w-4 mr-1" /> },
    { name: 'Documents', path: '/documents', icon: <FileText className="h-4 w-4 mr-1" /> },
    { name: 'Search', path: '/search', icon: <Search className="h-4 w-4 mr-1" /> },
    { name: 'FAQs', path: '/faqs', icon: <HelpCircle className="h-4 w-4 mr-1" /> },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-md bg-gradient-land flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">LL</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-land-700 dark:text-land-300">
                Land<span className="text-saffron-500">Ledger</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                  location.pathname === link.path
                    ? 'text-land-700 bg-land-50 dark:text-land-300 dark:bg-land-900/30'
                    : 'text-gray-700 hover:text-land-600 hover:bg-land-50 dark:text-gray-300 dark:hover:text-land-300 dark:hover:bg-land-900/20'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button asChild variant="outline" size="sm">
              <Link to="/login" className="flex items-center">
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Link>
            </Button>
            <Button asChild className="button-gradient rounded-md" size="sm">
              <Link to="/register" className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                Register
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-land-600 hover:bg-land-50 dark:text-gray-300 dark:hover:text-land-300 dark:hover:bg-land-900/20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
                location.pathname === link.path
                  ? 'text-land-700 bg-land-50 dark:text-land-300 dark:bg-land-900/30'
                  : 'text-gray-700 hover:text-land-600 hover:bg-land-50 dark:text-gray-300 dark:hover:text-land-300 dark:hover:bg-land-900/20'
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3 px-3">
              <Button asChild variant="outline" className="w-full justify-center" size="sm">
                <Link to="/login" className="flex items-center">
                  <LogIn className="h-4 w-4 mr-1" />
                  Login
                </Link>
              </Button>
              <Button asChild className="button-gradient rounded-md w-full justify-center" size="sm">
                <Link to="/register" className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Register
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
