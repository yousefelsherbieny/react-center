import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Shoes",
      image: "Project/images/shose.png",
      description:
        "Discover comfort and style with our premium shoes, designed to support your every step with cutting-edge materials.",
      price: 79.99, // السعر
      link: "/shoe-app",
    },
    {
      id: 2,
      name: "MacModel",
      image: "Project/images/laptop.png",
      description:
        "Enhance productivity and creativity with our MacModel, featuring top-notch performance and sleek design for modern users.",
      price: 1299.99, // السعر
      link: "/mac-model",
    },
    {
      id: 3,
      name: "Watch",
      image: "Project/images/watch.png",
      description:
        "Stay stylishly on time with our sophisticated watches, combining elegance with advanced functionality.",
      price: 199.99, // السعر
      link: "/watch",
    },
    {
      id: 4,
      name: "Car",
      image: "Project/images/car.png",
      description:
        "Experience the thrill of driving with our state-of-the-art cars, designed for performance and comfort on every journey.",
      price: 24999.99, // السعر
      link: "/car",
    },
    {
      id: 5,
      name: "Rings",
      image: "Project/images/Character.png",
      description:
        "Elevate your style with our unique rings, crafted with precision and designed to make a statement on any occasion.",
      price: 499.99, // السعر
      link: "/character",
    },
    {
      id: 6,
      name: "iPhone 15 Pro Max",
      image: "Project/images/phone.png",
      description:
        "Discover the future of technology with our latest models, designed to optimize your tech experience.",
      price: 1099.99, // السعر
      link: "/main-canvas",
    },
  ];

  return (
    <div className="page-content">
      <div className="section page-content-first">
        <div className="container text-center mb-4">
          <h1>Our Products</h1>
          <p className="max-670 mt-3 mx-md-auto">
            Explore our diverse range of products, each crafted to meet your
            unique needs and enhance your lifestyle. Browse and find what suits
            you best!
          </p>
        </div>

        <div className="container">
          <div className="row col-equalH">
            {products.map((product) => (
              <div className="col-md-6 col-lg-4" key={product.id}>
                <div className="service-card">
                  <div className="service-card-photo">
                    {/* استخدام Link للتنقل إلى صفحة المنتج */}
                    <Link to={product.link}>
                      <img
                        src={product.image}
                        className="img-fluid"
                        alt={product.name} // تحسين الوصول باستخدام alt
                      />
                    </Link>
                  </div>
                  <h5 className="service-card-name">{product.name}</h5>
                  <div className="h-decor"></div>
                  <p>{product.description}</p>
                  <p className="price">${product.price.toFixed(2)}</p>{" "}
                  {/* عرض السعر */}
                  <button
                    className="btn"
                    style={{ backgroundColor: "#041b64", color: "white" }} // تغيير اللون
                    onClick={() => addToCart(product)} // إضافة المنتج إلى السلة
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// تحديد نوع الـ props
Product.propTypes = {
  addToCart: PropTypes.func.isRequired, // addToCart دالة مطلوبة
};

export default Product;
