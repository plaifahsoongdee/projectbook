<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Typebook>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        //หม
        return [
            'category_name' => $this->faker->randomElement(['Comics & Manga', 'Fiction', 'Novel', 'Education', 'Food & Health', 'Literature','-']),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
