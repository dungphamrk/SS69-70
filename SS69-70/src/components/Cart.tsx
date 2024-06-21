import React from "react";
import { ProductIf } from "./types";
import CartItem from "./CartItem";
interface CartProps {
  cart: ProductIf[];
  delete1: (cartId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, delete1 }) => (
  <div className="panel panel-danger">
    <div className="panel-heading">
      <h1 className="panel-title">Your Cart</h1>
    </div>
    <div className="panel-body">
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: "4%" }}>STT</th>
            <th>Name</th>
            <th style={{ width: "15%" }}>Price</th>
            <th style={{ width: "4%" }}>Quantity</th>
            <th style={{ width: "25%" }}>Action</th>
          </tr>
        </thead>
        <tbody id="my-cart-body">
          {cart.length === 0 ? (
            <td colSpan={4}>Không có sản phẩm trong giỏ hàng</td>
          ) : (
            cart.map((product, index) => (
              <CartItem
                key={product.id}
                index={index}
                product={product}
                delete1={delete1}
              />
            ))
          )}
        </tbody>
        <tfoot id="my-cart-footer">
          <tr>
            <td colSpan={4}>
              There are <b>{cart.length}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
              {cart.reduce(
                (total, product) => total + product.price * product.quantity,
                0
              )}{" "}
              USD
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
);

export default Cart;
