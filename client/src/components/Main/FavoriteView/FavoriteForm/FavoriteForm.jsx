import React, { useState, useContext } from "react";
import axios from "axios";
import { FavPlantContext } from "../../../../context/FavPlantContext";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const FavoriteForm = () => {
  const { favPlant } = useContext(FavPlantContext);

  const [formData, setFormData] = useState({
    personal_name: "",
    last_watered: "",
  });

  // PARA IR GUARDANDO EL VALOR DE FORM DATA EN EL ESTADO PARA QUE AL HACER EL SUBMIT LOS VALORES YA ESTÉN AHÍ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const createFavPlant = async () => {
      const plantsData = {
        plant_id: favPlant.plant_id,
        personal_name: formData.personal_name,
        status: handleStatus(),
        last_watered: formData.last_watered,
        water_reminder: handleCalcWatering(
          formData.last_watered,
          favPlant.watering
        ),
      };
      const resp = await axios.post(
        "http://localhost:3000/fav-plants/",
        plantsData
      );
    };
    createFavPlant();
  };

  const handleCalcWatering = (last_watered, watering) => {
    last_watered = formData.last_watered;
    watering = favPlant.watering; // ESTO ACCEDE A LA POSICION QUE NECESITO DEL ARRAY

    const arrWatering = [30, 20, 12, 7, 4];

    const lastWateredDate = new Date(last_watered);

    const waterReminderDate = new Date(lastWateredDate);

    waterReminderDate.setDate(
      lastWateredDate.getDate() + arrWatering[watering - 1]
    );

    console.log(waterReminderDate.toISOString());

    return waterReminderDate.toISOString();
  };

  const handleStatus = (last_watered, watering) => {
 
      last_watered = formData.last_watered;
      watering = favPlant.watering;

      const waterReminderDate = handleCalcWatering(
        last_watered,
        watering
      );
      const actualDate = new Date().toISOString();

      if (waterReminderDate < actualDate) {
        return false;
      } else {
        return true;
      }
  };

  return (
    <Box p={4} className="form">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel className="form_label" htmlFor="personal_name">
              Choose a name for your plant:
            </FormLabel>
            <Input
              className="form_input"
              type="text"
              id="personal_name"
              name="personal_name"
              value={formData.personal_name}
              onChange={handleChange}
              placeholder="Pinchitos"
            />
          </FormControl>

          <FormControl>
            <FormLabel className="form_label" htmlFor="last_watered">
              When was it last watered?
            </FormLabel>
            <Input
              className="form_input"
              type="date"
              id="last_watered"
              name="last_watered"
              value={formData.last_watered}
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="green">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default FavoriteForm;
