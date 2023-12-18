import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavPlantContext } from "../../../../context/FavPlantContext";
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

const PlantDetail = ({
  plant_id,
  common_name,
  image_url,
  scientific_name,
  climate,
  sunlight,
  watering,
}) => {
  const { favPlant, updateFavPlant } = useContext(FavPlantContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickAdd = () => {
    const plantObj = {
      plant_id,
      common_name,
      image_url,
      scientific_name,
      climate,
      sunlight,
      watering
    };
    updateFavPlant(plantObj);
    console.log(plantObj);
    localStorage.setItem('plant_context', JSON.stringify(plantObj));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details: {common_name}</ModalHeader>
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
              <CardFooter justify="end"></CardFooter>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="green"
              mr={3}
              onClick={handleClickAdd}
            >
              <Link to="/add-favorite">Add</Link>
            </Button>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Card id={plant_id} maxW="sm" backgroundColor="green.50" m="10px">
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
            <Button variant="solid" colorScheme="green" onClick={handleClickAdd}>
              <Link to="/add-favorite">Add</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default PlantDetail;

