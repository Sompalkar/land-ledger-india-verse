
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Users,
  Globe,
  Building,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-land text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get in Touch</h1>
              <p className="text-xl text-white/90 mb-8 animate-fade-in animation-delay-300">
                We're here to answer your questions and help you transform your land records management.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold gradient-heading mb-6">Send Us a Message</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Have questions about our solutions? Want to schedule a demo?
                  Fill out the form below and our team will get back to you shortly.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="button-gradient w-full h-12 text-base flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold gradient-heading mb-6">Contact Information</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="feature-card">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-land-50 dark:bg-land-900/30 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-land-600 dark:text-land-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Cyber Hub, DLF Cyber City<br />
                            Gurugram, Haryana 122002<br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="feature-card">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-saffron-50 dark:bg-saffron-900/30 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-saffron-600 dark:text-saffron-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            +91 11 4000 8000<br />
                            Monday-Friday, 9:00-18:00 IST
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="feature-card">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-land-50 dark:bg-land-900/30 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-land-600 dark:text-land-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            info@landledger.in<br />
                            support@landledger.in
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="feature-card">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-saffron-50 dark:bg-saffron-900/30 p-3 rounded-full">
                          <Globe className="h-6 w-6 text-saffron-600 dark:text-saffron-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Connect</h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Follow us on social media<br />
                            @LandLedgerIndia
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Who We Work With</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-land-600 dark:text-land-400" />
                      <div className="flex items-center space-x-2">
                        <Building className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-300">State Land Records Departments</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-land-600 dark:text-land-400" />
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-300">Rural Communities & Panchayats</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-land-600 dark:text-land-400" />
                      <div className="flex items-center space-x-2">
                        <Building className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-300">Real Estate Developers</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-land-600 dark:text-land-400" />
                      <div className="flex items-center space-x-2">
                        <Building className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-300">Banks & Financial Institutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold gradient-heading mb-4">Find Us</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Visit our headquarters in Gurugram, India
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-gray-200 dark:bg-gray-700">
              {/* Replace with actual map integration */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
