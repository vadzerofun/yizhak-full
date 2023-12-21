<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Books;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Books::all();

        return response()->json($books);
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
        $book = new Books;
        $book->name = $request->name ? $request->name : "";
        $book->author = $request->author ? $request->author : "";
        $book->published = $request->published ? $request->published : "";
        $book->save();
        return response()->json([
            'success' => 'Book created successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Books::find($id);

        if (!empty($book)) {
            return response()->json($book);
        }

        return response()->json([
            'error' => 'Book not found',
        ], 404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $book = Books::find($id);

        if (!empty($book)) {
            $book->name = is_null($request->name) ? $book->name : $request->name;
            $book->author = $request->author ? $request->author : $book->author;
            $book->published = $request->published ? $request->published : $book->published;
            $book->save();

            return response()->json([
                'success' => 'Book updated successfully',
            ]);
        } else {
            return response()->json([
                'error' => 'Book not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (Books::where('id', $id)->exists()) {
            $book = Books::find($id);
            $book->delete();

            return response()->json([
                'success' => 'Book deleted successfully',
            ], 202);
        } else {
            return response()->json([
                'error' => 'Book not found'
            ], 404);
        }
    }
}
