import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import HomePage from './pages/HomePage';
import ProductsProses from './components/ProductsProses';
import Assesments from './components/Assesments';
import PortfolioPage from './pages/PortofolioPage'; // Import PortfolioPage
import Footer from './components/Footer'; // Import Footer

const App = () => {
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
            <Route path="/portfolio" element={<PortfolioPage />} /> {/* Tambahkan rute untuk PortfolioPage */}
            {/* Tambahkan rute lainnya di sini */}
          </Routes>
        </Box>
        <Footer /> {/* Tambahkan Footer di sini */}
      </Box>
    </ChakraProvider>
  );
};

export default App;
