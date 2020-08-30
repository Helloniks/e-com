import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./item";
import { fetchRequest } from "../../actions/dashboardAction";
import { addItemToCart } from "../../actions/cartAction";
import { getAllBooks } from "../../reducers/dashboardReducer";
import Navigation from "./navigation";
import Description from "./description";
import "./main.scss";



const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const booksdata = useSelector(getAllBooks);

  const [show, setShow] = useState(false);
  const [selectedItem, setItem] = useState();

  const showDetails = useCallback(() => {
    setShow(true);
  }, []);

  const closeDetails = useCallback(() => {
    setShow(false);
  }, []);

  const addToCart = (item: any) => {
    dispatch(addItemToCart(item));
  };

  const onItemClick = (item: any) => {
    setItem(item);
    showDetails();
  };

  const renderAll = () => (
    <div className="home-container">
      <div className="items">
        {booksdata && booksdata.map(item => {
          return <ProductItem item={item} addToCart={addToCart} onItemClick={onItemClick} />;
        })}
      </div>
    </div>
  );

  const renderDetails = () => (
    <Description item={selectedItem} onclose={closeDetails} addToCart={addToCart}/>
  );

  return (
    <>
      <Navigation />
      {!show && renderAll()}
      {show && renderDetails()}
    </>
  );
};


export default HomePage;

