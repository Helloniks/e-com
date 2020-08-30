import React from "react";
import { IBook } from "../../model/Dashboard";
import "./main.scss";

interface propsFromComponent {
  item: IBook;
}

interface propsFromDispatch {
  onclose: () => any;
  addToCart: (item: IBook) => any;
}

type Props = propsFromComponent & propsFromDispatch;

const Description: React.FC<Props> = ({ item, onclose , addToCart }) => {
  return (
    <>
      <div className="description-container">
        <div className="left-column">
          <a href="#" className="cart-btn" onClick={onclose}>
            Back
          </a>
          <figure>
            {/* <img alt={item.name} src={item.image} /> */}
          </figure>
        </div>
        <div className="right-column">
          <div className="product-description">
            <span>{item.name}</span>
            <h1>{item.author}</h1>
            <p>
              {item.description}
            </p>
          </div>
          <div className="product-price">
            <span>{item.price}</span>
            <a href="#" className="cart-btn" onClick={() => addToCart(item)}>
              Add to cart
            </a>
            <a href="#" className="cart-btn">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};


export default Description;