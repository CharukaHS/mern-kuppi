import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

interface TodoCardProps {
  task: string;
}

const TodoCard: React.FC<TodoCardProps> = ({ task }) => {
  return (
    <Box
      border="1px"
      borderColor="red"
      paddingX={4}
      paddingY={5}
      rounded="md"
      marginY="10px"
    >
      <Text>{task}</Text>
      <Button colorScheme="teal">Done</Button>
    </Box>
  );
};

export default TodoCard;
