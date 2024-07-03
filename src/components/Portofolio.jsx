import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Spinner, Flex, Center, Grid, GridItem } from '@chakra-ui/react';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetsu.com/apis/v1.0su/363d7216b60c'); // Ganti dengan URL API Sheetsu baru
        const data = await response.json();
        setPortfolio(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={6}
    >
      {portfolio.map((item, index) => (
        <GridItem key={index}>
          <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src={item['Image URL']}
              alt="Portfolio"
              fallbackSrc="https://via.placeholder.com/150"
              boxSize="100%"
              objectFit="cover"
            />
            <Box mt={4}>
              <Text fontSize="xl" fontWeight="bold">{item.Title}</Text>
              <Text mt={2}>{item.Description}</Text>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Portfolio;
