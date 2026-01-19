import React from "react";
import Heading from "../Heading/Heading";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { PiPlant, PiFactory } from "react-icons/pi";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Method = () => {
  const renderSteps = steps.map((item) => {
    return (
      /* FIX: Added key={item.id} here */
      <div key={item.id} className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? 'md:-mt-100' : ''}`}>
        <span className="w-18 h-18 text-8xl outline-[3px] outline-offset-7 bg-zinc-800 outline-zinc-800 outline-dashed flex rounded-full justify-center mx-auto items-center text-white">
          {item.number}
        </span>

        <div className="flex items-center mt-10 gap-x-5">
          <span className="flex bg-linear-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full justify-center items-center text-3xl ">
            {item.icon}
          </span>

          <div className="flex-1">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
            <p className="text-zinc-600 mt-2">{item.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20">
      <div className="w-fit mr-auto">
        <Heading highlight="Our" heading="Process" />
      </div>
      <div className="flex flex-wrap gap-y-17 md:mt-20 mt-10 justify-center items-center md:pt-50">
        {renderSteps}
      </div>
    </section>
  );
};

// Data array remains the same
const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader.",
    icon: <BsTruck />,
  },
];

export default Method;