import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Game } from './components/Game';
import { Suspense } from 'react';
export default function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/game" element={<Game />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
