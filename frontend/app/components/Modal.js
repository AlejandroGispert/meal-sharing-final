"use client";
import styles from "../page.module.css";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import ReviewBox from "./ReviewBox";
import { useAuth } from "../../AuthContext";
import Modal2 from "./Modal2";
import ReserveBox from "./ReserveBox";
import CloseIcon from "@mui/icons-material/Close";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AddIcon from "@mui/icons-material/Add";
import ReserveIcon from "@mui/icons-material/EventAvailable";
import DescriptionIcon from "@mui/icons-material/Description";
import PlaceIcon from "@mui/icons-material/Place";
import PeopleIcon from "@mui/icons-material/People";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CircularProgress from "@mui/material/CircularProgress";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const calculateRemainingReservations = (
  reservations,
  maxReservationsFromMeal
) => {
  if (!Array.isArray(reservations)) {
    console.error("Invalid reservations data:", reservations);
    return maxReservationsFromMeal || 0;
  }

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

  const maxReservations =
    maxReservationsFromMeal || reservations[0]?.max_reservations || 0;

  const remainingReservations = maxReservations - totalGuests;

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
  const [isClosing, setIsClosing] = useState(false); // Track modal closing state

  const { user } = useAuth();

  // Fetch meal data, reviews, and availability
  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setSingleMeal(null);

      fetchDataSingle(currentMealId).then((meal) => {
        if (meal) {
          setSingleMeal(Array.isArray(meal) ? meal[0] : meal);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });

      fetchReviews(currentMealId).then((review) => setReviews(review));
      fetchAvailable(currentMealId).then((availability) =>
        setSAvailabilityState(availability)
      );
    }
  }, [isOpen, currentMealId]);

  const fetchDataSingle = async (mealId) => {
    try {
      const response = await fetch(
        `https://meal-sharing-final-backend.onrender.com/meals/${mealId}`
      );
      if (!response.ok) throw new Error("Failed to fetch meal data");
      const data = await response.json();
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
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchAvailable = async (mealId) => {
    try {
      const response = await fetch(
        `https://meal-sharing-final-backend.onrender.com/meals/${mealId}/available-reservations`
      );
      if (!response.ok) throw new Error("Failed to fetch availability");
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const handleCloseModal = () => {
    setIsClosing(true); // Trigger fade-out animation

    setTimeout(() => {
      setIsOpen(false); // Close the modal after animation
      setIsMoved(false);
      setBackdropVisible(true);
      setIsOpenReviews(false);
      setIsClosing(false); // Reset closing state
    }, 400); // Duration of fade-out animation
  };

  const handleToggleReviews = () => {
    setIsOpenReviews((prev) => !prev);
    setIsMoved((prev) => !prev);
    setBackdropVisible(false);

    if (!isOpenReviews) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const ToggleAddReview = () => {
    setIsOpenAddReviewPart((prev) => !prev);
  };

  const ToggleReserves = () => {
    setIsOpenReserve((prev) => !prev);
  };

  const remainingReservations = isAvailable
    ? calculateRemainingReservations(isAvailable, singleMeal?.max_reservations)
    : null;

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        disablePortal={true}
        hideBackdrop={!backdropVisible}
        className={`${styles.modal} ${isClosing ? styles.fadeOut : ""}`} // Apply fade-out class
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: isMoved ? "30%" : "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            transition: "left 0.5s ease",
            borderRadius: 2,
          }}
        >
          <IconButton onClick={handleCloseModal} className={styles.closeButton}>
            <CloseIcon />
          </IconButton>

          {loading ? (
            <Typography>
              Loading...
              <CircularProgress />
            </Typography>
          ) : singleMeal ? (
            <>
              <Typography variant="h6" component="h2">
                Meal: {singleMeal.title}
              </Typography>
              <Image
                alt={singleMeal.title}
                src={singleMeal.image_url || "./images/empty.jpg"}
                width={300}
                height={300}
                layout="intrinsic"
                priority={true}
              />
              <Typography sx={{ mt: 2 }}>
                <DescriptionIcon sx={{ mr: 1 }} />
                Description: {singleMeal.description}
              </Typography>
              <Typography variant="body1">
                <PlaceIcon sx={{ mr: 1 }} />
                Place: {singleMeal.location}
              </Typography>
              <Typography variant="body1">
                <PeopleIcon sx={{ mr: 1 }} />
                Max Reservations: {singleMeal.max_reservations}
              </Typography>
              <Typography variant="body1">
                <PriceCheckIcon sx={{ mr: 1 }} />
                Price: {singleMeal.price} DKK
              </Typography>

              <Typography variant="body1">
                <EventSeatIcon sx={{ mr: 1 }} />
                Reservations left:{" "}
                {remainingReservations !== null
                  ? remainingReservations
                  : "Calculating..."}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: remainingReservations > 0 ? "green" : "red",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {remainingReservations > 0 ? (
                  <>
                    <CheckCircleIcon sx={{ mr: 1 }} />
                    Status: Available
                  </>
                ) : (
                  <>
                    <CancelIcon sx={{ mr: 1 }} />
                    Status: Not Available
                  </>
                )}
              </Typography>
            </>
          ) : (
            <Typography>Failed to load meal data</Typography>
          )}

          {user && (
            <Button
              onClick={ToggleReserves}
              variant="outlined"
              startIcon={<ReserveIcon />}
              sx={{ mt: 2 }}
            >
              {isOpenReserve ? "Hide" : "Reserve"}
            </Button>
          )}
          <Button
            onClick={handleToggleReviews}
            variant="outlined"
            startIcon={isOpenReviews ? <VisibilityOffIcon /> : <ReviewsIcon />}
            sx={{ mt: 2 }}
          >
            {isOpenReviews ? "Hide Reviews" : "Show Reviews"}
          </Button>
          {user && (
            <Button
              onClick={ToggleAddReview}
              startIcon={
                openAddReviewPart ? <VisibilityOffIcon /> : <AddIcon />
              }
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

      {isOpenReviews && <ReviewBox reviews={reviews} />}
    </>
  );
}
