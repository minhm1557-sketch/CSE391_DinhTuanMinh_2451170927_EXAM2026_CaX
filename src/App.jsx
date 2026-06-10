import Header from './components/Header'
import ProductLayout from './components/ProductLayout'
import './App.css'

function App() {

    const products = [
        {
            name: "Điện thoại iPhone 15",
            category: "Điện thoại",
            price: "24.990.000 đ",
            status: "Còn hàng"
        },
        {
            name: "Samsung Galaxy Tab S9",
            category: "Máy tính bảng",
            price: "18.500.000 đ",
            status: "Còn hàng"
        },
        {
            name: "Chuột Logitech MX Master 3S",
            category: "Phụ kiện",
            price: "2.490.000 đ",
            status: "Hết hàng"
        }
    ];

    return (
        <div className="container py-3">

            <div className="row">

                <div className="col-5">
                    <ProductForm />
                </div>

                <div className="col-7">
                    <ProductTable products={products} />
                </div>

            </div>

        </div>
    );
}

export default App
