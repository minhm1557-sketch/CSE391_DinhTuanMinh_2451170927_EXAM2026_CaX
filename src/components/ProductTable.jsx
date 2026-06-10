import Header from "./Header";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
    return (
        <div className="card">
            <div className="card-body">

                <Header
                    title="Danh sách sản phẩm"
                    description="Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống"
                />

                <div className="card">

                    <div className="card-header">
                        <div className="row">
                            <div className="col-1">STT</div>
                            <div className="col-4">TÊN SẢN PHẨM</div>
                            <div className="col-2">DANH MỤC</div>
                            <div className="col-3">GIÁ</div>
                            <div className="col-2">TRẠNG THÁI</div>
                        </div>
                    </div>

                    <div className="card-body">
                        {products.map((product, index) => (
                            <ProductRow
                                key={index}
                                index={index + 1}
                                product={product}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ProductTable;