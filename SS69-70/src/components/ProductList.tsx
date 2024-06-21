import React from 'react';
import Product from './Product';
import { ProductIf } from './types';
interface ProductListProps {
  products: ProductIf[];
  onAddToCart: (productId: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h1 className="panel-title">List Products</h1>
    </div>
    <div className="panel-body" id="list-product">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  </div>
);

export default ProductList;
