
import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const Home: React.FC = () => {
  const services = [
    "Occupational Safety & Health Consultancy",
    "Environmental Management Consultancy",
    "Training & Capacity Building",
    "Government Relations & Compliance",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary leading-tight mb-4">
            Modern Solutions for Safer, Greener Futures
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner in Occupational Safety, Health & Environmental Management
          </p>
          <Button to="/contact">Get in Touch</Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Our Core Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                <CheckIcon className="w-8 h-8 text-secondary mr-4 flex-shrink-0" />
                <p className="text-lg font-medium text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
              <img src="https://picsum.photos/600/400?grayscale" alt="Professional meeting" className="rounded-lg shadow-xl"/>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Safemax Consultants Limited is a professional consultancy firm based in Mombasa, Kenya.
              We help organizations and individuals create safe workplaces, achieve compliance, and
              adopt sustainable practices that safeguard people and the environment.
            </p>
            <Button to="/about" variant="secondary">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Let’s Make Your Workplace Safer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Talk to our experts today and take the first step toward compliance and sustainability.
          </p>
          <Button to="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
};

export default Home;
