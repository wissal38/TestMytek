import { useState, useEffect } from 'react';
import { Link } from 'wouter';

// Slides data for carousel
const SLIDES = [
  {
    id: 1,
    image: "climm.jfif",
    title: "RÉZERVI",
    subtitle: "راحتك للصيف",
    description: "Jusqu'à 3 FOIS SANS INTÉRÊT",
    tag: "INSTALLATION GRATUITE",
    smallText: "pour tout achat d'un climatiseur valable jusqu'au 30/04/2025",
    bgColor: "#0070B6",
    buttonText: "PROFITEZ"
  },
  {
    id: 2,
    image: "re.jfif",
    title: "RÉFRIGÉRATEUR INOX",
    price: "3799",
    oldPrice: "3999",
    features: ["700 Litres", "NOFROST", "A++"],
    bgColor: "#222222",
    buttonText: "ACHETER"
  },
  {
    id: 3,
    image: "ip15.jfif",
    title: "NEW",
    subtitle: "iPhone 15 Pro Max",
    description: "À partir de 5999 DT",
    bgColor: "#333333",
    buttonText: "VOIR PLUS"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = SLIDES.length;

  const goToSlide = (index: number) => {
    if (index < 0) {
      setCurrentSlide(slideCount - 1);
    } else if (index >= slideCount) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const renderSlideContent = (slide: typeof SLIDES[0], index: number) => {
    if (index === 0) {
      // Climatiseur slide
      return (
        <div className="flex h-full">
          <div className="w-1/2 flex flex-col justify-center items-start p-8">
            <div className="bg-[#E41F18] text-white text-4xl font-bold p-3 mb-3">
              {slide.title}
            </div>
            <h3 className="text-white text-3xl font-bold mb-2 rtl">{slide.subtitle}</h3>
            <p className="text-white text-xl mb-4">
              <span className="font-bold">Jusqu'à </span>
              <span className="text-[#E41F18] bg-white p-1 font-bold">3 FOIS</span>
              <span className="font-bold"> SANS INTÉRÊT</span>
            </p>
            <div className="bg-yellow-400 text-[#E41F18] rounded-full p-2 font-semibold mb-4 flex items-center">
              <div className="bg-white p-1 mr-2 rounded-full">
                <i className="fas fa-tools text-[#E41F18]"></i>
              </div>
              {slide.tag}
            </div>
            <p className="text-white text-sm mb-4">{slide.smallText}</p>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src={slide.image} alt={slide.title} className="max-h-full" />
          </div>
        </div>
      );
    } else if (index === 1) {
      // Réfrigérateur slide
      return (
        <div className="flex h-full">
          <div className="w-1/2 flex flex-col justify-center items-center p-8">
            <img src="ref.png" alt="Beko" className="mb-4" />
            <div className="text-white uppercase text-center">
              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-yellow-400 text-6xl font-black">
                {slide.price}<span className="text-xl align-top">DT</span>
              </p>
              <p className="text-xl line-through">{slide.oldPrice}DT</p>
            </div>
            <div className="flex mt-4 space-x-4">
              {slide.features?.map((feature, i) => (
                <div key={i} className={`p-2 rounded ${i === 0 ? 'bg-white text-black' : i === 1 ? 'bg-black text-white' : 'bg-green-500 text-white'}`}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src={slide.image} alt={slide.title} className="max-h-full" />
          </div>
        </div>
      );
    } else {
      // Smartphone slide
      return (
        <div className="flex h-full">
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <div className="bg-[#E41F18] text-white text-2xl font-bold inline-block p-2 mb-4">
              {slide.title}
            </div>
            <h2 className="text-white text-4xl font-bold mb-3">{slide.subtitle}</h2>
            <p className="text-white text-xl mb-6">{slide.description}</p>
            <Link href="#" className="bg-white text-[#E41F18] hover:bg-gray-100 px-6 py-2 rounded-md font-semibold inline-block">
              {slide.buttonText}
            </Link>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src={slide.image} alt={slide.title} className="max-h-full" />
          </div>
        </div>
      );
    }
  };

  return (
    <section className="relative my-4">
      <div className="container mx-auto px-4">
        {/* Hero Carousel */}
        <div className="relative overflow-hidden h-96 rounded-sm shadow-md">
          {/* Carousel images */}
          <div 
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {SLIDES.map((slide, index) => (
              <div 
                key={slide.id} 
                className="min-w-full h-full relative"
                style={{ backgroundColor: slide.bgColor }}
              >
                {renderSlideContent(slide, index)}
              </div>
            ))}
          </div>
          
          {/* Carousel controls */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center z-10"
            onClick={() => goToSlide(currentSlide - 1)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 flex items-center justify-center z-10"
            onClick={() => goToSlide(currentSlide + 1)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full bg-white ${index === currentSlide ? 'bg-opacity-100' : 'bg-opacity-40'}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}