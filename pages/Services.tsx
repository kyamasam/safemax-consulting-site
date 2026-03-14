import React from 'react';
import Card from '../components/ui/Card';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      title: "Occupational Safety & Health Consultancy",
      list: [
        "Workplace safety audits and inspections",
        "OSH policy development and compliance support",
        "Fire safety training and emergency preparedness",
        "Risk assessments and hazard analysis",
        "Compliance with DOSHS standards",
        "First aid and safety awareness programs",
      ]
    },
    {
      title: "Environmental Management Consultancy",
      list: [
        "Environmental Impact Assessments (EIA) and Audits",
        "Waste management and pollution control strategies",
        "Resource efficiency and sustainability advisory",
        "Compliance with NEMA standards",
      ]
    },
    {
      title: "Training & Capacity Building",
      list: [
        "Customized staff training on OSH and environmental practices",
        "Safety drills, fire marshal and first aid training",
        "Environmental awareness campaigns",
      ]
    },
    {
      title: "Government Relations & Compliance",
      list: [
        "DOSHS – Occupational Safety compliance",
        "NEMA – Environmental compliance",
        "Fire Department – Fire safety compliance",
        "Public Health – Workplace hygiene & sanitation",
      ]
    }
  ];

  return (
    <>
      <header className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-heading">Our Comprehensive Services</h1>
          <p className="mt-2 text-lg text-gray-200">Tailored solutions for compliance and sustainability</p>
        </div>
      </header>

      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {servicesData.map((service, index) => (
              <Card key={index}>
                <h2 className="text-2xl font-bold font-heading text-primary mb-6">{service.title}</h2>
                <ul className="space-y-4">
                  {service.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-600">
                      <CheckIcon className="w-6 h-6 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;