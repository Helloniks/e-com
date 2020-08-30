import React from "react";
import { IBook } from "../../model/Dashboard";
import "./main.scss"

interface propsFromComponent {
  item: IBook;
}

interface propsFromDispatch {
  addToCart: (item: IBook) => any;
  onItemClick: (item: IBook) => any;
}

type Props = propsFromComponent & propsFromDispatch;

const ProductItem: React.FC<Props> = ({ item, addToCart, onItemClick }) => {
  const AddItemToCart = (item: IBook) => {
    addToCart(item);
  };
  const OnItemClick = (item: IBook) => {
    onItemClick(item);
  };

  return (
    <div className="item-container">
      <div onClick={() => OnItemClick(item)}>
        <figure>
          <img alt={item.name} src={item.image} />
        </figure>
        <h4>{item.name}</h4>
        <div className="description">
          <text>{item.author}</text>
        </div>
      </div>
      <button onClick={() => AddItemToCart(item)}>Buy Now</button>
    </div>
  );
};

export default ProductItem;
