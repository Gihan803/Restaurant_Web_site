import React from 'react';

const Foods = () => {
  const items = [
    {
      name: 'Margherita Pizza',
      description: 'A classic Italian pizza topped with fresh mozzarella, tomatoes, and basil leaves, drizzled with olive oil.',
      price:'Rs.1200.00',
      Rating:'(4.2)',
      image:'pizza.png'


    },
    {
      name: 'Chicken Biryani',
      description: ' Aromatic basmati rice cooked with marinated chicken, saffron, and traditional Indian spices. Served with raita.',
      price:'Rs.800.00',
      Rating:'(4.5)',
      image:'biriyani.jpg'
    },
    {
      name: 'Cheeseburger Deluxe',
      description: 'Juicy beef patty layered with cheddar cheese, lettuce, tomato, onion, and burger sauce in a toasted sesame bun.',
      price:'Rs.1000.00',
      Rating:'(4.8)',
      image:'burger.jpeg'
    },
    {
      name: 'Seafood Ramen',
      description: ' Japanese noodle soup with prawns, squid, soft-boiled egg, spring onions, and seaweed in a miso broth.',
      price:'Rs.1500.00',
      Rating:'(4.9)',
      image:'ramen.jpeg'
    },
    {
      name: 'Chicken Tacos',
      description: 'Soft corn tortillas filled with grilled chicken, salsa, shredded cheese, and guacamole.',
      price:'Rs.900.00',
      Rating:'(4.6)',
      image:'tacos.jpg'
    },
    {
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce tossed with creamy Caesar dressing, parmesan cheese, and garlic croutons.',
      price: 'Rs.600.00',
      Rating: '(4.3)',
      image: 'salad.jpg'
    },
    {
      name: 'Spaghetti Carbonara',
      description: 'Pasta cooked in a rich sauce of eggs, parmesan, pancetta, and black pepper.',
      price: 'Rs.1100.00',
      Rating: '(4.4)',
      image: 'spaghetti.jpg'
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Warm, rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
      price: 'Rs.800.00',
      Rating: '(4.5)',
      image:'lavacake.jpg'
    },
    
  ];

return (
    <div id="foods" className="p-6 bg-gray-50 min-h-screen scroll-mt-20">
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-center">The best restaurants in Colombo</h1>
      <p className="text-gray-600 mb-8 text-center">Taste looking Gooood...</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
           
            <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden relative">
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  </div>
                </>
              ) : (
                <span className="text-gray-500">Image</span>
              )}
            </div>
            
            
            <div className="p-4 group-hover:bg-gray-50 transition-colors duration-300">
              <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                {item.name}
              </h3>
              
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                {item.description}
              </p>
              
              
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-green-600 group-hover:text-green-700 transition-colors duration-300">
                  {item.price}
                </p>
                
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-600">{item.Rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Foods;