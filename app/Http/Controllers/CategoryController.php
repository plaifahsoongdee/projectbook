<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // ใช้ leftJoin เพื่อให้ดึงข้อมูลจาก categories โดยไม่ต้องกังวลเรื่องการไม่มีหมวดหมู่
        $comicsMangaBooks = Book::leftJoin('categories', 'books.category_id', '=', 'categories.id')
            ->where('categories.category_name', 'Comics & Manga')
            ->orWhereNull('categories.id')  // ตรวจสอบกรณีที่ไม่พบ category
            ->get(['books.id', 'books.book_name', 'books.author', 'books.price', 'books.image', 'categories.category_name']);

        return inertia('Bookstore/CartoonAndManga', [
            'books' => $comicsMangaBooks
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
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
