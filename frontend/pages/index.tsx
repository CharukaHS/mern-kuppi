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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type Inputs = {
  newtodo: string;
};

const Dashboard: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [todos, settodos] = useState<string[]>([]);

  const onSubmit = (value: Inputs) => {
    settodos([...todos, value.newtodo]);
    onClose();
    reset();
  };

  return (
    <Flex direction="column" justify="center" align="center" height="100vh">
      <Heading>Todo App 👋</Heading>

      <Container mt="35px" overflowY="auto" maxH="75%">
        {todos.map((todo) => {
          return <TodoCard key={todo} task={todo} />;
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
              <Textarea
                placeholder="Here is a sample placeholder"
                {...register("newtodo", { required: true })}
              />
              {errors.newtodo && <span>This field is required</span>}
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
