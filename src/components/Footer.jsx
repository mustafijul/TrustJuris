import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Justice Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Justice</h3>
            <p className="text-gray-400">
              Justice In 1972, Russell Maroon Shoatz went to prison for the murder of a police officer. 
              He spent twenty-nine years in solitary confinement. Ashley Lucas, whose own father was 
              imprisoned when she was growing up, reported and wrote a deep-dive piece on Shoat life.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Useful Link</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Now */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Now</h3>
            <div className="space-y-3 text-gray-400">
              <p>4th 5t NW, Washington DC</p>
              <p>20530, United States</p>
              <p>+88 01750 000 000</p>
              <p>+88 01750 000 000</p>
              <p>info@gmail.com</p>
              <p>info@gmail.com</p>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-6">
              Subscribe for our latest & Articles. We Won't Give You Spam Mails
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="input input-bordered flex-1 text-black" 
              />
              <button className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;