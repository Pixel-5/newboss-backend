<?php

namespace Database\Seeders;

use App\Models\Clients;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class ClientDataSeeder extends Seeder
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
                'id' => 13,
                'email' => 'mofenyimoffat@gmail.com',
                'phone' => '+26772596057',
                'password' => Hash::make('admin1234'),
                "name" => "Moffat",
                "surname" => "More",
                "active" => 1,
                "auth_type" => 1,
                "token" => "werwerwerw",
            ],
        ];

        foreach ($data as $value) {
            Clients::firstOrCreate(['id' => $value['id']],$value);
        }
    }
}
