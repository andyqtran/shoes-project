import React, { Component } from "react";

export default class ModalDetail extends Component {
    render() {
        let { productDetail } = this.props;
        return (
            <>
                <div
                    className="modal fade"
                    id="modalDetailProduct"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modalDetailProductTitle"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4
                                    className="modal-title"
                                    id="exampleModalLongTitle"
                                >
                                    Product detail
                                </h4>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h5 className="title">{productDetail.name}</h5>
                                <div className="img">
                                    <img src={productDetail.image} alt="" />
                                </div>
                                <p className="desc">
                                    {productDetail.description}
                                </p>
                                <p className="price">
                                    <strong>${productDetail.price}</strong>
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
