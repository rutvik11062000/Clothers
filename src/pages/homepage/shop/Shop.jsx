import React, { Component } from 'react'
import SHOP_DATA from './shop_data';
import {CollectionPreview} from '../../../components/preview-collection/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {
        const {collections} = this.state ; 
        return (
            <div className="shop-page">

                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key = {id} {...otherCollectionProps} />
                    ))
                }

            </div>
        )
    }
}

export default ShopPage