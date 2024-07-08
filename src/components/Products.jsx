import React from 'react';
import { Grid, Box, Image, Text, useBreakpointValue, Heading, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons'; // Icon untuk tombol unduh
import products from '../utils/products';

const Product = () => {
  const columns = useBreakpointValue({
    base: "repeat(auto-fit, minmax(150px, 1fr))",
    md: "repeat(3, 1fr)",
  });

  const justifyLastItem = useBreakpointValue({
    base: "center",
    md: "initial",
  });

  return (
    <Box py="6">
      <Heading as="h2"
        size="xl"
        mb={4}
        fontFamily="'Emblema One', cursive"
        textColor='white'
        textAlign="center"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)">
        Product Highlight
      </Heading>
      <Grid
        templateColumns={columns}
        gap={4}
        justifyContent="center"
        maxW="1200px"
        mx="auto"
      >
        {products.map((product, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" justifySelf={index === products.length - 1 ? justifyLastItem : "initial"}>
            <Image 
              src={product.src} 
              alt={product.name} 
              width="100%" 
              height="auto"
              objectFit="cover"
            />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Text
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  textColor="white"
                  lineHeight="tight"
                  isTruncated
                >
                  {product.name}
                </Text>
              </Box>
              <Box>
                <Text textColor="white">{product.price}</Text>
              </Box>
              <Box>
                <Text textColor="white">{product.specs}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
      {/* Tautan untuk mengunduh pricelist */}
      <Box mt="6" textAlign="center">
        <Button
          as="a"
          href="/dokPricelist/Pricelistvndceperindustries.pdf"
          download
          colorScheme="blue"
          leftIcon={<DownloadIcon />}
        >
          Unduh Pricelist
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
