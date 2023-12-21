<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();

        return response()->json($orders);
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
        $order = new Order;
        $order->article_id = $request->article_id ? $request->article_id : "";
        $order->save();
        return response()->json([
            'success' => 'Order created successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::find($id);

        if (!empty($order)) {
            return response()->json($order);
        }

        return response()->json([
            'error' => 'Order not found',
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
        $order = Order::find($id);

        if (!empty($order)) {
            $order->article_id = $request->article_id ? $request->article_id : "";
            $order->save();

            return response()->json([
                'success' => 'Order updated successfully',
            ]);
        } else {
            return response()->json([
                'error' => 'Order not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (Order::where('id', $id)->exists()) {
            $order = Order::find($id);
            $order->delete();

            return response()->json([
                'success' => 'Order deleted successfully',
            ], 202);
        } else {
            return response()->json([
                'error' => 'Order not found'
            ], 404);
        }
    }
}
