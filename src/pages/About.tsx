
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Book, Shield, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-land text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About LandLedger</h1>
              <p className="text-xl text-white/90 mb-8 animate-fade-in animation-delay-300">
                Transforming land records management across India with blockchain technology, 
                transparency, and innovation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  LandLedger was founded in 2023 with a simple but ambitious mission: to solve India's 
                  land records crisis through cutting-edge blockchain technology.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  After witnessing firsthand the struggles of rural communities dealing with land disputes, 
                  our founders assembled a team of technologists, legal experts, and government advisors to 
                  create a solution that would bring transparency and efficiency to land records management.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Today, LandLedger is working with state governments across India to digitize and secure 
                  land records, reduce disputes, and empower citizens to leverage their property assets.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2070"
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card rounded-lg p-4 max-w-xs">
                  <q className="text-gray-700 dark:text-gray-300 italic text-sm">
                    Our vision is to create a future where every Indian citizen has a clear, 
                    indisputable record of their land ownership.
                  </q>
                  <p className="text-right mt-2 text-sm font-semibold text-land-600 dark:text-land-400">— Rajiv Patel, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">Our Values</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The principles that guide our work and shape our impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-land-50 dark:bg-land-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                    <Shield className="h-7 w-7 text-land-600 dark:text-land-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Transparency</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We believe everyone deserves clear, accessible information about land ownership 
                    and transactions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-saffron-50 dark:bg-saffron-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                    <Users className="h-7 w-7 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Empowerment</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our technology empowers citizens, especially in rural areas, to secure their property 
                    rights and leverage their assets.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-land-50 dark:bg-land-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                    <Award className="h-7 w-7 text-land-600 dark:text-land-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We continuously push the boundaries of what's possible, applying cutting-edge technology 
                    to solve age-old problems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Impact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">Our Impact</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Transforming India's land records system, one parcel at a time
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-xl overflow-hidden shadow-lg relative">
                <img 
                  src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974"
                  alt="Impact" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Reducing Land Disputes</h3>
                  <p className="text-white/90">
                    Our blockchain solution has helped reduce land-related disputes by up to 65% in 
                    implementation areas.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-land-50 dark:bg-land-900/30 mr-4">
                      <Book className="h-6 w-6 text-land-600 dark:text-land-400" />
                    </div>
                    <h3 className="text-xl font-bold">10M+ Land Records Digitized</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    We've helped digitize and secure over 10 million land records across multiple states in India.
                  </p>
                </div>
                
                <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-saffron-50 dark:bg-saffron-900/30 mr-4">
                      <Users className="h-6 w-6 text-saffron-600 dark:text-saffron-400" />
                    </div>
                    <h3 className="text-xl font-bold">500,000+ Citizens Empowered</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our platform has directly benefited over half a million citizens, helping them secure their land rights.
                  </p>
                </div>
                
                <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-land-50 dark:bg-land-900/30 mr-4">
                      <Globe className="h-6 w-6 text-land-600 dark:text-land-400" />
                    </div>
                    <h3 className="text-xl font-bold">15+ States Implementing</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    More than 15 states across India are at various stages of implementing our technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-land text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Transforming Land Records</h2>
              <p className="text-lg text-white/90 mb-8">
                Be part of our mission to bring transparency, security, and efficiency to India's land registry system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-land-700 hover:bg-gray-100 h-12 px-6 text-base">
                  <Link to="/register" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-6 text-base">
                  <Link to="/contact" className="flex items-center">
                    Contact Us
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

export default About;
