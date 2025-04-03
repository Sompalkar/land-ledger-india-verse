
import { 
  Lock, 
  FileCheck, 
  UserCheck, 
  Layers, 
  Zap, 
  BarChart3,
  Fingerprint,
  Building,
  Scale
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Lock className="h-6 w-6 text-land-600 dark:text-land-400" />,
      title: "Blockchain Security",
      description: "Immutable ledger ensures tamper-proof land titles with cryptographic security and transparent audit trails."
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-land-600 dark:text-land-400" />,
      title: "Aadhaar Integration",
      description: "Secure biometric authentication links land ownership directly with verified citizen identities."
    },
    {
      icon: <Layers className="h-6 w-6 text-saffron-600 dark:text-saffron-400" />,
      title: "Smart Contracts",
      description: "Automate property transactions, inheritance, and transfers with self-executing smart contracts."
    },
    {
      icon: <Scale className="h-6 w-6 text-saffron-600 dark:text-saffron-400" />,
      title: "Dispute Resolution",
      description: "AI-driven analysis of historical records helps resolve conflicts quickly and transparently."
    },
    {
      icon: <FileCheck className="h-6 w-6 text-land-600 dark:text-land-400" />,
      title: "Document Verification",
      description: "Digital verification of land documents with OCR technology and government database integration."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-land-600 dark:text-land-400" />,
      title: "Role-Based Access",
      description: "Granular permissions for citizens, surveyors, registrars, and government officials."
    },
    {
      icon: <Zap className="h-6 w-6 text-saffron-600 dark:text-saffron-400" />,
      title: "Rapid Processing",
      description: "Reduces property registration time from weeks to minutes with streamlined digital workflows."
    },
    {
      icon: <Building className="h-6 w-6 text-saffron-600 dark:text-saffron-400" />,
      title: "Rural Empowerment",
      description: "Enables rural entrepreneurs to use verified land titles as collateral for business loans."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-land-600 dark:text-land-400" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into land transactions, dispute resolution, and registration metrics."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Revolutionizing Land Registry in India
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our platform combines cutting-edge blockchain technology with user-friendly 
            interfaces to create a transparent and efficient land registry system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4 group-hover:bg-land-50 dark:group-hover:bg-land-900/30 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-land-600 dark:group-hover:text-land-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
