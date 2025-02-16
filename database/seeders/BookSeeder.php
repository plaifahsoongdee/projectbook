<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
use App\Models\Book;
use App\Models\Customer;
use App\Models\Payment;
use App\Models\Rental;
use App\Models\Category;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Book::factory(50)->create();
        // Typebook::factory(5)->create();
    }
}
