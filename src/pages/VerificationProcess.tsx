
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  UserCheck,
  MapPin,
  CheckCircle,
  Shield,
  Key,
  ArrowRight,
  Upload,
  UserPlus,
  Clock,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

const VerificationProcess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-land text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Land Verification Process</h1>
              <p className="text-xl text-white/90 mb-8 animate-fade-in animation-delay-300">
                A comprehensive guide to verifying and registering your land records on the blockchain
              </p>
              <Button asChild className="bg-white text-land-700 hover:bg-gray-100 h-12 px-6 text-base animate-fade-in animation-delay-600">
                <Link to="/register" className="flex items-center">
                  Start Verification Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Process Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
                Our Verification Process
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                LandLedger uses a rigorous multi-step process to ensure the authenticity 
                and accuracy of all land records before they are registered on the blockchain
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-land-50 dark:bg-land-900/30 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-land-600 dark:text-land-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Document Verification</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We verify the authenticity of your land documents through advanced OCR technology 
                    and cross-reference with government databases.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-saffron-50 dark:bg-saffron-900/30 flex items-center justify-center mb-4">
                    <UserCheck className="h-6 w-6 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Identity Verification</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Secure Aadhaar-based authentication ensures that only legitimate owners can register 
                    and transfer land records.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="feature-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-land-50 dark:bg-land-900/30 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-land-600 dark:text-land-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Physical Verification</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our network of certified surveyors conducts on-site verification to confirm boundary 
                    details and physical attributes.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" className="h-12 px-6 text-base">
                <Link to="/dashboard" className="flex items-center">
                  Track Your Verification Status
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Step by Step Process */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
                Step-by-Step Verification Journey
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Follow these steps to secure your land records on our blockchain platform
              </p>
            </div>
            
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-12 top-0 bottom-0 w-1 bg-land-200 dark:bg-land-800 hidden md:block"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex items-start space-x-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-land-600 text-white flex items-center justify-center text-2xl font-bold z-10 relative">01</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-land-600 dark:text-land-400">Create an Account</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Register on the LandLedger platform with your personal details. You'll need to provide 
                      basic information and verify your email.
                    </p>
                    <div className="flex items-center space-x-2 text-land-600 dark:text-land-400">
                      <UserPlus className="h-5 w-5" />
                      <span className="font-medium">Required: Valid Email, Phone Number</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex items-start space-x-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-saffron-500 text-white flex items-center justify-center text-2xl font-bold z-10 relative">02</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-saffron-600 dark:text-saffron-400">Aadhaar Verification</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Link your Aadhaar with your LandLedger account to verify your identity. This step is 
                      crucial for securing your digital land records.
                    </p>
                    <div className="flex items-center space-x-2 text-saffron-600 dark:text-saffron-400">
                      <UserCheck className="h-5 w-5" />
                      <span className="font-medium">Required: Aadhaar Number, OTP Verification</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex items-start space-x-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-land-600 text-white flex items-center justify-center text-2xl font-bold z-10 relative">03</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-land-600 dark:text-land-400">Upload Documents</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Upload your land documents including deeds, previous registrations, and any supporting 
                      documents that prove ownership.
                    </p>
                    <div className="flex items-center space-x-2 text-land-600 dark:text-land-400">
                      <Upload className="h-5 w-5" />
                      <span className="font-medium">Required: Land Deed, Property Tax Receipts, Survey Numbers</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex items-start space-x-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-saffron-500 text-white flex items-center justify-center text-2xl font-bold z-10 relative">04</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-saffron-600 dark:text-saffron-400">Field Verification</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Our surveyors will schedule a visit to physically verify your land. They'll use GPS technology 
                      to accurately map boundaries and confirm details.
                    </p>
                    <div className="flex items-center space-x-2 text-saffron-600 dark:text-saffron-400">
                      <MapPin className="h-5 w-5" />
                      <span className="font-medium">Required: Access to Property, Boundary Markers</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex items-start space-x-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-land-600 text-white flex items-center justify-center text-2xl font-bold z-10 relative">05</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-land-600 dark:text-land-400">Blockchain Recording</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Once all verifications are complete, your land record will be digitized and recorded on the 
                      blockchain with a unique cryptographic signature.
                    </p>
                    <div className="flex items-center space-x-2 text-land-600 dark:text-land-400">
                      <Shield className="h-5 w-5" />
                      <span className="font-medium">Required: Final Approval from Land Authority</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 6 */}
                <div className="flex items-start space-x-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-saffron-500 text-white flex items-center justify-center text-2xl font-bold z-10 relative">06</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-saffron-600 dark:text-saffron-400">Digital Land Certificate</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Receive your blockchain-backed digital land certificate, which serves as proof of ownership 
                      and can be used for secure transactions in the future.
                    </p>
                    <div className="flex items-center space-x-2 text-saffron-600 dark:text-saffron-400">
                      <Key className="h-5 w-5" />
                      <span className="font-medium">Outcome: Tamper-proof Digital Certificate with QR Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Common questions about our verification process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-3 mb-3">
                  <HelpCircle className="h-6 w-6 text-land-600 dark:text-land-400 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold">How long does the verification process take?</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-9">
                  The complete verification process typically takes 7-14 days, depending on document 
                  complexity and field verification scheduling.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-3 mb-3">
                  <HelpCircle className="h-6 w-6 text-land-600 dark:text-land-400 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold">What if there are discrepancies in my documents?</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-9">
                  Our team will notify you of any discrepancies and guide you through the resolution 
                  process, which may involve additional documentation or clarification.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-3 mb-3">
                  <HelpCircle className="h-6 w-6 text-land-600 dark:text-land-400 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold">Is the field verification mandatory?</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-9">
                  Yes, field verification is a crucial step to ensure the accuracy of land boundaries 
                  and physical characteristics before blockchain registration.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-3 mb-3">
                  <HelpCircle className="h-6 w-6 text-land-600 dark:text-land-400 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold">What happens after my land is registered on the blockchain?</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 ml-9">
                  You'll receive a digital certificate, and your record becomes immutable and searchable. 
                  Future transactions will be simpler, faster, and more secure.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Important Notes Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-8 text-center">
                Important Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <Clock className="h-6 w-6 text-land-600 dark:text-land-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Processing Times</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      While we strive for efficiency, verification times may vary based on document complexity, 
                      location accessibility, and local government coordination requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <AlertTriangle className="h-6 w-6 text-saffron-600 dark:text-saffron-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Required Documentation</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ensure all documents are authentic and complete. Missing or fraudulent documentation 
                      will result in rejection and possible legal consequences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <Shield className="h-6 w-6 text-land-600 dark:text-land-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Privacy and Security</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your personal information and document details are protected with enterprise-grade security. 
                      Only authorized personnel have access to your verification data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-land text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Land Records?</h2>
              <p className="text-lg text-white/90 mb-8">
                Start the verification process today and join thousands of satisfied landowners 
                who have secured their property on the blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-land-700 hover:bg-gray-100 h-12 px-6 text-base">
                  <Link to="/register" className="flex items-center">
                    Begin Verification
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-6 text-base">
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

export default VerificationProcess;
