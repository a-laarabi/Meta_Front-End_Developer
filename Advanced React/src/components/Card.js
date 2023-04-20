import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack spacing={4} align="start" backgroundColor="white" borderRadius="2xl" color="black">
      <Image src={imageSrc} borderRadius="2xl" />
      <VStack align="start" padding={4}>
        <VStack align="start">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </VStack>
        <HStack>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
