import React from 'react'

export default function Hero() {
  return (
    <div id="home" className="p-6 bg-gray-50 min-h-screen scroll-mt-20">
    <div className='flex flex-col item-start justify-center px-6
    md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/main-page.jpg")] bg-no-repeat
    bg-cover bg-center h-screen'>
        <h1 className="px-3.5 py-1 mt-2 md:text-[50px] font-bold text-orange-500" >Yummy Restaurant...</h1>
         <p className="font-playfair text-2xl md:text-5xl font-bold mt-2 px-3.5">Where Every Bite Tells a Story!</p>
        <p className="max-w-130 mt-2 text-sm md:text-base px-3.5 py-2">At Yummy Restaurant, we bring you delicious, freshly prepared meals made with 
        love and the finest ingredients. Whether you're craving classic comfort food or exciting 
        new flavours, our menu has something for everyone. Dine in and order online - your perfect meal is just a bite away!</p>
        
        <div className='flex justify-start px-3 mt-2'>
         <button className="bg-orange-600 text-white px-2 py-1 rounded-md hover:bg-orange-700 transition">Reserve Table</button>
        </div>
    </div>
    </div>
  )
}
