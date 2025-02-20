import React, { useRef } from "react";
import { usePage, Link } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ไอคอนลูกศร

const CartoonAndManga = () => {
  const { books = [] } = usePage().props;
  const scrollRef = useRef(null); // ใช้อ้างอิง div ที่เลื่อน

  // ฟังก์ชันการเลื่อน
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 200; // ปรับค่านี้เพื่อกำหนดระยะการเลื่อน
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  // ฟังก์ชันจำกัดความยาวของชื่อหนังสือ
  const limitText = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  // ฟังก์ชันสำหรับเรียกดูรายละเอียดหนังสือ
  const viewBookDetails = (bookId) => {
    // คุณสามารถเพิ่มการกระทำเมื่อคลิกหนังสือ เช่นการ redirect หรือแสดงรายละเอียด
    console.log("View details for book with ID:", bookId);
  };

  return (
    <div className="container mx-auto p-4 relative">
      <h2 className="text-2xl font-bold mb-4">หนังสือหมวด Comics & Manga</h2>

      {/* ปุ่มเลื่อนซ้าย */}
      <button
        className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hidden sm:block z-10"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} className="text-[#BA7D66]" />
      </button>

      {/* Scroll แนวนอน */}
      <div className="relative">
        <div ref={scrollRef} className="overflow-x-auto py-3" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="flex space-x-4">
            {books.length > 0 ? (
              books.map((book) => (
                <div key={book.id} className="w-44 min-w-[180px] flex flex-col justify-between">
                  {/* รูปภาพหนังสือ */}
                  <Link
                    href={route('books.show', book.id)}
                    className="text-[#BA7D66] text-sm font-semibold mt-2"
                    onClick={() => viewBookDetails(book.id)}  // เรียกใช้ฟังก์ชัน viewBookDetails เมื่อคลิก
                  >
                    <img
                      src={book.image ? book.image : "/storage/image/book13.jpg"}
                      onError={(e) => { e.target.src = "/storage/image/book13.jpg"; }}
                      alt={book.book_name}
                      className="w-36 h-48 object-cover rounded-md"
                    />
                  </Link>

                  {/* รายละเอียดหนังสือ */}
                  <div className="w-36 mt-2 text-left flex-grow">
                    <h3 className="text-sm font-bold text-gray-900 block">
                      {limitText(book.book_name, 30)} {/* จำกัดความยาวของชื่อหนังสือ */}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">{book.author || "ไม่ระบุผู้แต่ง"}</p>
                    {/* แสดงหมวดหมู่หรือข้อความ "ไม่ระบุหมวดหมู่" */}
                    <p className="text-xs text-gray-500 truncate">{book.category ? book.category.category_name : "ไม่ระบุหมวดหมู่"}</p>
                  </div>

                  {/* ราคา */}
                  <div className="mt-2 text-[#BA7D66] font-bold text-lg text-center">
                    ฿{parseFloat(book.price).toFixed(2)}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">ไม่มีข้อมูลหนังสือในหมวด Comics & Manga</p>
            )}
          </div>
        </div>
      </div>

      {/* ปุ่มดูทั้งหมด */}
      <div className="absolute top-0 right-0 mr-4 mt-2">
        <button className="inline-flex items-center text-[#BA7D66] hover:text-[#9e6e51] text-sm font-semibold">
          ดูทั้งหมด
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>

      {/* ปุ่มเลื่อนขวา */}
      <button
        className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full hidden sm:block z-10"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} className="text-[#BA7D66]" />
      </button>
    </div>
  );
};

export default CartoonAndManga;
