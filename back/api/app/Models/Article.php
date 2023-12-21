<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'img_url',
        'category_id',
        'country',
    ];

    protected $table = 'articles';
    
}
