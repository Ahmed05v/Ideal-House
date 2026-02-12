'use client';

import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user || !user.isAdmin) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4 text-dark">Access Denied</h1>
            <p className="text-gray-600 mb-8">You must be an admin to access this page.</p>
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Main Page Wrapper: added bigger top/bottom padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-dark">Admin Menu</h2>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full text-left px-4 py-2 rounded transition ${
                    activeTab === 'dashboard'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('products')}
                  className={`w-full text-left px-4 py-2 rounded transition ${
                    activeTab === 'products'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-2 rounded transition ${
                    activeTab === 'orders'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Orders
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full text-left px-4 py-2 rounded transition ${
                    activeTab === 'users'
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  Users
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div>
                <h1 className="text-4xl font-serif font-bold mb-8 text-dark">Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-600 text-sm font-bold mb-2">Total Sales</h3>
                    <p className="text-3xl font-bold text-primary">$45,231</p>
                    <p className="text-xs text-gray-500 mt-2">+12% from last month</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-600 text-sm font-bold mb-2">Orders</h3>
                    <p className="text-3xl font-bold text-primary">156</p>
                    <p className="text-xs text-gray-500 mt-2">+8% from last month</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-600 text-sm font-bold mb-2">Customers</h3>
                    <p className="text-3xl font-bold text-primary">842</p>
                    <p className="text-xs text-gray-500 mt-2">+15% from last month</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-gray-600 text-sm font-bold mb-2">Products</h3>
                    <p className="text-3xl font-bold text-primary">48</p>
                    <p className="text-xs text-gray-500 mt-2">All in stock</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4 text-dark">Recent Orders</h3>
                    <div className="space-y-3">
                      {[
                        { id: '#ORD-001', customer: 'John Doe', total: '$2,499', status: 'Completed' },
                        { id: '#ORD-002', customer: 'Jane Smith', total: '$1,899', status: 'Processing' },
                        { id: '#ORD-003', customer: 'Mike Johnson', total: '$3,299', status: 'Pending' },
                      ].map((order) => (
                        <div key={order.id} className="flex justify-between items-center py-2 border-b">
                          <div>
                            <p className="font-bold text-dark">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.customer}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-primary">{order.total}</p>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-bold mb-4 text-dark">Top Products</h3>
                    <div className="space-y-3">
                      {[
                        { name: 'Modern Sofa', sales: 24 },
                        { name: 'Dining Table', sales: 18 },
                        { name: 'Office Chair', sales: 32 },
                      ].map((product) => (
                        <div key={product.name} className="flex justify-between items-center py-2 border-b">
                          <p className="text-dark">{product.name}</p>
                          <p className="font-bold text-primary">{product.sales} sold</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

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

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h1 className="text-4xl font-serif font-bold mb-8 text-dark">Orders</h1>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Order ID</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Customer</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Total</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: '#ORD-001', customer: 'John Doe', total: '$2,499', status: 'Completed' },
                        { id: '#ORD-002', customer: 'Jane Smith', total: '$1,899', status: 'Processing' },
                        { id: '#ORD-003', customer: 'Mike Johnson', total: '$3,299', status: 'Pending' },
                      ].map((order) => (
                        <tr key={order.id} className="border-t hover:bg-gray-50">
                          <td className="px-6 py-3 font-bold">{order.id}</td>
                          <td className="px-6 py-3">{order.customer}</td>
                          <td className="px-6 py-3">{order.total}</td>
                          <td className="px-6 py-3">
                            <span className="bg-gray-100 px-3 py-1 rounded text-sm">{order.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div>
                <h1 className="text-4xl font-serif font-bold mb-8 text-dark">Users</h1>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Name</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Email</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Orders</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-dark">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'John Doe', email: 'john@example.com', orders: 5, status: 'Active' },
                        { name: 'Jane Smith', email: 'jane@example.com', orders: 3, status: 'Active' },
                        { name: 'Mike Johnson', email: 'mike@example.com', orders: 8, status: 'Active' },
                      ].map((user) => (
                        <tr key={user.email} className="border-t hover:bg-gray-50">
                          <td className="px-6 py-3">{user.name}</td>
                          <td className="px-6 py-3">{user.email}</td>
                          <td className="px-6 py-3">{user.orders}</td>
                          <td className="px-6 py-3">
                            <span className="text-green-600">● {user.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
