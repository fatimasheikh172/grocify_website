import { useState } from "react";
import React from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList"; // This is your data array
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";

const Products = () => {
    const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
    const [activeTab, setActiveTab] = useState("All");

    // Filter logic
    let filteredItem = activeTab === "All" 
        ? ProductList 
        : ProductList.filter(item => item.category === activeTab);

    // FIX: Added 'key' prop and renamed map variable for clarity
    const renderCards = filteredItem.slice(0, 8).map((item) => {
        return (
            <Cards 
                key={item.id || item.name} // Unique key is now provided
                image={item.image} 
                name={item.name} 
                price={item.price} 
            />
        );
    });

    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-20">
                <Heading highlight="Our " heading="Products" />

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 justify-center mt-10">
                    {categories.map((category) => {
                        return (
                            <button 
                                key={category} 
                                className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${
                                    activeTab === category 
                                    ? "bg-linear-to-b from-orange-400 to-orange-500 text-white" 
                                    : "bg-zinc-100" 
                                }`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Product List */}
                <div className="grid md:grid-cols-4 grid-col-1 gap-9 mt-20">
                    {renderCards}
                </div>

                {/* View All Button */}
                <div className="mt-15 mx-auto w-fit">
                    <Link 
                        to="/AllProducts" 
                        className="bg-linear-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold md:text-lg text-md hover:scale-105 smooth-transition-all duration-300 cursor-pointer block"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;