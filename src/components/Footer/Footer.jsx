import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm mb-2">123 Fitness Street</p>
            <p className="text-sm mb-2">California, USA</p>
            <p className="text-sm">Email: info@gymmates.com</p>
          </div>
          <div className="col-span-1">
            <div><h2 className="text-2xl font-semibold mb-4">Follow Us</h2></div>
            <div className="flex space-x-4 md:ml-40">
              <a href="#" className="text-2xl">
              <i className=" fab fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl">
                <i className="fab fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white py-2 px-4 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} GymMates. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
