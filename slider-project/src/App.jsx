
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    id: 1,
    name: "Matte Liquid Lipstick",
    price: 499,
    image: "/assets/lipstic.jpg",
    desc: "Long-lasting matte finish lipstick with a smooth texture."
  }, 
  {
    id: 2,
    name: "Hydrating Face Cream",
    price: 899,
    image: "/assets/facecram.avif",
    desc: "Deeply nourishes and moisturizes dry skin with aloe vera."
  },
  {
    id: 3,
    name: "Waterproof Eyeliner",
    price: 299,
    image: "/assets/eyeliner.png",
    desc: "Smudge-proof and waterproof liner for bold eyes all day."
  },
  {
    id: 4,
    name: "Floral Perfume Spray",
    price: 1199,
    image: "/assets/perfume.webp",
    desc: "Elegant floral fragrance that lasts 12+ hours."
  },
];

function App() {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  return (
    <div className='h-screen bg-slate-600 pt-10'>
      <div className='w-11/12 sm:w-3/4 m-auto'>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className='bg-white rounded-lg overflow-hidden shadow-lg m-2 flex flex-col justify-between h-80 sm:h-96'>
              <img 
                src={item.image} 
                alt={item.name} 
                className='w-40 sm:w-60 h-40 sm:h-60 object-contain block mx-auto mt-5'
              />
              <div className='p-5 sm:p-10 bg-blue-600 flex-1 flex items-center'>
                <p className='font-semibold text-white text-sm sm:text-base text-center'>{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
