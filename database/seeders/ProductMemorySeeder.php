<?php

namespace Database\Seeders;

use App\Models\ProductMemory;
use Illuminate\Database\Seeder;


class ProductMemorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'id' => 1,
                'name' => '2GB',
            ],
            [
                'id' => 2,
                'name' => '4GB',
            ],
            [
                'id' => 3,
                'name' => '6GB',
            ],
            [
                'id' => 4,
                'name' => '8GB',
            ],
            [
                'id' => 5,
                'name' => '12GB',
            ],
            [
                'id' => 6,
                'name' => '16GB',
            ],
            [
                'id' => 7,
                'name' => '32GB',
            ],
            [
                'id' => 8,
                'name' => '64GB',
            ],
            [
                'id' => 9,
                'name' => '128GB',
            ],
            [
                'id' => 10,
                'name' => '256GB',
            ],
            [
                'id' => 11,
                'name' => '500GB',
            ],
            [
                'id' => 12,
                'name' => '1TB',
            ],
            [
                'id' => 13,
                'name' => '2TB',
            ],
            [
                'id' => 14,
                'name' => '4TB',
            ],
            [
                'id' => 15,
                'name' => '8TB',
            ],
        ];
        foreach ($data as $value) {
            ProductMemory::firstOrCreate(['id' => $value['id']],$value);
        }
    }
}
