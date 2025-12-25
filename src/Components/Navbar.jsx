import React, { useState } from 'react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Foods', href: '#foods' }, 
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <h1 className="text-2xl font-bold text-orange-600 cursor-pointer">
           Yummy..!
          </h1>
          
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-700 hover:text-orange-600 font-medium transition duration-300"
              >
                {link.name}
              </a>
            ))}
            <a href="#reserve" className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition shadow-md shadow-orange-200">
              Reserve Table
            </a>
          </div>

          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

     
      <div className={`md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={handleLinkClick} 
              className="block py-2 text-gray-700 hover:text-orange-600 font-medium border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#reserve" 
            onClick={handleLinkClick} 
            className="block w-full text-center bg-orange-600 text-white py-3 rounded-xl font-bold mt-4"
          >
            Reserve Table
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;