import React from 'react';

const Header = () => {
  return (
    <header className="container mx-auto">
      {/* Navbar */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Home</a></li>
              <li><a>Services</a></li>
              <li><a>Cases</a></li>
              <li><a>Blog</a></li>
              <li><a>Contact us</a></li>
            </ul>
          </div>
          <img src="/images/logo2.png" alt="Logo" className="h-8" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Services</a></li>
            <li><a>Cases</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Free Consultation</button>
        </div>
      </div>

      {/* Banner */}
      <div 
        className="hero min-h-[70vh] rounded-lg mb-8"
        style={{ backgroundImage: 'url(/images/banner.png)' }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">
              We Provide Effective <br /> Legal Solutions
            </h1>
            <p className="mb-5">
              We are always trying to solve the problems of the people who are sufferers. 
              We have a large number of lawyers and judges who are solving many serious 
              issues of the people almost every day. So our institute is very much friendly.
            </p>
            <div className="flex gap-4 justify-center items-center">
              <input 
                type="text" 
                placeholder="Search Your services" 
                className="input input-bordered w-full max-w-xs text-black" 
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;