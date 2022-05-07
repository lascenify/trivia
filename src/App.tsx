import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Home } from './components/Home';
import { Game } from './components/Game';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* If the current URL is /about, this route is rendered
          while the rest are ignored */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
