import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaGamepad, FaBowlingBall, FaCar, FaUtensils, FaLock } from "react-icons/fa";
import { GiLaserSparks } from "react-icons/gi";

const Index = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to SK's Arcade!
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your ultimate destination for fun and excitement.
        </Text>
        <Image src="https://images.unsplash.com/photo-1550434605-d1a3cb21158e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcmNhZGUlMjBnYW1lc3xlbnwwfHx8fDE3MTQ2NjYyNzN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="Arcade Games" />
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} my={10}>
        <ActivityCard icon={<FaGamepad fontSize="3rem" />} title="Arcade Games" description="Enjoy a wide range of classic and new arcade games." />
        <ActivityCard icon={<GiLaserSparks fontSize="3rem" />} title="Lazer Tag" description="Battle it out in our state-of-the-art lazer tag arena." />
        <ActivityCard icon={<FaCar fontSize="3rem" />} title="Go Karting" description="Race to the finish line in our thrilling go-kart tracks." />
        <ActivityCard icon={<FaLock fontSize="3rem" />} title="Escape Room" description="Challenge your wits in our mysterious escape rooms." />
        <ActivityCard icon={<FaBowlingBall fontSize="3rem" />} title="Bowling" description="Strike out at our modern bowling lanes." />
        <ActivityCard icon={<FaUtensils fontSize="3rem" />} title="Dine-In" description="Relax and refuel at our dine-in restaurant with a variety of dishes." />
      </SimpleGrid>
    </Container>
  );
};

const ActivityCard = ({ icon, title, description }) => {
  return (
    <VStack p={5} boxShadow="md" borderRadius="lg" align="center" bg="gray.100">
      <Box color="teal.500" mb={3}>
        {icon}
      </Box>
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
      <Button colorScheme="teal" mt={3}>
        Learn More
      </Button>
    </VStack>
  );
};

export default Index;
