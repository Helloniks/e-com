import React from "react";
import { getCartdetails } from "../../reducers/cartReducer";
import { useSelector } from "react-redux";
import Navigation from "../HomePage/navigation";



const Cart: React.FC = () => {
  const cartItems = useSelector(getCartdetails);

  console.log("cartItems", cartItems);
  return (
    <>
      <Navigation />
      <div className="description-container">
        <div className="left-column">
          <div>
            <h3>Address Details</h3>
          </div>
          <form>
            <ul className="wrapper">
              <li className="form-row">
                <label>Name</label>
                <input type="text" id="name" />
              </li>
              <li className="form-row">
                <label>Complete Address</label>
                <input type="text" id="townborn" />
              </li>
              <li className="form-row">
                <label>Email Address</label>
                <input type="email" id="email" />
              </li>
              <li className="form-row">
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
        </div>
        <div className="right-column">
          <div>
            <h3>Your Cart</h3>
          </div>
          <div>
            {cartItems.items.map(item => {
              return (
                <div className="items">
                  <img className="item" src={item.image} />
                  <b className="item">{item.name}</b>
                  <span className="item">{item.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};


export default Cart;
