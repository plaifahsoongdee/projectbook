import React from "react";
import Navbar from "./Navbar";
import Swiper from "./swiper";
import Category from "./category";
import Books from "./Books";
import ImageGallery from "./ImageGallery";

const Dashboard = () => {
  const customer = { username: "" };

  return (
    <div className="bg-[#FFFBF4] min-h-screen">
      <Navbar customer={customer} />
      <div className="container mx-auto px-4">
        <Swiper />
        <Category />
        <Books /> {/* ดึงข้อมูลจาก API โดยตรง */}
        <ImageGallery />
      </div>
    </div>
  );
};

export default Dashboard;
