import React, { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/books") // ดึงข้อมูลจาก Laravel API
      .then((response) => {
        console.log(response.data); // ตรวจสอบข้อมูลที่ได้รับ
        if (response.data.success) {
          setBooks(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">หนังสือยอดนิยม</h2>
      <div className="flex gap-6 flex-wrap">
        {loading ? (
          <p>กำลังโหลดข้อมูล...</p>
        ) : books.length > 0 ? (
          books.map((book, index) => (
            <div key={book.id} className="flex flex-col items-center border p-4 w-40">
              <span className="text-lg font-bold">{index + 1}</span>
              <div className="w-24 h-32 bg-gray-300 flex items-center justify-center">
                {book.image ? (
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                ) : (
                  <span>ไม่มีรูป</span>
                )}
              </div>
              <p className="text-sm mt-2">{book.title}</p>
              <p className="text-sm font-bold mt-1">{book.price} บาท</p>
            </div>
          ))
        ) : (
          <p>ไม่มีข้อมูลหนังสือ</p>
        )}
      </div>
    </div>
  );
};

export default Books;
