import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import BrowseSkills from './pages/BrowseSkills/BrowseSkills';
import MySwaps from './pages/MySwaps/MySwaps';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse-skills' element={<BrowseSkills />} />
        <Route path='/my-swaps' element={<MySwaps />} />
      </Routes>
    </Router>
  );
}

export default App;
