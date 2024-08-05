import React from 'react'
import { Carousel } from 'react-responsive-carousel';
 
import pic from '../../assets/dp-world-logo-.jpg'
import pic2 from "../../assets/rwandair.png";
import pic3 from "../../assets/bollore.jpg";
import pic4 from "../../assets/magerwa.jpeg";
import pic5 from "../../assets/rra.jpg";
 

const OurPartners = () => {
    const testimonies = [
      {
        name: pic,
        mainImage: pic2,
        title: pic3,
      },
      {
        name: pic3,
        mainImage:pic4,
        title: pic5,
      },
      {
         
        mainImage: pic5,
        name:pic,
        title:pic2
         
      },
    ];

  return (
    <div>
      <div className="bg-slate-200 lg:px-[8rem] px-[1rem] mt-[4rem] pb-[5rem]">
        <h2 className="text-center text-5xl font-semibold py-8 text-[#03396C] font-roboto">
          Our Partners
        </h2>
        <Carousel
          showArrows={true}
          stopOnHover={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          interval={4000}
          autoPlay={true}

        >
          {testimonies.map((item) => {
            return (
              <div className="flex md:flex-row  md:space-x-4 space-y-4 md:space-y-0  flex-col items-center px-[2rem] justify-evenly py-8 ">
                <div className=" md:w-1/3">
                  <img
                    src={item.mainImage}
                    className="lg:h-[40vh] h-[30vh] md:h-[30vh] object-fit hover:brightness-50 transition-all duration-300 translate-y-[-10]"
                    alt=""
                  />
                </div>
                <div className=" md:w-1/3">
                  <img
                    src={item.name}
                    className="lg:h-[40vh] h-[30vh] md:h-[30vh] object-fit hover:brightness-50 transition-all duration-300 translate-y-[-10]"
                    alt=""
                  />
                </div>
                <div className=" md:w-1/3">
                  <img
                    src={item.title}
                    className="lg:h-[40vh] h-[30vh] md:h-[30vh] object-fit hover:brightness-50 transition-all duration-300 translate-y-[-10]"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default OurPartners