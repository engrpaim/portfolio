<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/projects', function () {
    return Inertia::render('Projects');
});
Route::get('/contacts', function () {
    return Inertia::render('Contacts');
});


