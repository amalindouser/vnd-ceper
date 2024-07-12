import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Spinner, Grid, GridItem, Heading, Divider } from '@chakra-ui/react';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetsu.com/apis/v1.0su/363d7216b60c'); 
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
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {portfolio.map((item, index) => (
          <GridItem key={index}>
            <Box p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image
                src={item['Image URL']}
                alt="Portfolio"
                fallbackSrc="https://via.placeholder.com/300"
                boxSize="100%"
                objectFit="cover"
              />
              <Box mt={4}>
                <Divider my={2} />
                <Text>{item.Description}</Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
