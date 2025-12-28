import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'motion/react';
import { LeadProvider } from './context/LeadContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Benefits from './pages/Benefits';
import SuccessStory from './pages/SuccessStory';
import { useEffect } from 'react';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function App() {
  return (
    <LeadProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/products"
                element={
                  <PageTransition>
                    <Products />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
              <Route
                path="/how-it-works"
                element={
                  <PageTransition>
                    <HowItWorks />
                  </PageTransition>
                }
              />
              <Route
                path="/benefits"
                element={
                  <PageTransition>
                    <Benefits />
                  </PageTransition>
                }
              />
              <Route
                path="/success-story"
                element={
                  <PageTransition>
                    <SuccessStory />
                  </PageTransition>
                }
              />
            </Routes>
          </main>
          <ScrollToTop />
          <Footer />
        </div>
      </BrowserRouter>
    </LeadProvider>
  );
}
