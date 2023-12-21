<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();

        return response()->json($articles);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {        
        $article = new Article;
        $article->name = $request->name ? $request->name : "";
        $article->description = $request->description ? $request->description : "";
        $article->price = $request->price ? $request->price : "";
        $article->img_url = $request->img_url ? $request->img_url : "";
        $article->category_id = $request->category_id ? $request->category_id : 1;
        $article->country = $request->country ? $request->country : "";

        $article->save();
        return response()->json([
            'success' => 'Article created successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $article = Article::find($id);

        if (!empty($article)) {
            return response()->json($article);
        }

        return response()->json([
            'error' => 'Article not found',
        ], 404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $article = Article::find($id);

        if (!empty($article)) {
            $article->name = is_null($request->name) ? "" : $request->name;
            $article->description = $request->description ? $request->description : "";
            $article->price = $request->price ? $request->price : "";
            $article->img_url = $request->img_url ? $request->img_url : "";
            $article->category_id = $request->category_id ? $request->category_id : 1;
            $article->country = $request->country ? $request->country : "";
            $article->save();

            return response()->json([
                'success' => 'Article updated successfully',
            ]);
        } else {
            return response()->json([
                'error' => 'Article not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (Article::where('id', $id)->exists()) {
            $article = Article::find($id);
            $article->delete();

            return response()->json([
                'success' => 'Article deleted successfully',
            ], 202);
        } else {
            return response()->json([
                'error' => 'Article not found'
            ], 404);
        }
    }
}
