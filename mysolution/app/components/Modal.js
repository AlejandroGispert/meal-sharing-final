"use client";
import styles from "../page.module.css";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image"; // Assuming you are using Next.js

export default function ModalComponent({
  isOpen,
  setIsOpen,
  fetchedSingleMeal,
  currentMealId,
}) {
  const [singleMeal, setSingleMeal] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [isOpenReviews, setIsOpenReviews] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(true);

  const fetchDataSingle = async (mealId) => {
    const response = await fetch(
      `https://meal-sharing-final-backend.onrender.com/meals/${mealId}`
    );
    const data = await response.json();
    return data;
  };

  const fetchReviews = async (mealId) => {
    const response = await fetch(
      `https://meal-sharing-final-backend.onrender.com/meals/${mealId}/reviews`
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    if (isOpen && !singleMeal) {
      fetchDataSingle(currentMealId).then((meal) => setSingleMeal(meal[0]));
    }

    function fetchReviewsCall() {
      if (isOpen && !reviews) {
        fetchReviews(currentMealId).then((review) => setReviews(review[0]));
      }
    }
    fetchReviewsCall();
  }, [isOpen, currentMealId, singleMeal]);

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsMoved(false); // Reset modal position when reopened
    setBackdropVisible(true);
    setIsOpenReviews(false);
  };

  const handleToggleReviews = () => {
    setIsOpenReviews((prev) => !prev);
    setIsMoved(true); // Move the modal to the left
    setBackdropVisible(false); // Hide the backdrop
  };

  return (
    <>
      {/* Ensure the isOpen is passed correctly */}
      {typeof isOpen !== "undefined" && (
        <Modal
          open={isOpen}
          onClose={handleCloseModal}
          disablePortal={true}
          hideBackdrop={!backdropVisible}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: isMoved ? "30%" : "50%", // Move modal to the left
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              transition: "left 0.5s ease", // Add smooth transition for moving
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
                  layout="intrinsic"
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
              onClick={handleCloseModal}
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
            <Button
              onClick={handleToggleReviews}
              variant="outlined"
              sx={{ mt: 2 }}
            >
              {isOpenReviews ? "Hide Reviews" : "Show Reviews"}
            </Button>
          </Box>
        </Modal>
      )}

      {/* The Reviews box, appearing on the right */}
      {isOpenReviews && (
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 3,
            overflowY: "scroll", // In case reviews exceed box height
            maxHeight: "80%", // Limit the max height
          }}
        >
          <Typography variant="h6">Reviews</Typography>
          {reviews ? (
            reviews.map((review, index) => (
              <Box key={index} sx={{ mt: 2 }}>
                <Typography variant="body1" color="textSecondary">
                  {review.title}
                </Typography>
                <Typography variant="body2">* {review.description}</Typography>
                <Typography variant="body2">* {review.stars}</Typography>
              </Box>
            ))
          ) : (
            <Typography>Loading Reviews...</Typography>
          )}
        </Box>
      )}
    </>
  );
}
