
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ChevronRight, FileCheck, UserCheck, KeyRound, Shield } from 'lucide-react';

const VerificationProcess = () => {
  return (
    <>
      <Helmet>
        <title>Verification Process | LandLedger</title>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 pb-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-land py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Verification Process
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Learn how we ensure the security and authenticity of property records on our blockchain platform.
              </p>
            </div>
          </section>
          
          {/* Process Steps */}
          <section className="container mx-auto px-4 py-16 -mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-land-500/10 rounded-bl-full"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-land-100 dark:bg-land-900/30 flex items-center justify-center mb-2">
                    <UserCheck className="h-6 w-6 text-land-600 dark:text-land-400" />
                  </div>
                  <CardTitle className="text-2xl">Identity Verification</CardTitle>
                  <CardDescription>
                    We verify user identities using Aadhaar authentication
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Aadhaar-based KYC verification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Biometric authentication</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure digital identity creation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-land-500/10 rounded-bl-full"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-land-100 dark:bg-land-900/30 flex items-center justify-center mb-2">
                    <FileCheck className="h-6 w-6 text-land-600 dark:text-land-400" />
                  </div>
                  <CardTitle className="text-2xl">Document Verification</CardTitle>
                  <CardDescription>
                    Thorough verification of property documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>OCR-based document analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cross-verification with government records</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Historical record analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-land-500/10 rounded-bl-full"></div>
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-land-100 dark:bg-land-900/30 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-land-600 dark:text-land-400" />
                  </div>
                  <CardTitle className="text-2xl">Blockchain Recording</CardTitle>
                  <CardDescription>
                    Secure and permanent recording on blockchain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tamper-proof record creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cryptographic verification of ownership</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Distributed ledger for redundancy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Detailed Process */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Detailed Verification Workflow</h2>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="rounded-full h-12 w-12 bg-land-500 text-white flex items-center justify-center font-bold text-lg">1</div>
                      <div className="h-full w-0.5 bg-land-200 dark:bg-land-700 mt-2"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">User Registration & KYC</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        All users undergo a comprehensive identity verification process that confirms their identity using Aadhaar-based authentication. This includes biometric verification and OTP confirmation.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                          <KeyRound className="h-5 w-5 mr-2 flex-shrink-0" />
                          Each verified user receives a unique digital identity on our platform that is cryptographically secure and tamper-proof.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="rounded-full h-12 w-12 bg-land-500 text-white flex items-center justify-center font-bold text-lg">2</div>
                      <div className="h-full w-0.5 bg-land-200 dark:bg-land-700 mt-2"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Property Documentation Verification</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Our platform uses advanced OCR and AI technology to analyze property documents, extracting key information and validating it against government databases.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                          <FileCheck className="h-5 w-5 mr-2 flex-shrink-0" />
                          A team of legal experts and land surveyors reviews complex cases to ensure complete accuracy before any property is registered on the blockchain.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="rounded-full h-12 w-12 bg-land-500 text-white flex items-center justify-center font-bold text-lg">3</div>
                      <div className="h-full w-0.5 bg-land-200 dark:bg-land-700 mt-2"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Physical Verification</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        For higher-value properties, our network of surveyors conducts physical verification to confirm boundaries and property details using advanced GIS mapping technology.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                          <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0" />
                          Satellite imagery and drone surveys provide additional verification data for rural and large properties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="rounded-full h-12 w-12 bg-land-500 text-white flex items-center justify-center font-bold text-lg">4</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Blockchain Registration</h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Once all verification steps are complete, the property data is cryptographically hashed and recorded on our blockchain, creating a permanent, tamper-proof record of ownership.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                          <Shield className="h-5 w-5 mr-2 flex-shrink-0" />
                          Each property registration generates a unique cryptographic proof that can be independently verified at any time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default VerificationProcess;
