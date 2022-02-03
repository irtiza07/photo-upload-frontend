import {
  Center,
  Text,
  Heading,
  VStack,
  Button,
  Input,
  HStack,
  Container,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setIsSelected(true);
    setSelectedFile(e.target.files[0]);
  };

  const onFileUpload = (e) => {
    console.log("About to upload file! Yay!");
    const requestBody = JSON.stringify({
      fileName: selectedFile.name,
      fileToUpload: selectedFile,
    });
    console.log(requestBody);
    //TODO: Make the API call to upload
  };
  return (
    <ChakraProvider>
      <Center bg="black" color="white" padding={8}>
        <VStack spacing={7}>
          <Heading>Your Gallery</Heading>
          <Text>Take a look at all your photos!</Text>
          <HStack>
            <input type="file" onChange={onInputChange}></input>

            <Button
              size="lg"
              colorScheme="red"
              isDisabled={!isSelected}
              onClick={onFileUpload}
            >
              Upload Photo
            </Button>
          </HStack>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default App;
