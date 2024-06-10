import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="brand.800" color="white" py={4} px={8}>
    <Heading as="h1" size="lg">Event Management Platform</Heading>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="brand.800" color="white" py={4} px={8} mt="auto">
    <Text>&copy; 2023 Event Management Platform. All rights reserved.</Text>
  </Box>
);

const MainContent = () => (
  <Container maxW="container.md" py={8}>
    <VStack spacing={4}>
      <Heading as="h2" size="md">Upcoming Events</Heading>
      <Text>No events available. Please check back later.</Text>
    </VStack>
  </Container>
);

const Index = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <MainContent />
      <Footer />
    </Flex>
  );
};

export default Index;