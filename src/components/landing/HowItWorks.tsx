
import {
  Upload,
  UserCheck,
  MapPin,
  FileCheck,
  Key,
  Handshake
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserCheck className="h-10 w-10 text-white" />,
      title: "User Registration",
      description: "Create an account with Aadhaar verification to establish your secure digital identity on the platform.",
      bgColor: "bg-land-600 dark:bg-land-700",
      number: "01"
    },
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Document Upload",
      description: "Upload existing land documents which are digitized, verified, and linked to your digital identity.",
      bgColor: "bg-saffron-500 dark:bg-saffron-600",
      number: "02"
    },
    {
      icon: <MapPin className="h-10 w-10 text-white" />,
      title: "Land Verification",
      description: "Government surveyors validate physical boundaries using GIS mapping technology.",
      bgColor: "bg-land-600 dark:bg-land-700",
      number: "03"
    },
    {
      icon: <FileCheck className="h-10 w-10 text-white" />,
      title: "Blockchain Recording",
      description: "Land records are hashed and recorded on the blockchain with timestamps for immutable proof.",
      bgColor: "bg-saffron-500 dark:bg-saffron-600",
      number: "04"
    },
    {
      icon: <Key className="h-10 w-10 text-white" />,
      title: "Smart Contract Creation",
      description: "Digital property rights secured with cryptographic keys enable smart contracts for transactions.",
      bgColor: "bg-land-600 dark:bg-land-700",
      number: "05"
    },
    {
      icon: <Handshake className="h-10 w-10 text-white" />,
      title: "Seamless Transfers",
      description: "Transfer property with secure biometric verification, instant payments, and automatic recording.",
      bgColor: "bg-saffron-500 dark:bg-saffron-600",
      number: "06"
    }
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4 animate-fade-in">
            How LandLedger Works
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 animate-fade-in animation-delay-300">
            A simple, secure process for managing your land records on the blockchain
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 md:mb-24 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>

                {/* Center Icon */}
                <div className="md:w-2/12 flex justify-center my-4 md:my-0 relative">
                  <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center z-10 shadow-lg relative`}>
                    {step.icon}
                    
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-900 dark:text-gray-200">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
