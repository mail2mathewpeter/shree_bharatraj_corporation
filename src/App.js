import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  Home,
  Info,
  Package,
  Factory,
  Award,
  Users,
  Mail,
  FlaskConical,
  Sprout,
  Droplets,
  Utensils,
  Ship,
  Construction,
  Tractor,
  Lightbulb,
  Gauge,
  Thermometer,
  CloudLightning,
  Flame,
  Wrench,
  Shield,
  LifeBuoy,
  Warehouse,
  Syringe,
  Briefcase,
  HardHat,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navItems = [
    { name: 'Home', page: 'home', icon: Home },
    { name: 'About Us', page: 'about', icon: Info },
    { name: 'Products', page: 'products', icon: Package },
    { name: 'Industries', page: 'industries', icon: Factory },
    { name: 'Quality', page: 'quality', icon: Award },
    { name: 'Clients', page: 'clients', icon: Users },
    { name: 'Contact Us', page: 'contact', icon: Mail },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutSection />;
      case 'products':
        return <ProductsSection setSelectedProduct={setSelectedProduct} />;
      case 'industries':
        return <IndustriesSection />;
      case 'quality':
        return <QualitySection />;
      case 'clients':
        return <ClientsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection setCurrentPage={setCurrentPage} />;
    }
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-gray-100 font-sans antialiased text-gray-800 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white sticky top-0 z-50 shadow-lg border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center">
            <div className="ml-10 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img 
                src="/attachments/logo.jpeg" 
                alt="Shree Bharatraj Corporation Logo" 
                className="w-36 h-auto md:w-40 lg:w-44 object-contain transition-all duration-300 hover:scale-105 hover:brightness-110"
                onError={(e) => {
                  console.log('Logo failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium
                  ${currentPage === item.page 
                    ? 'text-indigo-600 bg-indigo-50 shadow-sm' 
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'}`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 text-sm font-medium
                      ${currentPage === item.page 
                        ? 'text-indigo-600 bg-indigo-50' 
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-100'}`}
                  >
                    <item.icon size={16} />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="container mx-auto px-4 py-6 md:py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shree Bharatraj Corporation. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onNavigateToContact={() => setCurrentPage('contact')}
        />
      )}
    </div>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">{title}</h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
    <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
  </div>
);

const HomeSection = ({ setCurrentPage }) => {
  const [currentClientSlide, setCurrentClientSlide] = useState(0);
  
  // Client images for homepage slider
  const clientImages = [
    'images.jfif',
    'BrahMos_Aerospace.svg.png',
    'fact-kerala-2023.png',
    'images (1).png',
    'images (2).jfif',
    'images (2).png',
    'images (3).jfif',
    'images (3).png',
    'images (4).jfif',
    'images (4).png',
    'images (5).png',
    'images (6).png',
    'images (7).png',
    'images (8).png',
    'images (9).png',
    'images.png',
    'Keltron_logo.png',
    'logoisro.png',
    'Malabar_Cements_Limited_logo.jpg',
    'Milma_logo.png',
    'Travancore_Titanium_FC.svg.png'
  ];

  const clientsToShow = 8; // Number of clients to show at once (4 per row, 2 rows)
  const totalClientSlides = Math.ceil(clientImages.length / clientsToShow);

  // Auto-slide functionality for clients
  useEffect(() => {
    if (totalClientSlides > 1) {
      const interval = setInterval(() => {
        setCurrentClientSlide((prev) => (prev + 1) % totalClientSlides);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [totalClientSlides]);

  const nextClientSlide = () => {
    setCurrentClientSlide((prev) => (prev + 1) % totalClientSlides);
  };

  const prevClientSlide = () => {
    setCurrentClientSlide((prev) => (prev - 1 + totalClientSlides) % totalClientSlides);
  };

  return (
  <section id="home" className="relative py-2 md:py-3 lg:py-4">
    
    <div className="text-center mb-8 md:mb-12 relative z-10">
      <div className="relative bg-gradient-to-br from-black/30 via-black/20 to-black/40 backdrop-blur-lg text-white rounded-3xl p-8 md:p-12 lg:p-16 xl:p-20 shadow-2xl border border-white/30 overflow-hidden min-h-[70vh] flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          <img 
            src="/attachments/night-view-illuminated-refinery-by-water.jpg"
            alt="Industrial Excellence Background"
            className="w-full h-full object-cover scale-110 transition-transform duration-2000 hover:scale-115"
            onLoad={() => console.log('✅ Background image loaded successfully')}
            onError={(e) => {
              console.log('❌ Background image failed to load:', e.target.src);
              console.log('Trying alternative path...');
              e.target.src = './attachments/night-view-illuminated-refinery-by-water.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/25 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-transparent to-blue-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10"></div>
        </div>
        <div className="text-center relative z-10">
          <div className="bg-black/[0.02] backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-sm">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-3 leading-tight text-white" style={{ 
              textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.8)',
              letterSpacing: '0.5px'
            }}>
              <span className="block mb-2 animate-fade-in-up">
                Delivering Industrial Excellence
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-yellow-300" style={{ 
                textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 10px rgba(255,215,0,0.8)',
                letterSpacing: '1px'
              }}>
                Since 1989
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mx-auto rounded-full shadow-sm mb-4"></div>
            
            <p className="text-sm sm:text-base md:text-lg font-medium mb-4 max-w-4xl mx-auto leading-relaxed text-white" style={{ 
              textShadow: '1px 1px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.8)',
              lineHeight: '1.7'
            }}>
              For over <span className="font-bold text-yellow-300" style={{ 
                textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(255,215,0,0.8)'
              }}>35 years</span>, Shree Bharatraj Corporation has been powering progress with reliable industrial solutions. From steam systems to valves, piping, and safety equipment, we are a <span className="font-bold text-blue-300" style={{ 
                textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(59,130,246,0.8)'
              }}>trusted partner</span> for industries across India and beyond.
            </p>
          </div>
        </div>
        <div className="flex justify-center -mt-4 relative z-10">
          <div className="bg-black/[0.02] backdrop-blur-sm rounded-xl p-3 shadow-sm">
            <button
              onClick={() => setCurrentPage('products')}
              className="group bg-gradient-to-r from-white via-blue-50 to-indigo-50 text-indigo-700 font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-3xl border-2 border-white/40 backdrop-blur-sm overflow-hidden"
              style={{ 
                boxShadow: '0 15px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center">
                <span className="text-indigo-700 font-black text-lg animate-fade-in-up-delayed-2">
                  Explore Our Products
                </span>
                <ChevronRight className="ml-3 text-indigo-600 group-hover:translate-x-2 transition-transform duration-300 animate-bounce" size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Content below hero */}
    <div className="relative z-10 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center mb-8 md:mb-12">
          <HighlightCard title="35+ Years of Experience" icon={Sprout} />
          <HighlightCard title="ISO 9001 Certified" icon={Award} />
          <HighlightCard title="ISI & IBR Approved Products" icon={Shield} />
          <HighlightCard title="Trusted by Leading Industries" icon={Users} />
        </div>

   

        {/* About Section Content */}
        <div className="mt-16 md:mt-20">
          <SectionHeader 
            title="About Shree Bharatraj Corporation" 
            subtitle="Your Trusted Partner for Quality Industrial Solutions Since 1989" 
          />
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12 border border-indigo-200/50">
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
          Since our founding in 1989, we have been at the forefront of supplying high-quality industrial products across diverse sectors. With over three decades of experience, we continue to be a reliable partner for industries, distributors, and channel associates who trust us for consistency, value, and performance.
        </p>
        
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex-shrink-0">
              <ChevronRight className="text-white" size={20} />
            </div>
            <div>
              <span className="font-bold text-gray-800">35+ Years of Experience</span>
              <p className="text-gray-600 text-sm">A proven legacy of excellence in industrial solutions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex-shrink-0">
              <ChevronRight className="text-white" size={20} />
            </div>
            <div>
              <span className="font-bold text-gray-800">Wide Product Range</span>
              <p className="text-gray-600 text-sm">From steam traps to valves, couplings, and regulators</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex-shrink-0">
              <ChevronRight className="text-white" size={20} />
            </div>
            <div>
              <span className="font-bold text-gray-800">Quality You Can Trust</span>
              <p className="text-gray-600 text-sm">All vendors meet strict ISI and IBR standards
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex-shrink-0">
              <ChevronRight className="text-white" size={20} />
            </div>
            <div>
              <span className="font-bold text-gray-800">ISO 9001 Certified</span>
              <p className="text-gray-600 text-sm">Certified vendors to ensure safety, consistency and durability 
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200/50">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 text-center">
            At Shree Bharatraj Corporation, we believe in <span className="font-bold text-indigo-600">innovation</span>, <span className="font-bold text-indigo-600">teamwork</span>, and <span className="font-bold text-indigo-600">uncompromising quality</span>—delivering solutions that help industries thrive and grow.
          </p>
        </div>
      </div>
     </div>

         {/* Quality Section */}
         <div className="mt-16 md:mt-20">
           <SectionHeader title="Quality & Certifications" subtitle="Our commitment to excellence and industry standards." />
           <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12 border border-indigo-200/50">
         <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 md:mb-8 text-center">
         We associate with the vendors with highest industry standards to ensure safety and precision and performance 

         </p>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
           <QualityBadge title="ISO 9001:2015 Certified" />
           <QualityBadge title="ISI & IBR Approved Products" />
           <QualityBadge title="International Standards: ASTM, ANSI/ASME, DIN, JIS" />
           <QualityBadge title="Material Certifications: MTC, Pressure Testing, Chemical Resistance, Fire Safety" />
         </div>
         <p className="text-xs md:text-sm text-gray-500 leading-relaxed text-center">
           Our products are rigorously tested to ensure they meet global and local regulations for durability, safety, and performance.
         </p>
       </div>
     </div>

         <SectionHeader title="Industries We Serve" subtitle="Providing solutions across diverse industrial sectors" />
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 text-center">
           <IndustryIcon title="Chemicals" icon={FlaskConical} />
           <IndustryIcon title="Petrochemicals" icon={CloudLightning} />
           <IndustryIcon title="Fertilizers" icon={Tractor} />
           <IndustryIcon title="Power" icon={Lightbulb} />
           <IndustryIcon title="Food & Beverage" icon={Utensils} />
           <IndustryIcon title="Marine" icon={Ship} />
           <IndustryIcon title="Construction" icon={Construction} />
         </div>

         {/* Clients Section */}
         <div className="mt-16 md:mt-20">
           <SectionHeader title="Our Trusted Clients" subtitle="Building strong relationships with industry leaders across India" />
           <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 border border-indigo-200/50">
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 text-center">
          Trusted by leading organizations across diverse industries.
        </p>
        
        {/* Client Images Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentClientSlide * 100}%)` }}
            >
              {Array.from({ length: totalClientSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="space-y-4 px-4">
                    {/* First Row - 4 clients */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                      {clientImages.slice(slideIndex * clientsToShow, slideIndex * clientsToShow + 4).map((image, index) => (
                        <div 
                          key={`${slideIndex}-${index}`}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 rounded-2xl h-20 md:h-24 flex items-center justify-center hover:from-indigo-50 hover:to-blue-50 hover:shadow-lg transition-all duration-300 group"
                        >
                          <img 
                            src={`/imagesclient/${image}`}
                            alt={`Client ${slideIndex * clientsToShow + index + 1}`}
                            className="max-h-12 md:max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div 
                            className="hidden items-center justify-center text-gray-400 text-xs font-medium"
                            style={{ display: 'none' }}
                          >
                            Client {slideIndex * clientsToShow + index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Second Row - 4 clients */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                      {clientImages.slice(slideIndex * clientsToShow + 4, slideIndex * clientsToShow + 8).map((image, index) => (
                        <div 
                          key={`${slideIndex}-${index + 4}`}
                          className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 rounded-2xl h-20 md:h-24 flex items-center justify-center hover:from-indigo-50 hover:to-blue-50 hover:shadow-lg transition-all duration-300 group"
                        >
                          <img 
                            src={`/imagesclient/${image}`}
                            alt={`Client ${slideIndex * clientsToShow + index + 5}`}
                            className="max-h-12 md:max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div 
                            className="hidden items-center justify-center text-gray-400 text-xs font-medium"
                            style={{ display: 'none' }}
                          >
                            Client {slideIndex * clientsToShow + index + 5}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show if more than 8 images */}
          {totalClientSlides > 1 && (
            <>
              <button
                onClick={prevClientSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:shadow-xl z-10"
                aria-label="Previous slide"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600 rotate-180" />
              </button>
              <button
                onClick={nextClientSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:shadow-xl z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {totalClientSlides > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalClientSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentClientSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentClientSlide 
                      ? 'bg-indigo-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Clients Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setCurrentPage('clients')}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
          >
            View All Clients
            <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>

    {/* Contact Us Section */}
    <div className="mt-16 md:mt-20">
      <SectionHeader title="Contact Us" subtitle="Get in touch with our team for inquiries and support." />
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 border border-indigo-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="flex items-center justify-start mb-6">
              <img 
                src="/attachments/logo.jpeg" 
                alt="Shree Bharatraj Corporation Logo" 
                className="h-16 w-auto md:h-20 object-contain"
                onError={(e) => {
                  console.log('Logo failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Head Office</h3>
            <div className="space-y-3">
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-semibold">Address:</span> 138, Kumaranaasan Nagar Post Box No. 2061 Kadavanthara P. O. Cochin- 682020
              </p>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-semibold">Tel:</span> 91-484-2203239
              </p>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-semibold">Mobile:</span> 9847031023
              </p>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-semibold">Fax:</span> 91-484-2204385
              </p>
              <p className="text-sm md:text-base text-gray-600">
                <span className="font-semibold">Email:</span> shreebharatraj@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Enquiry Form</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </section>
  );
};

const HighlightCard = ({ title, icon: Icon }) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-indigo-200/50 flex flex-col items-center justify-center space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white group hover:border-indigo-300/70">
    <div className="p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full group-hover:animate-float shadow-lg">
      <Icon size={48} className="text-white md:w-14 md:h-14" />
    </div>
    <h3 className="text-base md:text-lg font-bold text-gray-800 text-center leading-tight group-hover:text-indigo-600 transition-colors">{title}</h3>
  </div>
);

const IndustryIcon = ({ title, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center p-4 md:p-6 group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-indigo-200/50 hover:shadow-xl hover:bg-white hover:border-indigo-300/70 transition-all duration-300">
    <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-3 md:p-4 rounded-full mb-3 group-hover:animate-float shadow-lg">
      <Icon size={28} className="text-white md:w-8 md:h-8" />
    </div>
    <span className="text-sm md:text-base font-semibold text-gray-800 text-center leading-tight group-hover:text-indigo-600 transition-colors">{title}</span>
  </div>
);

const AboutSection = () => (
  <section id="about" className="py-8 md:py-12 lg:py-20">
    <SectionHeader
      title="Shree Bharatraj Corporation – Delivering Industrial Excellence Since 1989"
      subtitle="Your Trusted Partner for Quality Industrial Solutions"
    />
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12">
      <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
        Since our founding in 1989, we have been at the forefront of supplying high-quality industrial products across diverse sectors. With over three decades of experience, we continue to be a reliable partner for industries, distributors, and channel associates who trust us for consistency, value, and performance.
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base md:text-lg">
        <li className="flex items-start">
          <ChevronRight className="flex-shrink-0 mt-1 text-indigo-600" size={20} />
          <span className="ml-2 text-gray-700"><span className="font-bold">35+ Years of Experience</span> – A proven legacy of excellence.</span>
        </li>
        <li className="flex items-start">
          <ChevronRight className="flex-shrink-0 mt-1 text-indigo-600" size={20} />
          <span className="ml-2 text-gray-700"><span className="font-bold">Wide Product Range</span> – From steam traps to valves, couplings, and regulators.</span>
        </li>
        <li className="flex items-start">
          <ChevronRight className="flex-shrink-0 mt-1 text-indigo-600" size={20} />
          <span className="ml-2 text-gray-700"><span className="font-bold">Quality You Can Trust</span> – All vendors meet strict ISI and IBR standards.
          </span>
        </li>
        <li className="flex items-start">
          <ChevronRight className="flex-shrink-0 mt-1 text-indigo-600" size={20} />
          <span className="ml-2 text-gray-700"><span className="font-bold">ISO 9001 Certified</span> – Certified vendors to ensure safety, consistency and durability 
          .</span>
        </li>
      </ul>
      <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-6">
        At Shree Bharatraj Corporation, we believe in innovation, teamwork, and uncompromising quality—delivering solutions that help industries thrive.
      </p>
    </div>
  </section>
);

const ProductsSection = ({ setSelectedProduct }) => {

  const products = [
    {
      title: 'Steam Engineering & Thermal Equipment',
      supplier: 'ESCO India',
      description: 'We provide advanced steam engineering and thermal equipment designed for energy efficiency and reliability. From steam traps to condensate recovery systems, our solutions ensure smooth operations and reduced energy losses across industries.',
      features: [
        'Energy-efficient steam trap solutions',
        'Advanced condensate recovery systems',
        'Comprehensive steam system monitoring',
        'Reduced energy losses and operational costs',
        'Reliable performance in harsh industrial environments'
      ],
      items: [
        'Steam Traps: Thermodynamic, Thermostatic, Ball Float, Inverted Bucket, Float & Thermostatic',
        'Steam System Components: Accessories, Monitoring Equipment, Condensate Recovery, Line Accessories',
      ],
      applications: ['Power Generation', 'Chemical Processing', 'Food & Beverage', 'Pharmaceuticals', 'Textile Industry'],
      icon: CloudLightning,
      image: 'Steam-Trap.jpg',
    },
    {
      title: 'Pipes & Pipe Systems',
      supplier: 'Chamunda Plastics, Poonam Industries',
      description: 'Our range of plastic and metal piping systems offers durability, chemical resistance, and versatility for a wide variety of applications. Whether it\'s high-pressure industrial use or specialized fluid transfer, we deliver the right piping solutions.',
      features: [
        'Superior chemical resistance',
        'High-pressure industrial applications',
        'Versatile material options',
        'Long-lasting durability',
        'Easy installation and maintenance'
      ],
      items: [
        'Plastic Pipes: HDPE, MDPE, PP, PPH, PVDF, PPR, PVC hoses',
        'Metal Pipe Fittings: Stainless steel (butt weld, socket weld, threaded, flanges)',
      ],
      applications: ['Chemical Processing', 'Water Treatment', 'Oil & Gas', 'Pharmaceuticals', 'Food Processing'],
      icon: Droplets,
      image: '2.jpg',
    },
    {
      title: 'Industrial Valves & Flow Control',
      supplier: 'Chamunda Plastics, Poonam Valves, Jekon Valves, Mahavir Valve, Kranti Group',
      description: 'We offer a comprehensive selection of manual, pneumatic, and specialty valves engineered for precision and safety. Designed for diverse industrial environments, our valves ensure efficient flow control and reliable system performance.',
      features: [
        'Precision flow control',
        'Pneumatic and manual operation',
        'High-pressure applications',
        'Corrosion-resistant materials',
        'Easy maintenance and repair'
      ],
      items: [
        'Manual Valves: Ball, Gate, Globe, Check, Butterfly, Plug, Needle',
        'Pneumatic Control Valves: Actuated ball & butterfly, Control Valves, Pneumatic Actuators, Positioners',
        'Specialty Valves: Pressure Relief, Pressure Reducing, Solenoid, Diaphragm, Pinch',
      ],
      applications: ['Oil & Gas', 'Chemical Processing', 'Water Treatment', 'Power Generation', 'Marine Industry'],
      icon: Gauge,
      image: '3.jpg',
    },
    {
      title: 'Instrumentation & Measurement',
      supplier: 'FBG India',
      description: 'Accurate measurement is at the heart of industrial efficiency. We supply advanced instruments for pressure, temperature, flow, and level monitoring—helping industries maintain safety, quality, and operational control.',
      features: [
        'High-precision measurements',
        'Real-time monitoring capabilities',
        'Digital and analog options',
        'Calibration and certification',
        'Remote monitoring integration'
      ],
      items: [
        'Pressure: Gauges, Transmitters, Switches',
        'Temperature: Gauges, Thermometers, RTD, Thermocouples, Transmitters',
        'Level & Flow: Gauges, Flow Meters, Level Switches',
      ],
      applications: ['Process Control', 'Quality Assurance', 'Safety Monitoring', 'Environmental Control', 'Research & Development'],
      icon: Thermometer,
      image: '4.jpg',
    },
    {
      title: 'Irrigation & Water Management',
      supplier: 'Poonam Valves',
      description: 'Our irrigation and water management solutions are built to maximize efficiency in agriculture and landscaping. From drip and sprinkler systems to fertigation units, we help optimize water use for sustainable growth.',
      features: [
        'Water-efficient irrigation systems',
        'Automated control systems',
        'Fertigation integration',
        'Durable field components',
        'Easy installation and maintenance'
      ],
      items: [
        'Micro Irrigation Systems: Drip & Sprinklers, Filters, Fertigation Systems',
        'Water Distribution: Irrigation valves, Timers, Water Meters',
      ],
      applications: ['Agriculture', 'Landscaping', 'Greenhouse Farming', 'Golf Courses', 'Urban Gardens'],
      icon: Sprout,
      image: '5.jpg',
    },
    {
      title: 'Boiler Accessories & Mountings',
      supplier: 'Mahavir Valve',
      description: 'We supply a complete range of boiler mountings and accessories that ensure safe, efficient, and compliant operations. Designed for performance and durability, these products support effective steam generation and utilization.',
      features: [
        'Safety compliance standards',
        'High-efficiency operation',
        'Durable construction',
        'Easy maintenance access',
        'Comprehensive monitoring'
      ],
      items: [
        'Mountings: Gauges, Safety Valves, Blowdown Valves, Feed Regulators',
        'Accessories: Steam Separators, Economizers, Superheaters, Boiler Tubes',
      ],
      applications: ['Power Plants', 'Industrial Boilers', 'Steam Generation', 'Heating Systems', 'Process Industries'],
      icon: Lightbulb,
      image: '6.jfif',
    },
    {
      title: 'Industrial Cleaning & Maintenance',
      supplier: 'Brushwell & Company',
      description: 'Maintaining clean and efficient equipment is vital for productivity. Our industrial brushes and cleaning tools are engineered for durability and precision, ensuring effective maintenance across different applications.',
      features: [
        'Durable construction materials',
        'Precision cleaning capabilities',
        'Versatile application range',
        'Easy handling and storage',
        'Cost-effective maintenance solutions'
      ],
      items: [
        'Industrial brushes: Tube, Pipe, Conveyor, Rotary, Strip, Twisted Wire',
        'Cleaning accessories: Holders, Rods, Maintenance Tools',
      ],
      applications: ['Heat Exchangers', 'Boiler Tubes', 'Conveyor Systems', 'Machinery Cleaning', 'Maintenance Operations'],
      icon: Wrench,
      image: '7_.jpg',
    },
    {
      title: 'Nylon & HDPE Tarpaulin',
      supplier: 'Lamifab Industries, Shivam Textiles & Proofing Industries',
      description: 'Our protective tarpaulins and industrial covers safeguard machinery, goods, and infrastructure against harsh weather and environmental conditions. Available in various materials and sizes, they deliver reliable protection wherever needed.',
      features: [
        'Weather-resistant materials',
        'UV protection capabilities',
        'Custom sizing options',
        'Heavy-duty construction',
        'Easy installation and removal'
      ],
      items: [
        'Tarpaulin Sheets: Poly, Heavy Duty, Nylon, Waterproof, UV Resistant',
        'Industrial Covers: Equipment covers, Shelters, Cargo Covers',
      ],
      applications: ['Equipment Protection', 'Cargo Covering', 'Construction Sites', 'Outdoor Storage', 'Marine Applications'],
      icon: Shield,
      image: '8.jpeg',
    },
    {
      title: 'Leak Prevention & Sealing Solutions',
      supplier: 'Surefix',
      description: 'We provide sealing products and leak prevention systems designed to minimize downtime and enhance safety. From gaskets and O-rings to repair kits, our solutions ensure dependable sealing in demanding conditions.',
      features: [
        'Leak-proof sealing technology',
        'High-temperature resistance',
        'Chemical compatibility',
        'Quick repair solutions',
        'Long-lasting performance'
      ],
      items: [
        'Leak repair: Sealants, Clamps, Repair Kits',
        'Sealing systems: O-rings, Mechanical Seals, Packing',
      ],
      applications: ['Pipeline Systems', 'Valve Sealing', 'Pump Maintenance', 'Equipment Repair', 'Preventive Maintenance'],
      icon: LifeBuoy,
      image: '9.jpg',
    },
    {
      title: 'Workplace Safety & First Aid',
      supplier: 'AOSSPL, ATG',
      description: 'Workplace safety is non-negotiable. We supply a complete range of PPE and first aid equipment to protect workers from hazards and ensure preparedness in case of emergencies.',
      features: [
        'Comprehensive safety protection',
        'Emergency response readiness',
        'Comfortable and durable design',
        'Compliance with safety standards',
        'Easy accessibility and storage'
      ],
      items: [
        'First Aid Kits',
        'PPE: Safety Shoes, Gloves, Masks, Helmets, Glasses, High-visibility Clothing',
      ],
      applications: ['Construction Sites', 'Manufacturing Plants', 'Chemical Facilities', 'Emergency Services', 'Industrial Maintenance'],
      icon: Syringe,
      image: '10.jfif',
    },
    {
      title: 'Fire Safety & Protection',
      supplier: 'AAG India, Chhatariya',
      description: 'Our fire safety solutions safeguard people and assets through advanced prevention, detection, and suppression systems. From extinguishers to alarms and hydrants, we deliver comprehensive fire protection.',
      features: [
        'Advanced detection systems',
        'Rapid response capabilities',
        'Comprehensive suppression options',
        'Regular maintenance support',
        'Compliance with fire codes'
      ],
      items: [
        'Fire Extinguishers, Hoses, Blankets, Hydrants, Pumps',
        'Detection: Smoke Detectors, Alarms, Emergency Lighting, Suppression Systems',
      ],
      applications: ['Industrial Facilities', 'Commercial Buildings', 'Residential Complexes', 'Marine Vessels', 'Aircraft'],
      icon: Flame,
      image: '11.jfif',
    },
    {
      title: 'Marine Safety Equipment',
      supplier: 'Multiple Vendors',
      description: 'Built for maritime conditions, our marine safety products meet international standards for reliability at sea. Life jackets, rafts, beacons, and navigation aids ensure safety in offshore and marine operations.',
      features: [
        'International maritime standards',
        'Corrosion-resistant materials',
        'Reliable performance at sea',
        'Easy deployment systems',
        'Regular inspection support'
      ],
      items: [
        'Life Jackets, Rafts, Flares, Rings, Beacons',
        'Marine Safety: Lighting, Harnesses, First Aid Kits',
      ],
      applications: ['Commercial Shipping', 'Offshore Platforms', 'Fishing Vessels', 'Recreational Boating', 'Marine Construction'],
      icon: Ship,
      image: '12.jpg',
    },
    {
      title: 'Material Handling & Mobility',
      supplier: 'Multiple Vendors',
      description: 'We offer a wide range of industrial wheels, tyres, and trolleys to simplify material movement. Engineered for strength and smooth operation, our solutions support safe and efficient handling.',
      features: [
        'Heavy-duty construction',
        'Smooth operation capabilities',
        'Load-bearing capacity',
        'Easy maneuverability',
        'Low maintenance requirements'
      ],
      items: [
        'Industrial Wheels: Rubber, PU, Caster, Pneumatic',
        'Material Handling: Trolleys, Hand Trucks, Wheel Assemblies',
      ],
      applications: ['Warehouse Operations', 'Manufacturing Plants', 'Construction Sites', 'Retail Environments', 'Hospitality Industry'],
      icon: Warehouse,
      image: '13.jfif',
    },
    {
      title: 'Specialized Safety Equipment',
      supplier: 'Magnum, The Mask Lab',
      description: 'For industries that demand advanced protection, we supply specialized safety gear such as respirators, breathing apparatus, and high-grade helmets. These products ensure maximum safety in high-risk environments.',
      features: [
        'Advanced protection technology',
        'High-risk environment suitability',
        'Comfortable long-term wear',
        'Filter replacement systems',
        'Compliance with safety regulations'
      ],
      items: [
        'Respiratory Protection: Masks, Respirators, Filters, Breathing Apparatus',
        'Head Protection: AC Helmets, Hard Hats, Face Shields',
      ],
      applications: ['Chemical Processing', 'Mining Operations', 'Asbestos Removal', 'Emergency Response', 'Industrial Maintenance'],
      icon: HardHat,
      image: '14_.jpg',
    },
  ];

  return (
    <section id="products" className="py-8 md:py-12 lg:py-20">
      <SectionHeader title="Our Products" subtitle="A comprehensive range of industrial solutions for your every need." />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            {...product} 
            onViewMore={() => setSelectedProduct(product)}
          />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ title, supplier, description, features, icon: Icon, image, onViewMore }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/30 flex flex-col h-full hover:shadow-2xl hover:bg-white hover:scale-[1.02] transition-all duration-500 group overflow-hidden relative">
    {/* Product Image */}
    {image && (
      <div className="relative h-36 md:h-44 overflow-hidden">
        <img 
          src={`/pics/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="hidden items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 text-indigo-600"
          style={{ display: 'none' }}
        >
          <Icon size={32} />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300">
          <Icon size={18} className="text-indigo-600" />
        </div>
        {/* Premium Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
          Premium
        </div>
      </div>
    )}
    
    <div className="p-5 md:p-7 flex flex-col flex-1">
      <div className="flex items-start mb-5">
        {!image && (
          <div className="p-3 md:p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl mr-4 md:mr-5 flex-shrink-0 group-hover:animate-float shadow-lg">
            <Icon size={24} className="text-white md:w-7 md:h-7" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold text-indigo-600">Supplier:</span> {supplier}
            </p>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="text-sm md:text-base text-gray-700 leading-relaxed mb-5 flex-1">
        <p className="mb-4 font-medium">{description}</p>
        
        {/* Features Preview */}
        <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-2xl p-4 border border-indigo-200/50 shadow-sm">
          <h4 className="font-bold text-indigo-700 text-sm mb-3 flex items-center">
            <CheckCircle className="mr-2" size={14} />
            Key Features:
          </h4>
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-gray-700 text-sm flex items-start">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-indigo-600 text-sm font-semibold flex items-center mt-2">
                <ArrowRight className="mr-1" size={12} />
                +{features.length - 3} more features...
              </li>
            )}
          </ul>
        </div>
      </div>
      
      {/* View More Button */}
      <div className="mt-auto pt-5">
        <button
          onClick={onViewMore}
          className="w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white text-sm md:text-base font-semibold py-3 px-6 rounded-2xl hover:from-indigo-700 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group/btn"
        >
          <span>View More Details</span>
          <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
        </button>
      </div>
    </div>
  </div>
);

const IndustriesSection = () => {
  const industries = [
    {
      name: 'Chemicals & Pharmaceuticals',
      description: 'Corrosion-resistant piping, sanitary valves, safety systems',
      icon: FlaskConical,
    },
    {
      name: 'Oil & Gas',
      description: 'High-pressure piping, valves, fire protection, instrumentation',
      icon: Briefcase,
    },
    {
      name: 'Water Treatment',
      description: 'Filtration, flow control, chemical handling',
      icon: Droplets,
    },
    {
      name: 'Food & Beverage',
      description: 'Sanitary piping, food-grade materials, cleaning solutions',
      icon: Utensils,
    },
    {
      name: 'Power Generation',
      description: 'Steam systems, boiler accessories, control instruments',
      icon: Lightbulb,
    },
    {
      name: 'Marine & Offshore',
      description: 'Marine safety, corrosion-resistant systems, weather protection',
      icon: Ship,
    },
    {
      name: 'Construction & Infrastructure',
      description: 'Piping, safety equipment, material handling solutions',
      icon: Construction,
    },
  ];

  return (
    <section id="industries" className="py-8 md:py-12 lg:py-20">
      <SectionHeader title="Industries We Serve" subtitle="Providing reliable solutions across diverse industrial sectors." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </section>
  );
};

const IndustryCard = ({ name, description, icon: Icon }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 border border-gray-200/50 flex items-start space-x-3 md:space-x-4 hover:shadow-xl hover:bg-white transition-all duration-300 group">
    <div className="p-2 md:p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex-shrink-0 group-hover:animate-float">
      <Icon size={20} className="text-white md:w-6 md:h-6" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 leading-tight group-hover:text-indigo-600 transition-colors">{name}</h3>
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">{description}</p>
    </div>
  </div>
);

const QualitySection = () => (
  <section id="quality" className="py-8 md:py-12 lg:py-20">
    <SectionHeader title="Quality & Certifications" subtitle="Our commitment to excellence and industry standards." />
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-12 text-center">
      <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6 md:mb-8">
      We associate with the vendors with highest industry standards to ensure safety and precision and performance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <QualityBadge title="ISO 9001:2015 Certified" />
        <QualityBadge title="ISI & IBR Approved Products" />
        <QualityBadge title="International Standards: ASTM, ANSI/ASME, DIN, JIS" />
        <QualityBadge title="Material Certifications: MTC, Pressure Testing, Chemical Resistance, Fire Safety" />
      </div>
      <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
        Our products are rigorously tested to ensure they meet global and local regulations for durability, safety, and performance.
      </p>
    </div>
  </section>
);

const QualityBadge = ({ title }) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-indigo-200/50 flex flex-col items-center justify-center h-full hover:shadow-2xl hover:bg-white hover:border-indigo-300/70 transition-all duration-300 group">
    <div className="p-4 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mb-4 group-hover:animate-float shadow-lg">
      <Award size={40} className="text-white md:w-10 md:h-10" />
    </div>
    <h3 className="text-sm md:text-base font-bold text-gray-800 text-center leading-tight group-hover:text-indigo-600 transition-colors">{title}</h3>
  </div>
);

const ClientsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Client images from the imagesclient folder
  const clientImages = [
    'images.jfif',
    'BrahMos_Aerospace.svg.png',
    'fact-kerala-2023.png',
    'images (1).png',
    'images (2).jfif',
    'images (2).png',
    'images (3).jfif',
    'images (3).png',
    'images (4).jfif',
    'images (4).png',
    'images (5).png',
    'images (6).png',
    'images (7).png',
    'images (8).png',
    'images (9).png',
    'images.png',
    'Keltron_logo.png',
    'logoisro.png',
    'Malabar_Cements_Limited_logo.jpg',
    'Milma_logo.png',
    'Travancore_Titanium_FC.svg.png'
  ];

  const slidesToShow = 6; // Number of images to show at once
  const totalSlides = Math.ceil(clientImages.length / slidesToShow);

  // Auto-slide functionality
  useEffect(() => {
    if (totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };


  return (
    <section id="clients" className="py-8 md:py-12 lg:py-20">
      <SectionHeader title="Clients & Partners" subtitle="Building strong relationships with industry leaders." />
      <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-12">
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 text-center">
          Trusted by leading organizations across diverse industries.
        </p>
        
        {/* Client Images Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 px-4">
                    {clientImages.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow).map((image, index) => (
                      <div 
                        key={`${slideIndex}-${index}`}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 rounded-2xl h-20 md:h-28 flex items-center justify-center hover:from-indigo-50 hover:to-blue-50 hover:shadow-lg transition-all duration-300 group"
                      >
                        <img 
                          src={`/imagesclient/${image}`}
                          alt={`Client ${slideIndex * slidesToShow + index + 1}`}
                          className="max-h-12 md:max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="hidden items-center justify-center text-gray-400 text-xs font-medium"
                          style={{ display: 'none' }}
                        >
                          Client {slideIndex * slidesToShow + index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show if more than 6 images */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:shadow-xl z-10"
                aria-label="Previous slide"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600 rotate-180" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-300 hover:shadow-xl z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-indigo-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Client Count Info */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Showcasing {clientImages.length} trusted partners and clients
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
 // const API_URL = process.env.REACT_APP_API_URL || 'http:localhost:5000'
  const API_URL = process.env.REACT_APP_API_URL || 'https://serverapi-phi.vercel.app'
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    address: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    address: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return emailRegex.test(value);
  };

  const validatePhone = (value) => {
    // Allows optional +, spaces, dashes, and digits; requires 7-15 digits total
    const digitsOnly = (value || '').replace(/\D/g, '');
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  };

  const validateForm = (data) => {
    const trimmed = {
      name: (data.name || '').trim(),
      company: (data.company || '').trim(),
      address: (data.address || '').trim(),
      email: (data.email || '').trim(),
      phone: (data.phone || '').trim(),
      message: (data.message || '').trim()
    };

    const newErrors = { name: '', company: '', address: '', email: '', phone: '', message: '' };

    if (!trimmed.name || trimmed.name.length < 2) {
      newErrors.name = 'Please enter your full name (min 2 characters).';
    }
    if (!trimmed.company) {
      newErrors.company = 'Please enter your company name.';
    }
    if (!trimmed.address || trimmed.address.length < 5) {
      newErrors.address = 'Please enter your address (min 5 characters).';
    }
    if (!trimmed.email || !validateEmail(trimmed.email)) {
      newErrors.email = 'Please enter a valid email (e.g., name@example.com).';
    }
    if (!trimmed.phone || !validatePhone(trimmed.phone)) {
      newErrors.phone = 'Please enter a valid phone number (7-15 digits).';
    }
    if (!trimmed.message || trimmed.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((msg) => msg === '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Trim and validate before submit
    const payload = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      address: formData.address.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim()
    };

    const isValid = validateForm(payload);
    if (!isValid) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    try {
     // const response = await fetch("http://127.0.0.1:5000/api/send-email", {
      const response = await fetch("https://serverapi-phi.vercel.app/api/send-email", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          address: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({ name: '', company: '', address: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Email sending failed:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} text-sm md:text-base`}
        required
      />
      {errors.name && <p className="text-red-600 text-xs md:text-sm">{errors.name}</p>}
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleInputChange}
        className={`w-full p-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.company ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} text-sm md:text-base`}
        required
      />
      {errors.company && <p className="text-red-600 text-xs md:text-sm">{errors.company}</p>}
      <textarea
        name="address"
        placeholder="Address"
        rows="2"
        value={formData.address}
        onChange={handleInputChange}
        className={`w-full p-3 rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.address ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} text-sm md:text-base resize-none`}
        required
      ></textarea>
      {errors.address && <p className="text-red-600 text-xs md:text-sm">{errors.address}</p>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} text-sm md:text-base`}
        required
      />
      {errors.email && <p className="text-red-600 text-xs md:text-sm">{errors.email}</p>}
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        className={`w-full p-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.phone ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} text-sm md:text-base`}
        required
      />
      {errors.phone && <p className="text-red-600 text-xs md:text-sm">{errors.phone}</p>}
      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        value={formData.message}
        onChange={handleInputChange}
        className={`w-full p-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-indigo-500'} text-sm md:text-base resize-none`}
        required
      ></textarea>
      {errors.message && <p className="text-red-600 text-xs md:text-sm">{errors.message}</p>}
      
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
          ✅ Message sent successfully! We'll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
          ❌ Failed to send message. Please try again or contact us directly.
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 text-sm md:text-base transform hover:scale-105 ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl'
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-8 md:py-12 lg:py-20">
      <SectionHeader title="Contact Us" subtitle="Get in touch with our team for inquiries and support." />
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 lg:p-12 border border-indigo-200/50 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div>
          
          <div className="flex items-center justify-start mb-6">
            <img 
              src="/attachments/logo.jpeg" 
              alt="Shree Bharatraj Corporation Logo" 
              className="h-16 w-auto md:h-20 object-contain"
              onError={(e) => {
                console.log('Logo failed to load');
                e.target.style.display = 'none';
              }}
            />
          </div>
        
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Head Office</h3>
          <div className="space-y-3">
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold">Address:</span> 138, Kumaranaasan Nagar Post Box No. 2061 Kadavanthara P. O. Cochin- 682020
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold">Tel:</span> 91-484-2203239
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold">Mobile:</span> 9847031023
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold">Fax:</span> 91-484-2204385
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <span className="font-semibold">Email:</span> shreebharatraj@gmail.com
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Enquiry Form</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const ProductModal = ({ product, onClose, onNavigateToContact }) => {
  const { title, supplier, description, icon: Icon, image } = product;

  // Enhanced product data with detailed specifications
  const getDetailedContent = (productTitle) => {
    const content = {
      'Steam Engineering & Thermal Equipment': {
        supplier: 'ESCO India (www.escoindia.com)',
        categories: [
          {
            title: 'Steam Traps',
            items: [
              'Thermodynamic Steam Traps - Flash steam operation, stainless steel construction',
              'Thermostatic Steam Traps - Temperature differential operation with balanced pressure',
              'Ball Float Steam Traps - Mechanical traps with continuous condensate discharge',
              'Inverted Bucket Steam Traps - Density-based operation for efficient condensate removal',
              'Float & Thermostatic Steam Traps - Combined float and air vent systems'
            ]
          },
          {
            title: 'Steam System Components',
            items: [
              'Steam Trap Accessories',
              'Steam System Monitoring Equipment',
              'Condensate Recovery Systems',
              'Steam Line Accessories'
            ]
          }
        ]
      },
      'Pipes & Pipe Systems': {
        supplier: 'Chamunda Plastics, Poonam Industries',
        categories: [
          {
            title: 'Plastic Pipes',
            items: [
              'HDPE Pipes (20mm to 630mm) - High-density polyethylene for chemical resistance',
              'MDPE Pipes - Medium-density polyethylene for water distribution',
              'PP Pipes - Polypropylene for chemical applications',
              'PPH Pipes - Polypropylene homopolymer for high-temperature applications',
              'PVDF Pipes - Polyvinylidene fluoride for extreme chemical resistance',
              'PPR Pipes - Polypropylene random copolymer for hot water systems',
              'PVC Non toxic Milk hose',
              'PVC heavy duty hose',
              'PVC duct hose',
              'PVC suction-delivery hose'
            ]
          },
          {
            title: 'Metal Pipe Fittings',
            items: [
              'Stainless Steel Fittings - Butt weld, socket weld, threaded and SS Flanges'
            ]
          }
        ]
      },
      'Industrial Valves & Flow Control': {
        supplier: 'Chamunda Plastics, Poonam Valves, Jekon Valves, Mahavir Valve, Kranti Group',
        categories: [
          {
            title: 'Manual Valves (0.5" to 12")',
            items: [
              'Ball Valves - Full port and reduced port, floating and trunnion mounted',
              'Gate Valves - Rising stem and non-rising stem',
              'Globe Valves - Straight and angle patterns',
              'Check Valves - Swing, lift, and wafer types',
              'Butterfly Valves - Wafer, lug, and flanged types',
              'Plug Valves - Lubricated and non-lubricated',
              'Needle Valves - Precise flow control'
            ]
          },
          {
            title: 'Pneumatic Control Valves',
            items: [
              'Pneumatic Actuated Ball Valves - Automated on/off control',
              'Pneumatic Actuated Butterfly Valves - Modulating control',
              'Control Valves - Proportional flow control',
              'Pneumatic Actuators - Single and double acting',
              'Valve Positioners - Feedback control systems',
              'Air Preparation Units - Filters, regulators, lubricators'
            ]
          },
          {
            title: 'Specialty Valves',
            items: [
              'Pressure Relief Valves - Safety and process protection',
              'Pressure Reducing Valves - Downstream pressure control',
              'Solenoid Valves - Electric actuation',
              'Diaphragm Valves - Sanitary applications',
              'Pinch Valves - Slurry and abrasive media'
            ]
          }
        ]
      },
      'Instrumentation & Measurement': {
        supplier: 'FBG India (fbgindia.com)',
        categories: [
          {
            title: 'Pressure Measurement',
            items: [
              'Pressure Gauges - Bourdon tube, diaphragm, and capsule types',
              'Digital Pressure Gauges - Electronic display and data logging',
              'Pressure Transmitters - 4-20mA and digital outputs',
              'Differential Pressure Gauges - Flow and level measurement',
              'Vacuum Gauges - Negative pressure measurement',
              'Pressure Switches - Automated pressure monitoring'
            ]
          },
          {
            title: 'Temperature Measurement',
            items: [
              'Temperature Gauges - Bimetallic and gas-filled',
              'Thermometers - Industrial and process applications',
              'Temperature Transmitters - Electronic temperature monitoring',
              'RTD Sensors - Resistance temperature detectors',
              'Thermocouples - Various types for different temperature ranges'
            ]
          },
          {
            title: 'Level & Flow Measurement',
            items: [
              'Level Gauges - Sight glasses and magnetic types',
              'Flow Meters - Various technologies for different applications',
              'Level Switches - Automated level control'
            ]
          }
        ]
      },
      'Irrigation & Water Management': {
        supplier: 'Poonam Valves (poonamvalves.com)',
        categories: [
          {
            title: 'Micro Irrigation Systems',
            items: [
              'Drip Irrigation Components - Emitters, tubing, and fittings',
              'Sprinkler Systems - Various spray patterns and ranges',
              'Micro Sprinklers - Low-volume precision irrigation',
              'Irrigation Filters - Sand, screen, and disc filters',
              'Fertigation Systems - Nutrient delivery systems'
            ]
          },
          {
            title: 'Water Distribution',
            items: [
              'Water Valves - Irrigation-specific valve designs',
              'Pressure Compensating Emitters - Uniform water distribution',
              'Irrigation Timers - Automated scheduling systems',
              'Water Meters - Flow measurement and monitoring'
            ]
          }
        ]
      },
      'Boiler Accessories & Mountings': {
        supplier: 'Mahavir Valve (mahavirvalve.com)',
        categories: [
          {
            title: 'Boiler Mountings',
            items: [
              'Water Level Gauges - Boiler water level indication',
              'Pressure Gauges - Boiler pressure monitoring',
              'Safety Valves - Boiler pressure relief',
              'Blow Down Valves - Boiler maintenance and cleaning',
              'Feed Water Regulators - Automatic water level control'
            ]
          },
          {
            title: 'Boiler Accessories',
            items: [
              'Steam Separators - Moisture removal from steam',
              'Economizers - Heat recovery systems',
              'Superheaters - Steam temperature enhancement',
              'Boiler Tubes - Heat exchange components'
            ]
          }
        ]
      },
      'Industrial Cleaning & Maintenance': {
        supplier: 'Brushwell & Company (indiamart.com/temp/brushwel)',
        categories: [
          {
            title: 'Industrial Brushes',
            items: [
              'Tube Cleaning Brushes - Heat exchanger and condenser maintenance',
              'Pipe Cleaning Brushes - Pipeline maintenance and cleaning',
              'Conveyor Brushes - Belt cleaning and maintenance',
              'Rotary Brushes - Mechanical cleaning applications',
              'Strip Brushes - Sealing and cleaning strips',
              'Twisted Wire Brushes - Flexible cleaning solutions'
            ]
          },
          {
            title: 'Cleaning Accessories',
            items: [
              'Brush Holders - Mounting and positioning systems',
              'Cleaning Rods - Extension and reach tools',
              'Brush Maintenance Tools - Cleaning and storage solutions'
            ]
          }
        ]
      },
      'Nylon & HDPE Tarpaulin': {
        supplier: 'Lamifab Industries, Shivam Textiles & Proofing Industries',
        categories: [
          {
            title: 'Tarpaulin Sheets',
            items: [
              'Poly Tarpaulin Sheets - Weather-resistant covers',
              'HDP Heavy-duty Tarpaulins - Industrial equipment protection',
              'Nylon Tarpaulin',
              'Waterproof Covers - Moisture protection',
              'UV Resistant Sheets - Sun protection applications',
              'Custom Tarpaulins - Specific size and shape requirements'
            ]
          },
          {
            title: 'Industrial Covers',
            items: [
              'Equipment Covers - Machinery protection',
              'Temporary Shelters - Construction and industrial sites',
              'Cargo Covers - Transportation protection'
            ]
          }
        ]
      },
      'Leak Prevention & Sealing Solutions': {
        supplier: 'Surefix (surefix.co.in)',
        categories: [
          {
            title: 'Leak Repair Solutions',
            items: [
              'Pipe Leak Sealants - Emergency and permanent repairs',
              'Leak Clamps - Mechanical leak stopping devices',
              'Pipe Repair Kits - Comprehensive repair solutions',
              'Rubber Gaskets - Various sizes and materials',
              'Sealant Compounds - Chemical sealing solutions'
            ]
          },
          {
            title: 'Sealing Systems',
            items: [
              'O-Rings - Various materials and sizes',
              'Mechanical Seals - Rotating equipment sealing',
              'Packing Materials - Valve and pump sealing'
            ]
          }
        ]
      },
      'Workplace Safety & First Aid': {
        supplier: 'AOSSPL, ATG Glove Solutions',
        categories: [
          {
            title: 'First Aid Equipment',
            items: [
              'First Aid Kits - Comprehensive emergency medical supplies'
            ]
          },
          {
            title: 'Personal Protective Equipment (PPE)',
            items: [
              'Safety Shoes - Steel toe, electrical hazard, and chemical resistant',
              'Industrial Gloves - Cut resistant, chemical resistant, and thermal protection',
              'Safety Masks - Respiratory protection for various hazards',
              'Safety Helmets - Head protection for construction and industrial use',
              'Safety Belt',
              'Safety Glasses - Eye protection equipment',
              'High-visibility Clothing - Reflective and fluorescent safety wear'
            ]
          }
        ]
      },
      'Fire Safety & Protection': {
        supplier: 'AAG India, Chhatariya',
        categories: [
          {
            title: 'Fire Fighting Equipment',
            items: [
              'Fire Extinguishers - Various types for different fire classes',
              'Fire Hoses - Single and multi-layered fire fighting hoses',
              'Fire Blankets - Flame suppression and protection',
              'Fire Hydrants - Water distribution systems',
              'Fire Pumps - Emergency water supply systems'
            ]
          },
          {
            title: 'Fire Detection & Alarm',
            items: [
              'Smoke Detectors - Early fire detection systems',
              'Fire Alarm Systems - Comprehensive fire warning systems',
              'Emergency Lighting - Power failure backup lighting',
              'Fire Suppression Systems - Automatic fire extinguishing systems'
            ]
          }
        ]
      },
      'Marine Safety Equipment': {
        supplier: 'Multiple Vendors',
        categories: [
          {
            title: 'Marine Safety Systems',
            items: [
              'Life Jackets - Personal flotation devices',
              'Life Rafts - Emergency evacuation equipment',
              'Marine Flares - Distress signaling devices',
              'Life Rings - Emergency rescue equipment',
              'Emergency Beacons - Location and communication devices'
            ]
          },
          {
            title: 'Marine Navigation & Safety',
            items: [
              'Marine Lighting - Navigation and deck lighting',
              'Safety Harnesses - Fall protection equipment',
              'Marine First Aid Kits - Maritime-specific medical supplies'
            ]
          }
        ]
      },
      'Material Handling & Mobility': {
        supplier: 'Multiple Vendors',
        categories: [
          {
            title: 'Industrial Wheels & Tyres',
            items: [
              'Rubber Tyres - Various sizes and load capacities',
              'Trolley Wheels - Light to heavy-duty applications',
              'PU Wheels - Polyurethane wheels for smooth operation',
              'Caster Wheels - Swivel and fixed configurations',
              'Pneumatic Wheels - Air-filled for shock absorption'
            ]
          },
          {
            title: 'Material Handling Equipment',
            items: [
              'Industrial Trolleys - Various load capacities and configurations',
              'Hand Trucks - Manual material transportation',
              'Wheel Assemblies - Complete wheel and bearing systems'
            ]
          }
        ]
      },
      'Specialized Safety Equipment': {
        supplier: 'Magnum, The Mask Lab',
        categories: [
          {
            title: 'Respiratory Protection',
            items: [
              'Safety Masks - Dust, chemical, and biological protection',
              'Respirators - Half-face and full-face protection',
              'Filter Cartridges - Replaceable filtration systems',
              'Breathing Apparatus - Self-contained breathing systems'
            ]
          },
          {
            title: 'Head Protection',
            items: [
              'AC Helmets - Electrical safety helmets',
              'Hard Hats - Construction and industrial head protection',
              'Face Shields - Impact and chemical protection',
              'Safety Caps - Lightweight head protection'
            ]
          }
        ]
      }
    };
    return content[productTitle] || null;
  };

  const detailedContent = getDetailedContent(title);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {image ? (
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={`/pics/${image}`}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="hidden items-center justify-center bg-white/20 backdrop-blur-sm"
                    style={{ display: 'none' }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-white/20 rounded-xl">
                  <Icon size={32} className="text-white" />
                </div>
              )}
              <div>
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                <p className="text-indigo-100 text-sm md:text-base">
                  <span className="font-semibold">Primary Supplier:</span> {detailedContent?.supplier || supplier}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <Info className="mr-2 text-indigo-600" size={20} />
              Overview
            </h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Detailed Product Categories */}
          {detailedContent && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                <Package className="mr-2 text-indigo-600" size={20} />
                Product Categories & Specifications
              </h3>
              <div className="space-y-4">
                {detailedContent.categories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-gray-50 rounded-xl p-4 md:p-6">
                    <h4 className="text-md font-bold text-gray-800 mb-3 flex items-center">
                      <ChevronRight className="mr-2 text-indigo-600" size={16} />
                      {category.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* Quality Certifications */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <Award className="mr-2 text-indigo-600" size={20} />
              Quality Certifications & Standards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Industry Standards Compliance</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">ISO 9001:2015 - Quality Management Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">ASTM Standards - Material specifications and testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">ANSI/ASME - American standards for piping and pressure vessels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">DIN Standards - German industrial standards</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">JIS Standards - Japanese industrial standards</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Material Certifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">Mill Test Certificates - Material traceability and properties</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">Pressure Testing Certificates - Hydrostatic and pneumatic testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">Chemical Resistance Certificates - Compatibility documentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700 text-sm">Fire Safety Certifications - Safety equipment compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Interested in this Product?</h3>
              <p className="text-gray-600 mb-4">Contact us for detailed specifications, pricing, and availability.</p>
              <button
                onClick={() => {
                  onClose();
                  onNavigateToContact();
                }}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
                <ArrowRight className="inline-block ml-2" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
