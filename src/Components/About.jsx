import React, { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [imageError, setImageError] = useState(false); 

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="about" className="p-6 bg-gray-50 min-h-screen scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
         
            <div className="h-80 lg:h-auto relative group overflow-hidden bg-gray-200">
              {!imageError ? (
                <img
                  src="resturent.jpg"
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={() => setImageError(true)} 
                />
              ) : (
            
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <span className="text-6xl block mb-2">🍽️</span>
                    <h3 className="text-2xl font-bold italic">Yummy Restaurant</h3>
                  </div>
                </div>
              )}
            </div>

            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">Our Story</span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                About Us
              </h1>
              
              <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
                <p>
                  Welcome to <span className="font-bold text-orange-600">Yummy Restaurant</span> – Where every bite is a delight!
                </p>
                
                <p>
                  At Yummy, we bring you a mouthwatering fusion of local and international flavors, crafted with love and the freshest ingredients.
                </p>

                <div 
                  className={`transition-all duration-500 overflow-hidden ${
                    showMore ? 'max-h-250 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 space-y-4 border-t border-gray-100 mt-4">
                    <p>
                      Our journey started in 2018 with a simple vision: to create a place where food lovers enjoy authentic flavors in a warm environment.
                    </p>
                    <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                      <h3 className="font-bold text-gray-900">Our Promise</h3>
                      <p className="text-sm italic">Fresh ingredients, highest hygiene, and memorable tastes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={toggleShowMore}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full shadow-lg shadow-orange-200 transition-all active:scale-95"
                >
                  {showMore ? 'See Less' : 'Read Our Full Story'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;