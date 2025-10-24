import React from 'react';

const LegalPractice = () => {
  const practiceAreas = [
    {
      id: 1,
      icon: '/images/business.png',
      title: 'Business Law',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 2,
      icon: '/images/child.png',
      title: 'Child Support',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 3,
      icon: '/images/call.png',
      title: 'Criminal Law',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 4,
      icon: '/images/business.png',
      title: 'Business Law',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 5,
      icon: '/images/child.png',
      title: 'Family Law',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
      id: 6,
      icon: '/images/call.png',
      title: 'Real Estate Law',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    }
  ];

  return (
    <section className="container mx-auto my-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">The Legal Practice Area</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages legal practice area these area are very important 
          to solve the problems occurs due to various type of problem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {practiceAreas.map(area => (
          <div key={area.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure className="px-10 pt-10">
              <img src={area.icon} alt={area.title} className="rounded-xl h-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">{area.title}</h3>
              <p>{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalPractice;