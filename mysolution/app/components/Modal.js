"use client";
import styles from "../page.module.css";
import { Grid2, Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Image from "next/image"; // Assuming you are using Next.js

export default function ModalComponent({
  isOpen,
  setIsOpen,
  fetchedSingleMeal,
  currentMealId,
}) {
  const [singleMeal, setSingleMeal] = useState(null);

  const fetchDataSingle = async (mealId) => {
    const response = await fetch(
      `https://meal-sharing-final-backend.onrender.com/meals/${mealId}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (isOpen && !singleMeal) {
      fetchDataSingle(currentMealId).then((meal) => setSingleMeal(meal[0]));
    }
  }, [isOpen, currentMealId, singleMeal]); // Add dependencies to prevent redundant calls

  const handleCloseModal = () => setIsOpen(false);

  console.log("here: " + fetchedSingleMeal);
  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        {fetchedSingleMeal ? (
          <>
            <Typography id="simple-modal-title" variant="h6" component="h2">
              Meal: {fetchedSingleMeal.title}
            </Typography>
            <Image
              alt={fetchedSingleMeal.title}
              src={fetchedSingleMeal.image_url}
              width={300}
              height={300}
            />
            <Typography id="simple-modal-description" sx={{ mt: 2 }}>
              Description: {fetchedSingleMeal.description}
            </Typography>

            <Typography variant="body1">
              Place: {fetchedSingleMeal.location}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              <Typography variant="body1">
                Max Reservations: {fetchedSingleMeal.max_reservations}
              </Typography>
            </Typography>
            <Typography>Price: {fetchedSingleMeal.price}</Typography>
          </>
        ) : (
          <Typography>Loading...</Typography>
        )}
        <Button
          onClick={handleCloseModal} // Invoke the function
          variant="outlined"
          sx={{ mt: 2 }}
        >
          Close
        </Button>
        <Button
          onClick={() => alert("reserved")}
          variant="outlined"
          sx={{ mt: 2 }}
        >
          Reserve
        </Button>
      </Box>
    </Modal>
  );
}
