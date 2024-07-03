import React from 'react';
import { Box, Heading, Image, Grid, GridItem } from '@chakra-ui/react';

const Products = () => {
  const products = [
    { id: 1, src: '../public/product_proses/Gambar_1.jpg'},
    { id: 2, src: '../public/product_proses/Gambar_2.jpg'},
    { id: 3, src: '../public/product_proses/Gambar_3.jpg'},
    { id: 4, src: '../public/product_proses/Gambar_4.jpg'},
    { id: 5, src: '../public/product_proses/Gambar_5.jpg'},
    { id: 6, src: '../public/product_proses/Gambar_6.jpg'},
    { id: 7, src: '../public/product_proses/Gambar_7.jpg'},
    { id: 8, src: '../public/product_proses/Gambar_8.jpg'},
  ];

  return (
    <Box p={8} bg="white" borderRadius="md" mb={8} textAlign="center">
      <Heading
        as="h2"
        size="xl"
        mb={4}
        fontFamily="'Emblema One', cursive"
        textColor='#1D566E'
        textAlign="center"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)" 
      >
        Production Process
      </Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))" 
        gap={4}
        justifyContent="center"
        maxW="800px"
        mx="auto"
        marginTop={10}
      >
        {products.map((product) => (
          <GridItem key={product.id} textAlign="center">
            <Image
              src={product.src}
              alt={`Gambar Produk ${product.id}`}
              borderRadius="md"
              boxSize="200px" // Ukuran tetap untuk responsif
              objectFit="cover"
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
