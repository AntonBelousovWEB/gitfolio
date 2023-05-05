import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './components/userPage';
import Reg from './components/registration';

function App() {
  return (
    <section>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Reg />} />
            <Route path="/users/:userId" element={<UserPage />} />
          </Routes>
        </Router>
      </div>
      <h1 className="title-creacted-by">Created by Anton Beloysov</h1>
    </section>
  );
}

export default App;
