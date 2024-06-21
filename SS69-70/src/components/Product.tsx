import React from "react";
import { ProductIf } from "./types";

interface ProductProps {
  product: ProductIf;
  onAddToCart: (productId: number) => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => (
  <div className="media product">
    <div className="media-left">
      <a href="#">
        <img className="media-object" src={product.image} alt={product.name} />
      </a>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{product.name}</h4>
      <p>{product.description}</p>
      <input
        name={`quantity-product-${product.id}`}
        type="number"
        value={product.quantity}
        readOnly
      />
      {product.quantity === 0 ? (
        <span className="price">{product.price} USD</span>
      ) : (
        <a onClick={() => onAddToCart(product.id)} className="price">
          {product.price} USD
        </a>
      )}
    </div>
  </div>
);

export default Product;
