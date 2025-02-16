import React, { useEffect, useState } from "react";

const WebNovelPage = ({ bookId }) => {
  const [book, setBook] = useState(null);

  // Fetch book data from the API
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(`http://yourapiurl/api/book/${bookId}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchBookData();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
<div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
<div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full">
        {/* Header Section */}
<div className="flex flex-col sm:flex-row gap-8">
<img
            src={book.image || "https://via.placeholder.com/150"}  // Use the image from the book or a placeholder
            alt="Novel Cover"
            className="w-60 h-90 rounded-lg shadow-md object-cover"
          />
<div className="flex-1">
<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {book.book_name}
</h1>

            <p className="mt-6 text-gray-700 text-lg sm:text-xl">
              {book.description || "No description available"}
</p>

            <div className="flex gap-3 mt-3 items-center">
<p>หมวดหมู่</p>
<span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-base">
                {book.typebook_id ? "แฟนตาซี" : "Not Available"}  {/* Assuming the category is based on typebook_id */}
</span>
</div>

            <div className="flex gap-3 mt-3 items-center">
<p>สถานะ</p>
<span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-base">
                {book.remaining_quantity > 0 ? "Available" : "Out of Stock"}
</span>
</div>

            <div className="flex gap-3 mt-3 items-center">
<p>นักเขียน</p>
<span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-base">
                {book.author || "Not Available"}
</span>
</div>

            <div className="flex gap-3 mt-3 items-center">
<p>ราคา</p>
<span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-base">
                {book.price ? `${book.price} บาท` : "Not Available"}
</span>
</div>

            {/* Rent Button */}
<button className="mt-6 bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              เช่า
</button>

            <div className="mt-8 flex justify-between text-gray-600 text-sm sm:text-lg">
<div>
<p className="text-xl font-semibold">{book.sold_quantity}</p>
<p className="text-xs sm:text-sm">ยอดวิว</p>
</div>
<div>
<p className="text-xl font-semibold">{book.quantity}</p>
<p className="text-xs sm:text-sm">จำนวนตอน</p>
</div>
<div>
<p className="text-xl font-semibold">{book.sold_quantity}</p>
<p className="text-xs sm:text-sm">ความคิดเห็น</p>
</div>
</div>
</div>
</div>

        {/* Stats Section */}
</div>
</div>
  );
};

export default WebNovelPage;
