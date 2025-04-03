
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Shield, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02] -z-10"></div>
      
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-land-100/30 to-land-200/30 blur-3xl rounded-full -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-saffron-100/30 to-saffron-200/30 blur-3xl rounded-full -z-10 animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16 md:py-24 gap-12">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-land-50 text-land-700 border border-land-200 dark:bg-land-900/30 dark:text-land-300 dark:border-land-800 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-land-500 mr-2"></span>
              Transforming Land Registry in India
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-heading">
              Secure Land Records on the Blockchain
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              LandLedger brings transparency, security, and efficiency to India's land records 
              with blockchain technology, reducing disputes and empowering rural entrepreneurs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="button-gradient text-white rounded-md h-12 text-base px-6">
                <Link to="/register" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 text-base">
                <Link to="/about" className="flex items-center">
                  Learn More
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-land-700 dark:text-land-400">65%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Reduction in Land Disputes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-land-700 dark:text-land-400">10M+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Land Records Digitized</div>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-3xl font-bold text-land-700 dark:text-land-400">90%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Faster Property Registration</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-land-200 dark:border-land-700 bg-white dark:bg-gray-800 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069" 
                  alt="Digital Land Registry"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-land-700/60 to-land-900/80"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Blockchain Security</h3>
                  <p className="text-sm text-white/90 max-w-xs">
                    Every land record is cryptographically secured, timestamped, and immutable on our blockchain.
                  </p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700 card-hover">
                <div className="flex items-center space-x-3">
                  <div className="bg-land-50 dark:bg-land-900/30 p-2 rounded-md">
                    <FileText className="h-5 w-5 text-land-600 dark:text-land-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Documents</p>
                    <p className="text-sm font-medium">Verified</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700 card-hover">
                <div className="flex items-center space-x-3">
                  <div className="bg-saffron-50 dark:bg-saffron-900/30 p-2 rounded-md">
                    <Shield className="h-5 w-5 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Security</p>
                    <p className="text-sm font-medium">Tamper-Proof</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-200 dark:border-gray-700 card-hover hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded-md">
                    <BarChart3 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Analytics</p>
                    <p className="text-sm font-medium">Real-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
