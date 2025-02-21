import React from "react";
import { usePage, Link } from "@inertiajs/react";

const Highlight = () => {
  const { books = [], categoryName } = usePage().props; // รับข้อมูลจาก backend

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{categoryName || "หนังสือทั้งหมด"}</h1>

      {/* แสดงรายการหนังสือ */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="w-36">
              <Link href={route('books.show', book.id)} className="block">
                <img
                  src={book.image || "/storage/image/book13.jpg"}
                  onError={(e) => { e.target.src = "/storage/image/book13.jpg"; }}
                  alt={book.book_name}
                  className="w-full h-48 object-cover rounded-md"
                />
              </Link>
              <h3 className="text-sm font-semibold mt-2 text-gray-900 line-clamp-2 overflow-hidden h-10 w-full">
                {book.book_name}
              </h3>
              <p className="text-xs text-gray-500 truncate w-full">{book.author || "ไม่ระบุผู้แต่ง"}</p>
              <div className="mt-2">
                <span className="text-[#BA7D66] font-bold text-lg">฿{parseFloat(book.price).toFixed(2)}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">ไม่มีหนังสือในหมวดนี้</p>
        )}
      </div>
    </div>
  );
};

export default Highlight;
