import React from "react";
import type { NextPage } from "next";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import TodoCard from "../components/TodoCard";

const dashboard: NextPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <Heading>Todo App 👋</Heading>

      <Container mt="35px" overflowY="auto" maxH="75%">
        <TodoCard task="Bring Cheese" />
        <TodoCard task="Bring Koththu" />
        <TodoCard task="Bring Cheese" />
        <TodoCard task="Bring Cheese" />
        <TodoCard task="Bring Cheese" />
      </Container>

      <Button mt={4}>Add New</Button>
    </Flex>
  );
};

export default dashboard;
