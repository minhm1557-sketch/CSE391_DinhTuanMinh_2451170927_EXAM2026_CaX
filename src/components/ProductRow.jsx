function ProductRow({ index, product }) {
    return (
        <>
            <div className="row py-1 my-1">
                <div className="col-1">
                    {index}
                </div>

                <div className="col-4">
                    {product.name}
                </div>

                <div className="col-2">
                    {product.category}
                </div>

                <div className="col-3">
                    {product.price}
                </div>

                <div className="col-2">
                    <span
                        className={`badge text-bg-${
                            product.status === "Còn hàng"
                                ? "success"
                                : "danger"
                        }`}
                    >
                        {product.status}
                    </span>
                </div>
            </div>

            <hr />
        </>
    );
}

export default ProductRow;