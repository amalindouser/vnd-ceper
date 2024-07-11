import React from 'react';
import { Box, Flex, Button, IconButton, Link } from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import About from '../components/About';
import ProductsProses from '../components/ProductsProses';
import Products from "../components/Products";
import Assesments from '../components/Assesments';
import vndceper from '../assets/vndceper.jpg';

const HomePage = () => {
  return (
    <>
      <Element name="home">
        <Box minHeight="100vh" overflowX="hidden">
          <Flex
            p={7}
            borderRadius="md"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            color="white"
            alignItems="center"
            justifyContent="space-around"
            minHeight="80vh"
            width="100%"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              width="100%"
              height="100%"
              backgroundImage={`url(${vndceper})`}
              backgroundSize="contain"  // Bisa juga "contain" jika ingin sesuai dengan konten
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              zIndex="-1"
            ></Box>

            <Box position="relative" zIndex="1">
              <ScrollLink to="about" smooth={true} duration={500}>
                <Button
                  colorScheme="white"
                  size="lg"
                  textColor="black"
                  border="2px solid black"
                  padding="10px 20px"
                  borderRadius="md"
                  marginTop="75%"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </ScrollLink>
            </Box>
          </Flex>
        </Box>
      </Element>

      <Element name="about">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box backgroundColor="#1D566E" padding="8px" width="100%" borderRadius={9}>
            <About />
          </Box>
        </motion.div>
      </Element>

      <Element name="productsproses">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box backgroundColor="white" padding="8px" width="100%">
            <ProductsProses />
          </Box>
        </motion.div>
      </Element>

      <Element name="products">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box backgroundColor="#1D566E" padding="8px" width="100%" borderRadius={9}>
            <Products />
          </Box>
        </motion.div>
      </Element>

      <Element name="assesment">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box backgroundColor="white" padding="8px" width="100%">
            <Assesments />
          </Box>
        </motion.div>
      </Element>

      {/* Tombol WhatsApp di pojok kanan bawah */}
      <Box
        position="fixed"
        bottom="4"
        right="4"
        zIndex="1000"
      >
        <Link href="https://wa.me/6281288915155" isExternal>
          <IconButton
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            size="lg"
            colorScheme="green"
          />
        </Link>
      </Box>
    </>
  );
};

export default HomePage;
