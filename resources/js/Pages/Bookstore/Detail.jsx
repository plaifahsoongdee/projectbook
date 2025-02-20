import React from "react";
import { usePage } from "@inertiajs/react";

const Detail = () => {
  const { book } = usePage().props;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{book.book_name}</h2>
      <div className="flex space-x-6">
        {/* รูปภาพหนังสือ */}
        <div className="w-1/3">
          <img
            src={book.image ? book.image : "/storage/image/book13.jpg"}
            alt={book.book_name}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* รายละเอียดหนังสือ */}
        <div className="w-2/3">
          <h3 className="text-xl font-bold mb-2">ข้อมูลหนังสือ</h3>
          <p className="text-md mb-4">{book.author || "ไม่ระบุผู้แต่ง"}</p>
          <p className="text-md mb-4">{book.description || "ไม่มีคำอธิบาย"}</p>
          <div className="text-lg font-bold text-[#BA7D66] mb-4">
            ฿{parseFloat(book.price).toFixed(2)}
          </div>
        </div>
      </div>
      {/* ปุ่มกลับ */}
      <div className="mt-4">
        <button
          onClick={() => window.history.back()}
          className="bg-[#BA7D66] text-white py-2 px-4 rounded-full"
        >
          กลับ
        </button>
      </div>
    </div>
  );
};

export default Detail;
