import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/contexts/ThemeContext';
import HomePage from '@/pages/HomePage';
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Helmet>
          <title>Daniel Tusingwire - Product Designer</title>
          <meta name="description" content="Senior Product Designer specializing in user-centered design, prototyping, and digital product development. View my portfolio and get in touch." />
          <meta name="keywords" content="product designer, UI/UX designer, user experience, digital design, portfolio" />
          <meta name="author" content="Daniel Tusingwire" />
          <meta property="og:title" content="Daniel Tusingwire - Product Designer" />
          <meta property="og:description" content="Senior Product Designer specializing in user-centered design and digital product development." />
          <meta property="og:type" content="website" />
        </Helmet>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;