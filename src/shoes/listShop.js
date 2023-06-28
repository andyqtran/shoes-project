import React, { Component } from "react";
import ProductShop from "./productShop";

export default class ListShop extends Component {
    render() {
        let { listShop, handleDelete, handleQuantity } = this.props;
        return listShop.map((product) => (
            <ProductShop
                product={product}
                key={product.id}
                handleDelete={handleDelete}
                handleQuantity={handleQuantity}
            />
        ));
    }
}
