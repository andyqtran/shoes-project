import React, { Component } from "react";
import ListShop from "./listShop";

export default class Shop extends Component {
    render() {
        let { listShop, handleDelete, handleQuantity } = this.props;
        return (
            <>
                <table className="table table-striped table-inverse">
                    <thead className="thead-inverse text-center">
                        <tr>
                            <th>Tên</th>
                            <th>Hình ảnh</th>
                            <th>Mô tả</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                            <th>***</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListShop
                            listShop={listShop}
                            handleDelete={handleDelete}
                            handleQuantity={handleQuantity}
                        />
                    </tbody>
                </table>
            </>
        );
    }
}
