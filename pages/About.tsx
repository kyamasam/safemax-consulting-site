
import React from 'react';
import Card from '../components/ui/Card';

const ValueItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <span>{children}</span>
    </li>
);

const About: React.FC = () => {
  const values = [
    "Integrity – Honest, transparent, and ethical practices",
    "Excellence – Delivering top-quality, results-oriented services",
    "Innovation – Applying modern, tech-savvy solutions",
    "Sustainability – Promoting eco-friendly and responsible practices",
    "Client Focus – Providing tailored solutions for every client",
  ];

  return (
    <>
      <header className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-heading">About Safemax Consultants</h1>
          <p className="mt-2 text-lg text-gray-300">Fostering a culture of risk awareness and compliance</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <Card>
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide innovative, reliable, and sustainable safety and environmental solutions
              that empower our clients to thrive while ensuring compliance with legal and regulatory frameworks.
            </p>
          </Card>
          <Card>
            <h2 className="text-3xl font-bold font-heading text-primary mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a trusted partner in advancing workplace safety and environmental sustainability,
              fostering a culture of risk awareness and compliance with regulatory standards.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/seed/about/600/400" alt="Team collaborating" className="rounded-lg shadow-xl"/>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold font-heading text-primary mb-6">Our Core Values</h2>
                <ul className="space-y-4 text-gray-700">
                {values.map((value, index) => (
                    <ValueItem key={index}>{value}</ValueItem>
                ))}
                </ul>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
