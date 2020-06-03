import React from "react";
import "./CollectionItemStyle.scss";
import CustomButton from "../custombutton/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

export const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item" key={item.id}>
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick
      ></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      {/* <CustomButton  onClick={() => addItem(item)}  invert >Add To Cart</CustomButton> */}
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
