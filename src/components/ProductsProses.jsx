import React from 'react';
import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    { id: 1, src: '/image/Gambar_proses_1.jpg'},
    { id: 2, src: '/image/Gambar_proses_2.jpg'},
    { id: 3, src: '/image/Gambar_proses_3.jpg'},
    { id: 4, src: '/image/Gambar_proses_4.jpg'},
    { id: 5, src: '/image/Gambar_proses_5.jpg'},
    { id: 6, src: '/image/Gambar_proses_6.jpg'},
    { id: 7, src: '/image/Gambar_proses_7.jpg'},
    { id: 8, src: '/image/Gambar_proses_8.jpg'},
  ];

  return (
    <Box p={8} bg="white" borderRadius="md" mb={8} textAlign="center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading
          as="h2"
          size="xl"
          mb={4}
          fontFamily="'Emblema One', cursive"
          color='#1D566E'
          textAlign="center"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)" 
        >
          Production Process
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
          gap={4}
          justifyContent="center"
          maxWidth="800px"
          marginX="auto"
          overflowX="auto"
        >
          {products.map((product) => (
            <GridItem key={product.id} textAlign="center">
              <img
                src={product.src}
                alt={`Gambar Produk ${product.id}`}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </GridItem>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Products;
