import React from 'react';
import { ProductIf } from './types';

interface CartItemProps {
    product:ProductIf;
  index: number;
  delete1: (productId:number)=> void;
}

const CartItem: React.FC<CartItemProps> = ({ index, product, delete1 }) => (
  <tr>
    <th scope="row">{index}</th>
    <td>{product.name}</td>
    <td>{product.price} USD</td>
    <td>
      <input name={`cart-item-quantity-${index}`} type="number" value={product.quantity} />
    </td>
    <td>
      <a className="label label-info update-cart-item" href="javascript:void(0)" data-product="" >Update</a>
      <a className="label label-danger delete-cart-item" href="javascript:void(0)" data-product=""onClick={()=>{delete1(product.id)}}>Delete</a>
    </td>
  </tr>
);

export default CartItem;
