import Header from "./Header";

function ProductForm() {
    return (
        <div className="card">
            <div className="card-body">
                <form>

                    <Header
                        title="Danh sách sản phẩm"
                        description="Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách"
                    />

                    <div className="mb-3">
                        <label className="form-label">
                            Tên thiết bị
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập tên sản phẩm"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Danh mục
                        </label>

                        <select className="form-select">
                            <option>Điện thoại</option>
                            <option>Laptop</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Giá
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            placeholder="Nhập giá"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Trạng thái
                        </label>

                        <select className="form-select">
                            <option>Còn hàng</option>
                            <option>Hết hàng</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="col-8">
                            <button className="btn btn-primary w-100">
                                Thêm sản phẩm
                            </button>
                        </div>

                        <div className="col-4">
                            <button
                                type="reset"
                                className="btn btn-secondary w-100"
                            >
                                Làm mới
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default ProductForm;