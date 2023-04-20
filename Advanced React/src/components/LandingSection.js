import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "I am a frontend developer";
const bio2 = "and React Expert";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        src="https://i.pravatar.cc/150?img=7"
        name="Peter Avatar"
      />
      <Heading as="h4" size="md">{greeting}</Heading>
      <VStack height={4} />
      <Heading as="h1" size="3xl" noOfLines={1}>{bio1}</Heading>
      <Heading as="h1" size="3xl" noOfLines={1}>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
