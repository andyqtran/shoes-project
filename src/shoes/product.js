import React, { Component } from "react";

export default class Product extends Component {
    render() {
        let { product, getAddToCart, getDetail } = this.props;
        return (
            <>
                <div className="col-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <div
                                className="info"
                                data-toggle="modal"
                                data-target="#modalDetailProduct"
                                onClick={() => {
                                    getDetail(product);
                                }}
                            >
                                <img
                                    className="card-img-top"
                                    src={product.image}
                                    alt=""
                                />
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text">${product.price}</p>
                            </div>
                            <button
                                className="btn btn-dark mt-3"
                                onClick={() => {
                                    getAddToCart(product);
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
