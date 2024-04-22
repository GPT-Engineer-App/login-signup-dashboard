import React from "react";
import { VStack, Button } from "@chakra-ui/react";
import { FaHome, FaUserCog } from "react-icons/fa";

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

const Dashboard = () => {
  return (
    <SidebarContent />
  );
};

export default Dashboard;