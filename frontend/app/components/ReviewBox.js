import styles from "../page.module.css";
import { Modal, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useAuth } from "../../AuthContext";

export default function ReviewsModal({ reviews }) {
  const { user } = useAuth();

  // Function to render stars based on the review rating
  const renderStars = (rating) => {
    return (
      <Box>
        {Array.from({ length: 5 }).map((_, index) =>
          index < rating ? (
            <StarIcon key={index} sx={{ color: "#FFD700" }} />
          ) : (
            <StarBorderIcon key={index} sx={{ color: "#FFD700" }} />
          )
        )}
      </Box>
    );
  };

  // Function to validate reviews
  const validateReview = (review) => {
    const errors = [];

    // Validate review title (non-empty, reasonable length)
    if (!review.title || review.title.length < 3 || review.title.length > 100) {
      errors.push("Review title must be between 3 and 100 characters.");
    }

    // Validate review description (non-empty)
    if (!review.description || review.description.length < 5) {
      errors.push("Review description must be at least 5 characters long.");
    }

    // Validate rating (between 1 and 5)
    if (
      typeof review.stars !== "number" ||
      review.stars < 1 ||
      review.stars > 5
    ) {
      errors.push("Review rating must be a number between 1 and 5.");
    }

    return errors;
  };

  return (
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
        zIndex: 5,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Reviews
      </Typography>

      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => {
          const errors = validateReview(review);

          return errors.length === 0 ? (
            <Box
              key={index}
              sx={{
                mb: 3,
                p: 2,
                borderRadius: 1,
                border: "1px solid #ddd",
                bgcolor: "#f9f9f9",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {review.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                {review.description}
              </Typography>
              {/* Render the stars */}
              {renderStars(review.stars)}
              {user && (
                <Typography
                  variant="caption"
                  sx={{ color: "#888", mt: 1, display: "block" }}
                >
                  Reviewed by {user.name || "Anonymous"}
                </Typography>
              )}
            </Box>
          ) : (
            <Typography key={index} sx={{ color: "red", mb: 2 }}>
              Invalid review: {errors.join(" ")}
            </Typography>
          );
        })
      ) : (
        <Typography>No Reviews Available</Typography>
      )}
    </Box>
  );
}
