import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllServices from './components/AllServices'; // Import AllServices component
import Layout from './components/layout'; // Corrected path to Layout
import Home from './components/Home'; // Corrected path to Layout

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap routes with Layout to keep Header/Footer across pages */}
        <Route path="/home" element={<Layout><Home /></Layout>} /> {/* Home page */}
        <Route path="/services" element={<Layout><AllServices /></Layout>} /> {/* All Services page */}
      </Routes>
    </Router>
  );
};

export default App;
