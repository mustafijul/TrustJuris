import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Services from './components/Services'
import CasesPage from './components/CasesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
       <Header></Header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;