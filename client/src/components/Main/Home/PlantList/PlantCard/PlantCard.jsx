import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const PlantCard = ({
  common_name,
  image_url,
  scientific_name,
  climate,
  sunlight,
  watering,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card maxW="sm" backgroundColor="green.50" m="10px">
              <CardBody>
                <Image src={image_url} borderRadius="20px" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{common_name}</Heading>
                  <Heading size="sm">{scientific_name}</Heading>
                  <Text>Climate: {climate}</Text>
                  <Text>Sunlight level: {sunlight}</Text>
                  <Text>Watering level: {watering}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter justify="end">
              </CardFooter>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Card maxW="sm" backgroundColor="green.50" m="10px">
        <CardBody>
          <Image src={image_url} borderRadius="20px" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{common_name}</Heading>
            <Heading size="sm">{scientific_name}</Heading>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justify="end">
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="green" onClick={onOpen}>
              Get details
            </Button>
            <Button variant="solid" colorScheme="green">
              Add
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default PlantCard;

{
  /* <section className="plantCard">
      <img src={image_url} />
      <p>{common_name}</p>
      <p>{scientific_name}</p>
      <p>{climate}</p>
      <p>{sunlight}</p>
      <p>{watering}</p>
    </section> */
}
