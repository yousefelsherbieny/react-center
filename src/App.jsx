import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import OurTeam from "./components/OurTeam";
import Layout from "./components/Layout";
import Game from "./components/Game";
import OurServices from "./components/OurServices";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import MacModel from "./components/MacModel";
import ShoeApp from "./components/Shoe";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Watcho from "./components/Watch";
import { Car } from "./components/Car";
import Character from "./components/Character";
import MainCanvas from "./components/MainCanvas";

const App = () => {
  const [cart, setCart] = useState([]);

  // إضافة منتج إلى السلة
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // إزالة منتج من السلة
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  // تحديث الكمية
  const updateQuantity = (product, type) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  return (
    <Router basename="/react-center">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/our-services"
          element={
            <Layout>
              <OurServices />
            </Layout>
          }
        />
        <Route
          path="/our-team"
          element={
            <Layout>
              <OurTeam />
            </Layout>
          }
        />
        <Route
          path="/game"
          element={
            <Layout>
              <Game />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route path="/mac-model" element={<MacModel />} />
        <Route
          path="/shoe-app"
          element={
            <Layout>
              <ShoeApp />
            </Layout>
          }
        />
        {/* Add Layout wrapper for /products and /cart */}
        <Route
          path="/product"
          element={
            <Layout>
              <Product addToCart={addToCart} />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            </Layout>
          }
        />
        {/* Add the Cars component route */}
        <Route
          path="/watch"
          element={
            <Layout>
              <Watcho />
            </Layout>
          }
        />
        <Route
          path="/car"
          element={
            <Layout>
              <Car />
            </Layout>
          }
        />
        <Route
          path="/character"
          element={
            <Layout>
              <Character />
            </Layout>
          }
        />
        <Route path="/main-canvas" element={<MainCanvas />} />
      </Routes>
    </Router>
  );
};

export default App;
