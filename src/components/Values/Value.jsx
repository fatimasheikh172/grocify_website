import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import backet from "../../assets/basket-full-vegetables.png";

const Value = () => {
  const leftSide = values.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        <div className="">
          <span className="bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex justify-center items-center text-3xl text-white">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold ">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightSide = values.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7">
        <div className="">
          <span className="bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex justify-center items-center text-3xl text-white">
            {item.icon}
          </span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-3xl font-bold ">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading highlight="Our " heading="Values" />
      <div className="flex md:flex-row flex-col md:gap-5 gap-15 mt-15 ">
        {/*right side  */}
        <div className="md:min-h-100 gap-15 flex flex-col justify-between">{leftSide}</div>
        <div className="md:flex hidden w-1/2">
          <img src={backet} />
        </div>
        {/* left side  */}
        <div className="md:min-h-100 gap-15 flex flex-col justify-between"> {rightSide}</div>
      </div>
    </section>
  );
};

export default Value;

const values = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <FaSeedling />,
  },
];
