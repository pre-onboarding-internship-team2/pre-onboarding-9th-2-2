import React from "react";
import { Box, Button, Container, Heading, Text, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundColor="#789BFB"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container
        height="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#fff"
        borderRadius="5px"
        boxShadow="5px 5px 10px rgba(0,0,0,0.5)"
      >
        <Heading textAlign="center" fontSize="5rem">
          404
        </Heading>
        <Text textAlign="center" fontSize="2.5rem" mb="30px">
          Page not found
        </Text>
        <Icon as={FcHome} w={45} h={45} mb="10px" />
        <Button color="#999" onClick={() => navigate("/main")}>
          Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
