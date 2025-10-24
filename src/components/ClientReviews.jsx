import React from 'react';

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Muastafijul Islam Tamim",
      role: "Web Developer",
      image: "/images/player-1.png",
      review: "We are always trying to solve the problems of the people who are sufferers. We have a large number of lawyers and judges who are solving many serious issues of the people almost every day. So our institute is very much friendly."
    },
    {
      id: 2,
      name: "John Smith",
      role: "Business Owner",
      image: "/images/player-1.png",
      review: "Excellent legal service! They helped me navigate through complex business regulations and provided outstanding support throughout the process."
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Entrepreneur",
      image: "/images/player-1.png",
      review: "Professional team with deep expertise in corporate law. They delivered exactly what we needed for our startup legal requirements."
    }
  ];

  return (
    <section className="container mx-auto my-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Client Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the majority 
          have suffered alteration in some form, by injected humour.
        </p>
      </div>

      <div className="carousel w-full rounded-lg">
        {reviews.map((review, index) => (
          <div 
            key={review.id} 
            id={`slide${index + 1}`} 
            className="carousel-item relative w-full"
          >
            <div 
              className="hero min-h-[400px] w-full"
              style={{ backgroundImage: 'url(/images/banner.png)' }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white"
                  />
                  <h3 className="text-2xl font-bold">{review.name}</h3>
                  <p className="text-lg mb-4">{review.role}</p>
                  <p className="text-lg">{review.review}</p>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a 
                href={`#slide${index === 0 ? reviews.length : index}`} 
                className="btn btn-circle"
              >
                ❮
              </a> 
              <a 
                href={`#slide${index === reviews.length - 1 ? 1 : index + 2}`} 
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;