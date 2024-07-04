import React from 'react';
import {
  Box, Flex, Heading, Spacer, IconButton, Link, HStack, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Image,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const colorPalette = {
    background: '#FFFFFF',
    secondary: '#C7EEFF',
    highlight: '#0077C0',
    accent: '#1D566E',
  };

  const handleNavigation = (to) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${to}`;
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 500,
      });
    }
  };

  return (
    <Box bg="#1D566E" px={8} py={4} boxShadow="sm" borderBottom="1px" borderColor="gray.200" position="sticky" top="0" zIndex="999">
      <Flex alignItems="center" maxW="1440px" mx="auto">
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }} display="flex" alignItems="center">
            <Image src="/src\assets\Image\logo_vnd-removebg-preview.png" alt="VND Ceper Industries Logo" boxSize="50px" mr={2} mb={1.5} width={200} />
            <Heading
              as="h1"
              size="lg"
              color={colorPalette.accent}
              fontFamily="'Poppins', sans-serif"
              fontWeight="600"
              textColor="white"
            >
              
            </Heading>
          </Link>
        </HStack>
        <Spacer />
        <HStack display={{ base: 'none', md: 'flex' }} spacing={8}>
          <Link onClick={() => handleNavigation('home')} fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }} textColor="white">
            Home
          </Link>
          <Link onClick={() => handleNavigation('about')} fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }} textColor="white">
            About Us
          </Link>
          <Link onClick={() => handleNavigation('products')} fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }} textColor="white">
            Products
          </Link>
          <Link onClick={() => handleNavigation('contact')} fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }} textColor="white">
            Contact Us
          </Link>
          <Link as={RouterLink} to="/portfolio" fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }} textColor="white">
            Portfolio
          </Link>
        </HStack>
        <IconButton
          aria-label="Menu"
          icon={<FaBars />}
          colorScheme="teal"
          variant="outline"
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      {/* Drawer for mobile */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VND Ceper Industries</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              <Link onClick={() => { handleNavigation('home'); onClose(); }} fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }}>
                Home
              </Link>
              <Link onClick={() => { handleNavigation('about'); onClose(); }} fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }}>
                About Us
              </Link>
              <Link onClick={() => { handleNavigation('products'); onClose(); }} fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }}>
                Products
              </Link>
              <Link onClick={() => { handleNavigation('contact'); onClose(); }} fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }}>
                Contact Us
              </Link>
              <Link as={RouterLink} to="/portfolio" fontWeight="bold" color={colorPalette.accent} _hover={{ color: colorPalette.highlight }} onClick={onClose}>
                Portfolio
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
