<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Group;
use Inertia\Inertia;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function index()
    {
        // ดึงข้อมูลหนังสือที่มี
        $books = Book::all(['id', 'book_name', 'author', 'price', 'image']); // เลือกคอลัมน์ที่จำเป็น
        return inertia('Bookstore/Books', [
            'books' => $books
        ]);
    }

    public function highlight()
{
    // ดึงหนังสือทั้งหมด
    $books = Book::limit(10)->get(['id', 'book_name', 'author', 'price', 'image']);

    return inertia('Bookstore/Highlight', [
        'books' => $books,
        'categoryName' => "หนังสือทั้งหมด"
    ]);
}



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        // ดึงข้อมูลหนังสือที่เลือกมาแสดง
        return inertia('Bookstore/Detail', [
            'book' => $book
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}
