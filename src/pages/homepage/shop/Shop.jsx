import React from "react";
import CollectionOverview from "../../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../../collection/collection.component";
// import CollectionOverview from "../../../components/collection-overview/collection-overview.component";

const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryID`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
