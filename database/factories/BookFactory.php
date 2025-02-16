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
            'category_id' => Category::factory(), // ใช้ factory ของ Category แทน
            'group_id' => Group::factory(),
            'quantity' => $this->faker->numberBetween(1, 100),
            'remaining_quantity' => $this->faker->numberBetween(1, 100),
            'sold_quantity' => $this->faker->numberBetween(1, 100),
            'price' => $this->faker->randomFloat(2, 100, 500),
            //เพิ่มมา
            'publisher' => $this->faker->company(), // สุ่มชื่อสำนักพิมพ์
            'author' => $this->faker->name(), // สุ่มชื่อผู้แต่ง
            'description' => $this->faker->paragraph(), // สุ่มคำอธิบายหนังสือ
        ];

    }
}
