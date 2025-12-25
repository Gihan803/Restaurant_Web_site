import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div id="contact" className="p-6 bg-gray-50 min-h-screen scroll-mt-20">
      
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm">Find Us</h2>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">Get In Touch</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            <div className="lg:col-span-1 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-sm">123 Main Street, Colombo 03, Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 shrink" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-sm">+94 11 234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-sm">info@yummyrestaurant.lk</span>
                </div>
              </div>
            </div>

            
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-50 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    placeholder="Your Name" className="w-full px-5 py-3 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="Email Address" className="w-full px-5 py-3 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <textarea 
                  rows="4" name="message" required value={formData.message} onChange={handleChange}
                  placeholder="How can we help?" className="w-full px-5 py-3 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-all active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
           
            <div>
              <h3 className="text-white text-2xl font-black mb-4">YUMMY..!</h3>
              <p className="text-sm">Finest flavors in the heart of Colombo. Come hungry, leave happy!</p>
            </div>

            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#home" className="hover:text-orange-500">Home</a>
                <a href="#about" className="hover:text-orange-500">About Us</a>
                <a href="#foods" className="hover:text-orange-500">Foods</a>
              </div>
            </div>

            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Working Hours</h4>
              <p className="text-sm">Mon - Fri: 10:00 AM - 11:00 PM</p>
              <p className="text-sm">Sat - Sun: 09:00 AM - 12:00 PM</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs">
            <p>© 2025 Yummy Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;