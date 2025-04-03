
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* How It Works Section */}
        <HowItWorks />
        
        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gradient-land text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transforming Land Registry in India
              </h2>
              <p className="text-lg text-white/80">
                Our blockchain-based system is making a significant impact across India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2">65%</div>
                <div className="text-lg">Reduction in land disputes</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2">90%</div>
                <div className="text-lg">Faster property registration</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2">10M+</div>
                <div className="text-lg">Land records digitized</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-lg">States implementing the system</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
                What People Are Saying
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Real experiences from citizens, officials, and partners using LandLedger
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                    <img 
                      src="https://i.pravatar.cc/150?img=32" 
                      alt="Testimonial" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Amit Patel</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Farmer, Gujarat</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "After registering my ancestral land on LandLedger, I was finally able to get a loan to expand my farm. The blockchain verification gave the bank confidence in my ownership."
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                    <img 
                      src="https://i.pravatar.cc/150?img=44" 
                      alt="Testimonial" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Priya Sharma</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Land Records Officer, Maharashtra</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "In my 15 years as a records officer, I've never seen a system this efficient. What used to take weeks now takes minutes, and the reduction in forgery cases has been remarkable."
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                    <img 
                      src="https://i.pravatar.cc/150?img=68" 
                      alt="Testimonial" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Rajiv Mehta</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Real Estate Developer, Bangalore</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "The transparent history of ownership has streamlined our due diligence process. What used to take months of legal verification now takes days, allowing us to close deals faster."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">
                Ready to Secure Your Land Records?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of citizens, officials, and organizations using LandLedger to secure land ownership across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="button-gradient text-white rounded-md h-12 text-base px-6">
                  <Link to="/register" className="flex items-center">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 text-base">
                  <Link to="/contact" className="flex items-center">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
