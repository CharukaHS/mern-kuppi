import React from "react";
import type { NextPage } from "next";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

const dashboard: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <Heading>Todo App 👋</Heading>

      <Container mt="35px" overflowY="auto" maxH="75%">
        <Box
          border="1px"
          borderColor="teal"
          paddingX={4}
          paddingY={5}
          rounded="md"
          marginY="10px"
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            expedita doloribus voluptate iusto at error nisi aspernatur fugit
            harum ipsa atque alias, ratione mollitia, deleniti rerum temporibus
            in blanditiis corrupti!
          </Text>
          <Button colorScheme="teal">Done</Button>
        </Box>
      </Container>

      <Button mt={4}>Add New</Button>
    </Flex>
  );
};

export default dashboard;
