import React from 'react';
import { Box, Heading, Text, Image, Grid, GridItem } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={8} bg="" borderRadius="md" mr={8} mb={8}>
      <Heading
        as="h2"
        size="xl"
        mb={4}
        fontFamily="'Emblema One', cursive"
        textColor='white'
        textAlign="center"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)" 
      >
        Tentang Kami
      </Heading>
      <Text mb={4} textColor='white' textAlign="center">
        VND Ceper Industries, yang berlokasi di Yogyakarta, adalah solusi terbaik untuk kebutuhan pakaian jadi Anda. Kami menawarkan berbagai jenis pakaian dengan kualitas produksi yang tinggi dan desain yang beragam, termasuk kaos, polo shirt, kemeja, jaket, dan masih banyak lagi. Dengan pengalaman yang luas di industri konveksi, kami berkomitmen untuk memberikan produk dengan kualitas yang terjamin.
      </Text>
      <Text mb={4} textColor='white' textAlign="center">
        Setiap pakaian yang kami produksi melewati proses kontrol kualitas yang ketat untuk memastikan kepuasan pelanggan. Kami menyediakan berbagai pilihan desain yang dapat disesuaikan dengan kebutuhan dan preferensi Anda. Bertahun-tahun di industri ini membuat kami memahami kebutuhan pelanggan dan selalu berusaha untuk memberikan yang terbaik.
      </Text>
      <Text textColor='white' textAlign="center" fontWeight="bold">
        Jadikan VND Ceper Industries pilihan Anda untuk pakaian berkualitas tinggi dengan desain yang menawan. Hubungi kami sekarang dan temukan pakaian yang sempurna untuk Anda!
      </Text>
    </Box>
  );
};

const ImageGallery = () => {
  const images = [
    { src: '/image/Gambar_1.png', alt: 'Keterangan gambar 1', caption: 'VND Ceper didukung oleh tenaga ahli yang berpengalaman dibidang clothing dan konveksi.' },
    { src: '/image/Gambar_2.png', alt: 'Keterangan gambar 2', caption: 'Didukung dengan alat sablon dan mesin jahit yang modern menghasilkan produk yang berkualitas.' },
    { src: '/image/Gambar_3.png', alt: 'Keterangan gambar 3', caption: 'Hasil berkualitas dan mampu mencukupi kebutuhan produksi kalian.' },
    { src: '/image/Gambar_4.png', alt: 'Keterangan gambar 4', caption: 'Kami berusaha menyelesaikan semua pesanan dengan tepat waktu.' },
    { src: '/image/Gambar_5.png', alt: 'Keterangan gambar 5', caption: 'Kami bisa membuat berbagai macam kebutuhan pakaian kalian.' },
  ];

  return (
    <Box p={8} bg="#1D566E" borderRadius="md" textAlign="center">
      <Heading
        as="h2"
        size="xl"
        mb={6}
        fontFamily="'Emblema One', cursive"
        textColor='white'
        textAlign="center"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)" 
      >
        Kenapa Memilih Kami?
      </Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))" 
        gap={4}
        justifyContent="center"
        maxW="1200px" 
        mx="auto" 
      >
        {images.map((image, index) => (
          <GridItem key={index} textAlign="center">
            <Image
              src={image.src}
              alt={image.alt}
              borderRadius="md"
              width="100%" 
              height="150px"
              objectFit="cover"
            />
            <Text mt={2} textColor="white" fontSize="sm">{image.caption}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

const App = () => {
  return (
    <>
      <About />
      <ImageGallery />
    </>
  );
};

export default App;
