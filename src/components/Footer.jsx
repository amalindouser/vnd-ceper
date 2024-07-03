import React from 'react';
import { Box, Heading, HStack, Link, Text, Icon, Flex } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" p={4} backgroundColor="#1D566E" color="white" textAlign="center">
      <Heading
        as="h2"
        size="xl"
        mb={6}
        fontFamily="'Emblema One', cursive"
        textColor='white'
        textAlign="center"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)" // Menambahkan bayangan
      >
        Contact Us Or Location
      </Heading>
      <Flex justifyContent="center" mb={4} overflowX="scroll" borderRadius={9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.4074115023193!2d110.40033801241367!3d-7.809418257303158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xacdf8b72fca513c1%3A0x91756122e5f7311!2sVND%20Ceper%20%7C%20Sablon%20dan%20Konveksi%20Jogja!5e0!3m2!1sid!2sid!4v1719777781651!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Flex>
      <HStack spacing={6} justifyContent="center" mb={4}>
        <Link href="https://web.facebook.com/vandoceper" isExternal>
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="https://www.instagram.com/vndceper.industries" isExternal>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
        <Link href="https://wa.me/6281288915155" isExternal>
          <Icon as={FaWhatsapp} boxSize={6} />
        </Link>
        <Link href="mailto:info@vndceper.com" isExternal>
          <Icon as={FaEnvelope} boxSize={6} />
        </Link>
      </HStack>
      <Text mb={2}>Alamat Lengkap:</Text>
      <Text>Gg. Menur 2, Rejowinangun, Kec. Kotagede, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55171</Text>
      <Text>Kode Pos: 55000</Text>
    </Box>
  );
};

export default Footer;
