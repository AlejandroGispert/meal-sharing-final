"use client";
import styles from "../page.module.css";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import ReviewBox from "./ReviewBox";
import { useAuth } from "../../AuthContext";
import Modal2 from "./Modal2";
import ReserveBox from "./ReserveBox";

const calculateRemainingReservations = (
  reservations,
  maxReservationsFromMeal
) => {
  // Step 1: Check if reservations is a valid array
  if (!Array.isArray(reservations)) {
    console.error("Invalid reservations data:", reservations);
    return maxReservationsFromMeal || 0; // Return maxReservations if no reservations array
  }

  // Step 2: Sum the total number of guests, handle potential null values
  const totalGuests = reservations.reduce((total, reservation) => {
    if (!reservation || reservation.number_of_guests == null) {
      console.warn(
        "Invalid reservation or missing number_of_guests:",
        reservation
      );
      return total;
    }
    return total + reservation.number_of_guests;
  }, 0);

  // Step 3: Get max_reservations from the meal or from the first reservation
  const maxReservations =
    maxReservationsFromMeal || reservations[0]?.max_reservations || 0;

  // Step 4: Calculate remaining reservations
  const remainingReservations = maxReservations - totalGuests;

  // Step 5: Ensure remaining reservations are not negative
  return remainingReservations >= 0 ? remainingReservations : 0;
};

export default function ModalComponent({
  isOpen,
  setIsOpen,
  fetchedSingleMeal,
  currentMealId,
}) {
  const [singleMeal, setSingleMeal] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isOpenReviews, setIsOpenReviews] = useState(false);
  const [isOpenReserve, setIsOpenReserve] = useState(false);
  const [openAddReviewPart, setIsOpenAddReviewPart] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(true);
  const [loading, setLoading] = useState(true);
  const [statusState, setStatusState] = useState("Unknown");
  const [isAvailable, setSAvailabilityState] = useState([]);

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
  const fetchAvailable = async (mealId) => {
    console.log("mealId: " + mealId);
    try {
      const response = await fetch(
        `https://meal-sharing-final-backend.onrender.com/meals/${mealId}/available-reservations`
      );
      if (!response.ok) throw new Error("Failed to fetch availability");
      const data = await response.json();
      console.log("Fetched availability:", data); // Check structure of this data
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
          setLoading(false); // Stop loading after fetch completes
        } else {
          setLoading(false); // Stop loading even if fetch fails
        }
      });

      fetchReviews(currentMealId).then((review) => setReviews(review));

      fetchAvailable(currentMealId).then((availability) =>
        setSAvailabilityState(availability)
      );
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

  const ToggleAddReview = () => {
    setIsOpenAddReviewPart((prev) => !prev);
  };
  const ToggleReserves = () => {
    setIsOpenReserve((prev) => !prev);
  };

  // Calculate remaining reservations if the meal and availability are fetched
  const remainingReservations = isAvailable
    ? calculateRemainingReservations(isAvailable, singleMeal?.max_reservations)
    : null;
  return (
    <>
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
            {loading ? (
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
                  priority={true}
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
                <Typography>Price: {singleMeal.price} DKK</Typography>

                {/* Display Remaining Reservations */}
                <Typography variant="body1">
                  Reservations left:{" "}
                  {remainingReservations !== null
                    ? remainingReservations
                    : "Calculating..."}
                </Typography>

                <Typography
                  variant="h6"
                  color="textSecondary"
                  sx={{
                    color: remainingReservations > 0 ? "green" : "red", // Change color based on availability
                    fontWeight: "bold",
                  }}
                >
                  Status:{" "}
                  {remainingReservations > 0 ? "Available" : "Not Available"}
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
                onClick={ToggleReserves}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                {isOpenReserve ? "Hide" : "Reserve"}
              </Button>
            )}
            <Button
              onClick={handleToggleReviews}
              variant="outlined"
              sx={{ mt: 2 }}
            >
              {isOpenReviews ? "Hide Reviews" : "Show Reviews"}
            </Button>
            {user && (
              <Button
                onClick={ToggleAddReview}
                variant="outlined"
                sx={{ mt: 2 }}
              >
                {!openAddReviewPart ? "Add Reviews" : "Hide"}
              </Button>
            )}
            {openAddReviewPart && (
              <Box>
                <Modal2 mealId={currentMealId} />
              </Box>
            )}
            {isOpenReserve && <ReserveBox mealId={currentMealId} />}
          </Box>
        </Modal>
      )}

      {isOpenReviews && <ReviewBox reviews={reviews} />}
    </>
  );
}
