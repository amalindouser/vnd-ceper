import React, { useRef } from "react";
import { Box, HStack, Image, IconButton, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

// Array of assessment image URLs
const assesments = [
  "/src/assets/Image/Assesment_1.jpg",
  "/src/assets/Image/Assesment_2.jpg",
  "/src/assets/Image/Assesment_3.jpg",
  "/src/assets/Image/Assesment_4.jpg",
  "/src/assets/Image/Assesment_5.jpg",
  "/src/assets/Image/Assesment_6.jpg",
  "/src/assets/Image/Assesment_7.jpg",
  "/src/assets/Image/Assesment_8.jpg",
  "/src/assets/Image/Assesment_9.jpg",
  "/src/assets/Image/Assesment_10.jpg",
  "/src/assets/Image/Assesment_11.jpg",
  "/src/assets/Image/Assesment_12.jpg",
  "/src/assets/Image/Assesment_13.jpg",
  "/src/assets/Image/Assesment_14.jpg",
  "/src/assets/Image/Assesment_15.jpg",
  "/src/assets/Image/Assesment_16.jpg"
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
