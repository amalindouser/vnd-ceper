import React from 'react';
import { Box, Heading, Image, Grid, GridItem } from '@chakra-ui/react';

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
