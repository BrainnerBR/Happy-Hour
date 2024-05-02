// En tu archivo index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css'
import ClassicHome from './components/gameModes/classicCards/ClassicHome';
import VerdadShotHome from './components/gameModes/verdadoShot/VerdadShotHome';
import YoNuncaNunca from './components/gameModes/yoNuncaNunca/YoNuncaNunca';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/classic" element={<ClassicHome />} />
        <Route path="/verdadoshot" element={<VerdadShotHome />} />
        <Route path="/yonuncanunca" element={<YoNuncaNunca />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
