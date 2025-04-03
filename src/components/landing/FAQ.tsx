
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is LandLedger and how does it work?",
      answer: "LandLedger is a blockchain-based land registry system designed for India. It stores land ownership records on a distributed ledger that cannot be tampered with. The system uses Aadhaar for identity verification and enables secure property transactions through smart contracts."
    },
    {
      question: "How does blockchain improve the current land registry system?",
      answer: "Blockchain technology provides immutability, transparency, and security to land records. Once recorded, data cannot be altered without consensus, creating a verifiable history of ownership. This reduces fraud, minimizes disputes, and streamlines the property registration process."
    },
    {
      question: "Is my Aadhaar information secure on the platform?",
      answer: "Yes, we adhere to the Supreme Court guidelines on Aadhaar usage. We implement advanced encryption and only store the minimum necessary information. Biometric data is never stored on our servers, and all verification is done through the official UIDAI API with your explicit consent."
    },
    {
      question: "How are land disputes handled on LandLedger?",
      answer: "Our platform includes a specialized dispute resolution module that uses AI to analyze historical records and flag discrepancies. When a dispute is raised, it creates a transparent tracking system. Parties can submit evidence, and the system facilitates resolution through digital mediation before escalation to courts."
    },
    {
      question: "Can I use my digital land record as collateral for loans?",
      answer: "Yes, that's one of the key benefits of LandLedger. The verified digital land titles can be used as collateral for loans from partner financial institutions. The blockchain verification gives banks greater confidence in the authenticity of ownership, potentially leading to faster loan approvals."
    },
    {
      question: "What happens if I don't have existing documentation for my land?",
      answer: "If you don't have complete documentation, you can still initiate the registration process. Our system works with local revenue departments to verify claims through alternative sources like tax records and local attestations. A surveyor may be assigned to verify physical boundaries before digitization."
    },
    {
      question: "How much does it cost to register my property on LandLedger?",
      answer: "The registration fee is set by individual state governments and varies by location and property value. In most cases, the fees are lower than traditional registration due to reduced processing costs. Some states offer special subsidies for small landholders and rural properties."
    },
    {
      question: "Can I access LandLedger if I don't have internet access?",
      answer: "Yes, we've established partnerships with Common Service Centers (CSCs) across rural India where trained operators can help you access the system. For areas with limited connectivity, we also offer offline processing with periodic synchronization when connectivity is available."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Get answers to common questions about our blockchain-based land registry system
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-gray-900 dark:text-white hover:no-underline">
                  <div className="font-medium">{faq.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
