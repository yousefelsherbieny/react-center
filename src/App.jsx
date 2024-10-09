import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurTeam from './components/OurTeam'; 
import Layout from './components/Layout'; // Ensure correct path
import Game from './components/Game'; // Ensure correct path
import OurServices from './components/OurServices'; // Ensure correct path
import HomePage from './components/HomePage'; // Ensure correct path

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ensure all routes are wrapped in the Layout component */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />

        <Route path="/our-services" element={<Layout><OurServices /></Layout>} />
        <Route path="/our-team" element={<Layout><OurTeam /></Layout>} />
        <Route path="/game" element={<Layout><Game /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
