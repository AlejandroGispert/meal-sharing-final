"use client";
import styles from "../page.module.css";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import ReviewBox from "./ReviewBox";
import { useAuth } from "../../AuthContext";
export default function ModalComponent({
  isOpen,
  setIsOpen,
  fetchedSingleMeal,
  currentMealId,
}) {
  const [singleMeal, setSingleMeal] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isOpenReviews, setIsOpenReviews] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [statusState, setStatusState] = useState("Unknown");
  const { user } = useAuth();

  const fetchDataSingle = async (mealId) => {
    try {
      const response = await fetch(
        `https://meal-sharing-final-backend.onrender.com/meals/${mealId}`
      );

      if (!response.ok) throw new Error("Failed to fetch meal data");
      const data = await response.json();
      console.log("Fetched meal data:", data);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchReviews = async (mealId) => {
    try {
      const response = await fetch(
        `https://meal-sharing-final-backend.onrender.com/meals/${mealId}/reviews`
      );
      if (!response.ok) throw new Error("Failed to fetch reviews");
      const data = await response.json();
      console.log("Fetched reviews:", data);
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setSingleMeal(null);

      fetchDataSingle(currentMealId).then((meal) => {
        if (meal) {
          setSingleMeal(Array.isArray(meal) ? meal[0] : meal);
          setLoading(false); //Stop loading after fetch completes
        } else {
          setLoading(false); // Stop loading even if fetch fails
        }
      });

      fetchReviews(currentMealId).then((review) => setReviews(review));
    }

    return () => {};
  }, [isOpen, currentMealId]);

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
            {loading ? ( // Display loading indicator while data is being fetched
              <Typography>Loading...</Typography>
            ) : singleMeal ? (
              <>
                <Typography id="simple-modal-title" variant="h6" component="h2">
                  Meal: {singleMeal.title}
                </Typography>
                <Image
                  alt={singleMeal.title}
                  src={
                    singleMeal.image_url
                      ? singleMeal.image_url
                      : "./images/empty.jpg"
                  }
                  width={300}
                  height={300}
                  layout="intrinsic"
                />
                <Typography id="simple-modal-description" sx={{ mt: 2 }}>
                  Description: {singleMeal.description}
                </Typography>

                <Typography variant="body1">
                  Place: {singleMeal.location}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  <Typography variant="body1">
                    Max Reservations: {singleMeal.max_reservations}
                  </Typography>
                </Typography>
                <Typography>Price: {singleMeal.price}</Typography>

                <Typography variant="h6" color="textSecondary">
                  Status: {statusState}
                </Typography>
              </>
            ) : (
              <Typography>Failed to load meal data</Typography>
            )}
            <Button
              onClick={handleCloseModal}
              variant="outlined"
              sx={{ mt: 2 }}
            >
              Close
            </Button>
            {user && (
              <Button
                onClick={() => alert("reserved")}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                Reserve
              </Button>
            )}
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
      {isOpenReviews && <ReviewBox reviews={reviews} />}
    </>
  );
}
