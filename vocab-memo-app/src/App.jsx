import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AppHome from './pages/AppHome';
import Test from './pages/Test';
import Results from './pages/Results';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/app" element={<AppHome />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
