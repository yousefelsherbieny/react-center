import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main> {/* Render children here (i.e., routed content) */}
      <Footer />
    </>
  );
};

// Add prop types validation
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is a valid React node
};

export default Layout;
