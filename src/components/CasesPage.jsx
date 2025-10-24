import React from 'react';

const CasesPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Cases</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our successful legal cases and see how we've helped clients achieve justice.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((caseNum) => (
          <div key={caseNum} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Case Study #{caseNum}</h2>
              <p>Successful resolution in business litigation matter</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasesPage;