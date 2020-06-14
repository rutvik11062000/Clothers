import React from "react";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;

  return (
    <div className="collection-page">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
