import React, { useRef } from "react";
import { Box, HStack, Image, IconButton, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

// Array of assessment image URLs
const assesments = [
  "/image/Assesment_1.jpg",
  "/image/Assesment_2.jpg",
  "/image/Assesment_3.jpg",
  "/image/Assesment_4.jpg",
  "/image/Assesment_5.jpg",
  "/image/Assesment_6.jpg",
  "/image/Assesment_7.jpg",
  "/image/Assesment_8.jpg",
  "/image/Assesment_9.jpg",
  "/image/Assesment_10.jpg",
  "/image/Assesment_11.jpg",
  "/image/Assesment_12.jpg",
  "/image/Assesment_13.jpg",
  "/image/Assesment_14.jpg",
  "/image/Assesment_15.jpg",
  "/image/Assesment_16.jpg"
];

const Assesments = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Box position="relative" width="100%" overflow="hidden" height="90%">
      <Heading
        as="h2"
        size="xl"
        mb={6}
        fontFamily="'Emblema One', cursive"
        textColor='#1D566E'
        textAlign="center"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)"
      >
        Their Assessment
      </Heading>
      <IconButton
        icon={<ArrowLeftIcon />}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        onClick={() => scroll(-300)}
        aria-label="Scroll Left"
        bg="white"
      />
      <Box
        ref={scrollRef}
        overflowX="scroll"
        whiteSpace="nowrap"
        scrollBehavior="smooth"
        width="100%"
        p={4}
      >
        <HStack spacing={4}>
          {assesments.map((imageUrl, index) => (
            <Box key={index} minWidth="300px" textAlign="center">
              <Image src={imageUrl} alt={`Assessment ${index + 1}`} />
            </Box>
          ))}
        </HStack>
      </Box>
      <IconButton
        icon={<ArrowRightIcon />}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        onClick={() => scroll(300)}
        aria-label="Scroll Right"
        bg="white"
      />
    </Box>
  );
};

export default Assesments;
