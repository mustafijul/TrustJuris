import React from 'react';
import faq from "../assets/images/faq.png"
const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Flexbox vs Grid",
      answer: "The basic difference between CSS Grid Layout and CSS Flexbox Layout is that flexbox was designed for layout in one dimension - either a row or a column. Grid was designed for two-dimensional layout - rows, and columns at the same time."
    },
    {
      id: 2,
      question: "Purpose of media query",
      answer: "Media queries are a key part of responsive web design, as they allow you to create different layouts depending on the size of the viewport, but they can also be used to detect other things about the environment your site is running on, for example whether the user is using a touchscreen rather than a mouse."
    },
    {
      id: 3,
      question: "Box model of CSS",
      answer: "In CSS, the term 'box model' is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element."
    }
  ];

  return (
    <section className="container mx-auto my-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Any Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Many kind of passages of questionare available, but the majority have doesn't get 
          the proper answer alteration in some form, by injected humour.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1">
          <div className="join join-vertical w-full">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img src={faq} alt="FAQ" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;