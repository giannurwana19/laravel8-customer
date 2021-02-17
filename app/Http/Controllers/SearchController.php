<?php

namespace App\Http\Controllers;

use App\Http\Resources\Customer as ResourcesCustomer;
use App\Models\Customer;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $request->validate([
            'searchTerm' => 'required'
        ]);

        $customer = Customer::search($data['searchTerm'])->get();

        return ResourcesCustomer::collection($customer);
    }
}
