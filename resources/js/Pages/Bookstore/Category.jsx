import React from "react";
import { FaGraduationCap, FaBook, FaUserFriends, FaBookOpen, FaAppleAlt, FaLaughBeam } from "react-icons/fa";

const categories = [
  { name: "การศึกษา", icon: <FaGraduationCap /> },
  { name: "นิยาย", icon: <FaBook /> },
  { name: "นวนิยาย", icon: <FaUserFriends /> },
  { name: "วรรณกรรม", icon: <FaBookOpen /> },
  { name: "อาหารและสุขภาพ", icon: <FaAppleAlt /> },
  { name: "การ์ตูนและมังงะ", icon: <FaLaughBeam /> }
];

const Category = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">หมวดหมู่</h2>
      <div className="flex flex-wrap gap-6 justify-start">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center p-8 bg-[#BA7D66] text-white rounded-full w-28 h-28">
              <span className="text-5xl text-white">{category.icon}</span>
            </div>
            <span className="text-sm text-center mt-2">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
