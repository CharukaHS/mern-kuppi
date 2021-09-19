import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

interface TodoCardProps {
  title: string;
  description?: string;
}

const TodoCard: React.FC<TodoCardProps> = ({ title, description }) => {
  return (
    <Box
      border="1px"
      borderColor="teal"
      paddingX={4}
      paddingY={5}
      rounded="md"
      marginY="10px"
    >
      <Heading size="md">{title}</Heading>

      <Text>{description}</Text>

      <Button colorScheme="teal" mt={4}>
        Done
      </Button>
    </Box>
  );
};

export default TodoCard;
