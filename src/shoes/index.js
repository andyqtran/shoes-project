import React, { Component } from "react";
import ListProduct from "./listProduct";
import Shop from "./shop";
import ModalDetail from "./modalDetail";
import data from "./data.json";

export default class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = { listProduct: data, listShop: [], productDetail: {} };
    }

    _findIndex = (id) => {
        return this.state.listShop.findIndex((item) => item.id === id);
    };

    handleAddToCart = (product) => {
        let index = this._findIndex(product.id);
        const listShop = [...this.state.listShop];
        if (index == -1) {
            let cartProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                desc: product.shortDescription,
                quantity: 1,
            };
            listShop.push(cartProduct);
        } else {
            listShop[index].quantity++;
        }

        this.setState({ listShop });
    };

    handleDetail = (productDetail) => {
        this.setState({ productDetail });
    };

    handleQuantity = (id, isPlus) => {
        const listShop = [...this.state.listShop];
        let index = this._findIndex(id);
        if (isPlus) {
            listShop[index].quantity++;
        } else {
            if (listShop[index].quantity > 1) {
                listShop[index].quantity--;
            } else if (listShop[index].quantity == 1) {
                listShop.splice(index, 1);
            }
        }

        this.setState({ listShop });
    };

    handleDelete = (id) => {
        let index = this._findIndex(id);
        const listShop = [...this.state.listShop];
        listShop.splice(index, 1);
        this.setState({ listShop });
    };

    totalQuantity() {
        return this.state.listShop.reduce(
            (total, product) => total + product.quantity,
            0
        );
    }

    render() {
        let { listProduct, listShop, productDetail } = this.state;
        return (
            <>
                <div>
                    <div className="heading m-3">
                        <h1 className="header text-center">SHOES SHOP</h1>
                    </div>
                    <div className="content container">
                        <div className="row">
                            <div className="col-3 col-left">
                                <div
                                    className="nav flex-column nav-pills"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <a
                                        className="nav-link active"
                                        id="v-pills-home-tab"
                                        data-toggle="pill"
                                        href="#v-pills-home"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        Home
                                    </a>
                                    <a
                                        className="nav-link"
                                        id="v-pills-shop-tab"
                                        data-toggle="pill"
                                        href="#v-pills-shop"
                                        role="tab"
                                        aria-controls="v-pills-shop"
                                        aria-selected="false"
                                    >
                                        Shop ({this.totalQuantity()})
                                    </a>
                                </div>
                            </div>
                            <div className="col-9 col-right">
                                <div
                                    className="tab-content"
                                    id="v-pills-tabContent"
                                >
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >
                                        <ListProduct
                                            listProduct={listProduct}
                                            getAddToCart={this.handleAddToCart}
                                            getDetail={this.handleDetail}
                                        />
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-shop"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-shop-tab"
                                    >
                                        <Shop
                                            listShop={listShop}
                                            handleDelete={this.handleDelete}
                                            handleQuantity={this.handleQuantity}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Modal detail product */}
                    <ModalDetail productDetail={productDetail} />
                </div>
            </>
        );
    }
}
