import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurTeam from "./components/OurTeam";
import Layout from "./components/Layout";
import Game from "./components/Game";
import OurServices from "./components/OurServices";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import MacModel from "./components/MacModel";
import ShoeApp from "./components/Shoe";

const App = () => {
  return (
    <Router basename="/react-center">
      {" "}
      {/* Add basename here */}
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
        <Route
          path="/mac-model"
          element={
            <Layout>
              <MacModel />
            </Layout>
          }
        />
        <Route
          path="/shoe-app"
          element={
            <Layout>
              <ShoeApp />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
