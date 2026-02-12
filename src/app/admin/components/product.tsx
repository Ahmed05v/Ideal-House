import { useState } from 'react';
export default function Product() { 
    return (
        <>
             {/* Products Tab */}
             {activeTab === 'products' && (
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h1 className="text-4xl font-serif font-bold text-dark">Products</h1>
                  <button className="btn-primary">Add Product</button>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Product</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Price</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Stock</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[ 
                        { name: 'Modern Sofa', price: '$4,999', stock: 5 },
                        { name: 'Dining Table', price: '$2,999', stock: 3 },
                        { name: 'Office Chair', price: '$899', stock: 12 },
                      ].map((product) => (
                        <tr key={product.name} className="border-t hover:bg-gray-50">
                          <td className="px-6 py-3">{product.name}</td>
                          <td className="px-6 py-3">{product.price}</td>
                          <td className="px-6 py-3">{product.stock}</td>
                          <td className="px-6 py-3 space-x-2">
                            <button className="text-blue-600 hover:underline text-sm">Edit</button>
                            <button className="text-red-600 hover:underline text-sm">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
        </>
    )
}
