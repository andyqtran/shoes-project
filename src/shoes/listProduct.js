import React, { Component } from "react";
import Product from "./product";

export default class ListProduct extends Component {
    renderList() {
        let { listProduct, getAddToCart, getDetail } = this.props;
        return listProduct.map((product) => {
            return (
                <Product
                    key={product.id}
                    product={product}
                    getAddToCart={getAddToCart}
                    getDetail={getDetail}
                />
            );
        });
    }

    render() {
        return (
            <>
                <div className="row">{this.renderList()}</div>
            </>
        );
    }
}
