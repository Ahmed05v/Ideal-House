'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full group">
        <div className="relative h-72 bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-300"></div>
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
              Only {product.stock} left
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
              <span className="text-white text-xl font-bold">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-dark mb-2 group-hover:text-primary transition duration-300">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Price</p>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ${product.price}
              </span>
            </div>
            <div className="text-right">
              <p className={`text-sm font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? '✓ In Stock' : '✗ Out'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
