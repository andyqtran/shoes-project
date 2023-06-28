import React, { Component } from "react";

export default class ProductShop extends Component {
    render() {
        let { product, handleDelete, handleQuantity } = this.props;
        return (
            <>
                <tr>
                    <td scope="row">{product.name}</td>
                    <td>
                        <div className="img">
                            <img src={product.image} alt="" />
                        </div>
                    </td>
                    <td>{product.desc}</td>
                    <td className="d-flex">
                        <button
                            onClick={() => {
                                handleQuantity(product.id, false);
                            }}
                        >
                            -
                        </button>
                        <span className="m-2">{product.quantity}</span>
                        <button
                            onClick={() => {
                                handleQuantity(product.id, true);
                            }}
                        >
                            +
                        </button>
                    </td>
                    <td>${product.price}</td>
                    <td>${product.price * product.quantity}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                handleDelete(product.id);
                            }}
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
            </>
        );
    }
}
