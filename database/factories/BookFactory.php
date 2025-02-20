<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Book;
use App\Models\Category;
use App\Models\Group;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
'book_name' => $this->faker->sentence(),
'category_id' => Category::factory(),
'group_id' => Group::factory(),
'quantity' => $this->faker->numberBetween(1, 100),
'remaining_quantity' => $this->faker->numberBetween(1, 100),
'sold_quantity' => $this->faker->numberBetween(1, 100),
'price' => $this->faker->randomFloat(2, 100, 500),
'publisher' => $this->faker->company(),
'author' => $this->faker->name(),
'description' => $this->faker->paragraph(),
'image' => $this->faker->imageUrl(640, 480, 'books', true, 'Faker'), // สุ่ม URL ของรูปหนังสือ

        ];

    }
}
