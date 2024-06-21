 interface ProductIf {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}



const localStorageData = localStorage.getItem("products");
const parsedLocalStorageData = localStorageData
  ? JSON.parse(localStorageData)
  : [];
const initialState = {
  listProduct:
    parsedLocalStorageData.length > 0
      ? parsedLocalStorageData
      : [
          {
            id: 1,
            image: "../public/pizza.jpg",
            name: "Pizza",
            description: "Lorem ipsum dolor sit amet...",
            price: 30,
            quantity: 0,
          },
          {
            id: 2,
            image: "../public/hamburger.jpg",
            name: "Hamburger",
            description: "Lorem ipsum dolor sit amet...",
            price: 15,
            quantity: 10,
          },
          {
            id: 3,
            image: "../public/bread.jpg",
            name: "Bread",
            description: "Lorem ipsum dolor sit amet...",
            price: 20,
            quantity: 10,
          },
          {
            id: 4,
            image: "../public/cake.jpg",
            name: "Cake",
            description: "Lorem ipsum dolor sit amet...",
            price: 10,
            quantity: 10,
          },
        ],
};
export const listProductReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "AddToCart":
      let newProductADD = state.listProduct.map((product:ProductIf) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      
      return {listProduct:newProductADD};
    case "DeleteItem":
      let newProductDEL = state.listProduct.map((product:ProductIf) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      
      return {listProduct:newProductDEL};
    default:
      return state;
  }
};
