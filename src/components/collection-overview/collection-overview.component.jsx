import { createStructuredSelector } from "reselect";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { CollectionPreview } from "../preview-collection/CollectionPreview";
import React from "react";
import {selectShopData} from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopData,
});

export default connect(mapStateToProps)(CollectionOverview);
