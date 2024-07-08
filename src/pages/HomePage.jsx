import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, IconButton, Link, Grid, GridItem } from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import About from '../components/About';
import ProductsProses from '../components/ProductsProses';
import Products from "../components/Products";
import Assesments from '../components/Assesments';
import fotoDaun from '../assets/foto_daun.jpg';

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
              backgroundImage={`url(${fotoDaun})`}
              filter="blur(8px)"
              zIndex="-1"
            ></Box>

            <Grid
              templateColumns={{ base: '1fr', md: '1fr 2fr' }}
              gap={4}
              alignItems="center"
              width="100%"
            >
              <GridItem>
                <Image 
                  src="/image/foto_awal.png"
                  alt="VND Ceper Industries"
                  boxSize={{ base: '300px', md: '400px' }}
                  objectFit="cover"
                  borderRadius={10}
                  width="100%"
                  as={motion.img}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </GridItem>
              <GridItem>
                <Box textAlign="left" p={4} as={motion.div}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
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
              </GridItem>
            </Grid>
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
