import React, { useEffect } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { trackPage } from './analytics'; // Import fungsi dari file analytics.jsx
import Navbar from './components/Navbar';
import About from './components/About';
import HomePage from './pages/HomePage';
import ProductsProses from './components/ProductsProses';
import Assesments from './components/Assesments';
import PortofolioPage from './pages/PortofolioPage'; // Import PortfolioPage
import Footer from './components/Footer'; // Import Footer
import { Analytics } from '@vercel/analytics/react'; // Import Analytics dari @vercel/analytics/react

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Kirim pageview ke Google Analytics setiap kali lokasi berubah
    trackPage(location.pathname + location.search);
  }, [location]);

  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Box p={4}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsProses />} />
            <Route path="/assesments" element={<Assesments />} />
            <Route path="/portfolio" element={<PortofolioPage />} /> {/* Tambahkan rute untuk PortfolioPage */}
            {/* Tambahkan rute lainnya di sini */}
          </Routes>
        </Box>
        <Footer /> {/* Tambahkan Footer di sini */}
        <Analytics /> {/* Tambahkan Analytics di sini */}
      </Box>
    </ChakraProvider>
  );
};

export default App;
