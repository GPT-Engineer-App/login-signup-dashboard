import React, { useState } from "react";
import { Box, Button, Flex, FormControl, FormLabel, Input, Stack, Text, useColorModeValue, VStack, Heading, Link, Icon, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaBars, FaHome, FaUserCog } from "react-icons/fa";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const LoginForm = () => (
    <VStack spacing={4} align="flex-start">
      <FormControl>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
      </FormControl>
      <Button leftIcon={<FaSignInAlt />} colorScheme="blue" w="full" mt={4}>
        Sign In
      </Button>
      <Link color="blue.500" onClick={toggleForm}>
        Create account
      </Link>
    </VStack>
  );

  const SignupForm = () => (
    <VStack spacing={4} align="flex-start">
      <FormControl>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
      </FormControl>
      <Button leftIcon={<FaUserPlus />} colorScheme="blue" w="full" mt={4}>
        Sign Up
      </Button>
      <Link color="blue.500" onClick={toggleForm}>
        Already have an account?
      </Link>
    </VStack>
  );

  const SidebarContent = () => (
    <VStack align="flex-start" p={5}>
      <Button leftIcon={<FaHome />} justifyContent="flex-start" w="full">
        Home
      </Button>
      <Button leftIcon={<FaUserCog />} justifyContent="flex-start" w="full">
        Settings
      </Button>
    </VStack>
  );

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Heading fontSize="4xl">{isLogin ? "Sign in to your account" : "Create an account"}</Heading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.200")}>
            {isLogin ? "to enjoy all of our cool features" : "and join our great platform"}
          </Text>
        </Stack>
        <Box rounded="lg" bg={useColorModeValue("white", "gray.700")} boxShadow="lg" p={8}>
          {isLogin ? <LoginForm /> : <SignupForm />}
        </Box>
      </Stack>
      <Button onClick={onOpen} pos="fixed" top="1rem" left="1rem" colorScheme="teal">
        <Icon as={FaBars} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Navigation</DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Index;
