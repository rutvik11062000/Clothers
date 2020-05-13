import React from "react";
import './CollectionItemStyle.scss';

export const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item" key={id}>
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
      </div>
    </div>
  );
};

// export default CollectionItem;
