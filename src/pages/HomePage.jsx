import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, IconButton, Link } from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import About from '../components/About';
import ProductsProses from '../components/ProductsProses';
import Products from "../components/Products";
import Assesments from '../components/Assesments';

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
              backgroundImage="url('/images/foto_daun.jpg')"
              filter="blur(8px)"
              zIndex="-1"
            ></Box>

            <Box flex="1" width="100%">
              <Image 
                src="/images/foto_awal.png"
                alt="VND Ceper Industries"
                boxSize="400px"
                objectFit="cover"
                borderRadius={10}
                width="100%"
              />
            </Box>
            <Box flex="2" textAlign="left" p={4} width="100%">
              <Heading as="h1" size="2xl" mb={4} fontFamily="'Emblema One', cursive" textColor="white">
                Selamat Datang di VND Ceper Industries
              </Heading>
              <Text fontSize="lg" mb={6} textColor="white">
                Solusi terbaik untuk kebutuhan pakaian jadi Anda.
              </Text>
              <ScrollLink to="about" smooth={true} duration={500}>
                <Button colorScheme="teal" size="lg">
                  Pelajari Lebih Lanjut
                </Button>
              </ScrollLink>
            </Box>
          </Flex>
        </Box>
      </Element>

      <Element name="about">
        <Box backgroundColor="#1D566E" padding="8px" width="100%">
          <About />
        </Box>
      </Element>

      <Element name="productsproses">
        <Box backgroundColor="white" padding="8px" width="100%">
          <ProductsProses />
        </Box>
      </Element>

      <Element name="products">
        <Box backgroundColor="#1D566E" padding="8px" width="100%">
          <Products />
        </Box>
      </Element>

      <Element name="assesment">
        <Box backgroundColor="white" padding="8px" width="100%">
          <Assesments />
        </Box>
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
