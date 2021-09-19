import React, { useState } from "react";
import type { NextPage } from "next";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import TodoCard from "../components/TodoCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type NewTodoType = {
  title: string;
  description?: string;
};

const Dashboard: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewTodoType>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [todos, settodos] = useState<NewTodoType[]>([]);

  const onSubmit = (value: NewTodoType) => {
    settodos([...todos, value]);
    onClose();
    reset();
  };

  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <Heading>Todo App 👋</Heading>

      <Container mt="35px" overflowY="auto" maxH="75%">
        {todos.map((todo) => {
          return (
            <TodoCard
              key={todo.title}
              title={todo.title}
              description={todo.description}
            />
          );
        })}
      </Container>

      <Button mt={4} onClick={onOpen}>
        Add New
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>New Todo</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                type="text"
                placeholder="Todo Title"
                mb={5}
                isRequired
                {...register("title", { required: true })}
              />
              {errors.title && <span>This field is required</span>}
              <Textarea
                placeholder="Description"
                {...register("description")}
              />
              {errors.description && <span>This field is required</span>}
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Reset
              </Button>
              <Button type="submit" colorScheme="teal">
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Dashboard;
