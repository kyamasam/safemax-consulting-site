
import React from 'react';
import Card from '../components/ui/Card';

const ClientIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);


const Clients: React.FC = () => {
  const clientSectors = [
    {
      name: "Industrial facilities and manufacturing plants",
      clients: [
        { name: "Cup of Joe", url: null },
        { name: "Waso Tea Enterprise Limited", url: null },
        { name: "Milele Beach Hotel & Resort", url: "https://milelebeachhotel.com/" },
        { name: "English Point Marina Hotel", url: "https://englishpointmarina.com/" },
        { name: "Focus Container Freight Station Limited", url: "https://focuscfs.com/" },
        { name: "Pharmacity Pharmaceuticals Limited", url: null },
        { name: "Saj Ceramics", url: "https://sajceramics.com/" },
        { name: "Alsai Kenya Limited (SAI ROCK BEACH RESORT & SPA)", url: "https://www.sairock.co.ke/" }
      ]
    },
    { name: "Educational institutions", clients: [] },
    { name: "Non-Governmental Organizations (NGOs)", clients: [] },
    { name: "Government institutions and agencies", clients: [] },
    { name: "Individual clients", clients: [] },
  ];

  return (
    <>
      <header className="bg-accent text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-heading">Our Clients</h1>
          <p className="mt-2 text-lg text-gray-200">Partnering with a diverse range of organizations</p>
        </div>
      </header>
      
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <h2 className="text-3xl font-bold font-heading text-primary mb-8">Who We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {clientSectors.map((sector, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                     <div className="flex items-center">
                        <ClientIcon className="w-10 h-10 text-primary mr-4 flex-shrink-0"/>
                        <span className="text-lg text-gray-700 font-medium">{sector.name}</span>
                     </div>
                     {sector.clients && sector.clients.length > 0 && (
                        <ul className="list-disc list-inside mt-4 pl-10 space-y-2 text-gray-600">
                          {sector.clients.map((client, clientIndex) => (
                            <li key={clientIndex}>
                              {client.url ? (
                                <a href={client.url} target="_blank" rel="noopener noreferrer" className="hover:text-secondary underline transition-colors">
                                  {client.name}
                                </a>
                              ) : (
                                client.name
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center grayscale opacity-60">
                <img src="https://picsum.photos/seed/logo1/200/100" alt="Client logo 1" className="mx-auto" />
                <img src="https://picsum.photos/seed/logo2/200/100" alt="Client logo 2" className="mx-auto" />
                <img src="https://picsum.photos/seed/logo3/200/100" alt="Client logo 3" className="mx-auto" />
                <img src="https://picsum.photos/seed/logo4/200/100" alt="Client logo 4" className="mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;