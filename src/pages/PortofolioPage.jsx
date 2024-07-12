import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Import icons jika diperlukan
import Portfolio from '../components/Portofolio';

const PortfolioPage = () => {
  // Fungsi untuk menangani klik tombol Instagram
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/vndceper.industries', '_blank'); // Mengarahkan ke Instagram dalam tab baru
  };

  // Fungsi untuk menangani klik tombol Facebook
  const handleFacebookClick = () => {
    window.open('https://web.facebook.com/vandoceper', '_blank'); // Mengarahkan ke Facebook dalam tab baru
  };

  return (
    <div>
      {/* Container utama menggunakan Flex untuk posisi horizontal */}
      <Flex justify="space-between" mt={8} p={4} flexWrap="wrap">
        {/* Judul Portofolio */}
        <Heading
          as="h2"
          size="xl"
          mb={4}
          fontFamily="'Emblema One', cursive"
          textColor='#1D566E'
          textAlign="center"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
          width="100%"
        >
          Portofolio
        </Heading>

        {/* Card Instagram */}
        <Flex
          align="center"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          mb={4}
          p={4} // Padding tambahan di dalam card
        >
          {/* Ikon Instagram */}
          <FaInstagram size={40} color="#C13584" />

          {/* Konten di sebelah kanan ikon */}
          <Flex direction="column" ml={4}>
            <Heading as="h5" size="md" mb={2}>
              Instagram
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={2}>
              Follow us on Instagram for the latest updates.
            </Text>
            <Button colorScheme="blue" size="sm" onClick={handleInstagramClick}>
              Go to Instagram
            </Button>
          </Flex>
        </Flex>

        {/* Card Facebook */}
        <Flex
          align="center"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="md"
          mb={4}
          p={4} // Padding tambahan di dalam card
        >
          {/* Ikon Facebook */}
          <FaFacebook size={40} color="#3b5998" />

          {/* Konten di sebelah kanan ikon */}
          <Flex direction="column" ml={4}>
            <Heading as="h5" size="md" mb={2}>
              Facebook
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={2}>
              Like our Facebook page to stay connected.
            </Text>
            <Button colorScheme="blue" size="sm" onClick={handleFacebookClick}>
              Go to Facebook
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Portfolio />
    </div>
  );
};

export default PortfolioPage;
