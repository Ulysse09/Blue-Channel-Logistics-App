import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import ship2 from "../assets/ship2.jpg";
import air from "../assets/air.jpg";
import trucks from "../assets/trucks.jpg";
import WhyChoose from "../sections/WhyChoose";
import blutruck from '../assets/blutruck.jpg'
import customIntersection from "../customHooks/customIntersection";
import OurPartners from "../components/OurPartners/OurPartners";
import WhyChooseNoCta from "../sections/WhyChooseNoCta";
const About = () => {
  const testimonies = [
    {
      name: "Paul",
      mainImage: ship2,
      title: "CEO",
    },
    {
      name: "Laup",
      mainImage: air,
      title: "CTO",
    },
    {
      name: "Cena",
      mainImage: trucks,
      title: "COO",
    },
  ];
  const section = customIntersection()
  return (
    <>
      {/* header image */}
      <div className="backgroundImage  -z-10 bg-cover bg-bottom relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-34 lg:pt-52  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-4xl lg:text-[2.7rem] font-bold  w-100 h-16   mt-4">
                About Us{" "}
              </h1>
            </span>
            <span>
              <p className=" text-white text-xl lg:text-2xl font-light font-roboto mt-4">
                Connecting Continents, Fast-tracking Success
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* header text  */}

      <div className=" w-full pt-[4rem] bg-slate-100 bg-gradient-to-b from-white">
        <div className="md:flex  px-4 md:px-8 justify-around   md:h-[30rem]">
          <div className=" font-roboto   md:w-1/2 pl-6 md:h-[29rem]">
            {/* </div> */}
            <h1 className="md:mt-[0.5rem] text-5xl text-sky-900 font-semibold">
              What we are about ?
            </h1>
            <p className="mt-[1.2rem] ">
              At Blue Channel Logistics, we are dedicated to transforming the
              logistics industry with innovative, reliable, and efficient
              solutions. Founded in 198, our company has grown into a trusted
              partner for businesses across various industries, delivering
              unparalleled logistics services that drive growth and success.
            </p>
            <p className="mt-[1.2rem] mb-8 md:mb-0">
              Our team of experienced professionals is the backbone of our
              company. With expertise in logistics, supply chain management, and
              customer service, our team is committed to providing exceptional
              service and support. We invest in continuous training and
              development to ensure our team is equipped with the latest
              industry knowledge and skills.
            </p>
          </div>
          <div className="pb-8 md:pb-0   flex flex-col items-center md:w-1/2 px-4 py-2 ">
            <img
              src={blutruck}
              alt=""
              className="  md:w-[32vw] md:h-[64vh]   rounded-md"
            />

           </div>
        </div>
      </div>

      <div className=" bg-sky-900 font-roboto w-full xl:h-[19rem] justify-evenly  ">
        <div className="md:flex md:justify-evenly px-[2rem]   h-full md:pt-20 md:pb-20 px-0 py-8 container mx-auto">
          <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-6  ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 p-4 rounded-md">
              M
            </h1>
            <div>
              <p className="pt-7 text-white font-bold text-3xl">Our mission</p>
              <p className="text-white max-w-sm">
                We meet our customers’ demands for a personal & profesional
                service by offering innovative supply chain solutions.
              </p>
            </div>
          </div>

          <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white  outline outline-1 px-5 py-4 rounded-md">
              V
            </h1>
            <div>
              <p className="pt-7 text-white text-3xl font-bold">Our vision</p>
              <p className="text-white max-w-sm">
                We proactively and constantly look for new possibilities.
                Therefore, an important part of our vision is to attract &
                retain.{" "}
              </p>
            </div>
          </div>

          <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 py-4 px-5 rounded-md">
              C
            </h1>
            <div>
              <p className="pt-7 text-white text-3xl font-bold">Core values</p>
              <p className="text-white max-w-sm">
                We meet our customers’ demands for a personal & profesional
                service by offering innovative supply chain solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <WhyChooseNoCta section={section} />

      {/* Team members  */}
       <OurPartners/>
    </>
  );
};

export default About;
