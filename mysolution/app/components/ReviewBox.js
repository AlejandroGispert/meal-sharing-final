import styles from "../page.module.css";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useAuth } from "../../AuthContext";

export default function ({ reviews }) {
  const { user } = useAuth();
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
      }}
    >
      <Typography variant="h6">Reviews</Typography>
      {reviews && reviews.length > 0 ? (
        reviews.map((review, index) => (
          <Box key={index} sx={{ mt: 2 }}>
            <Typography variant="body1">{review.title}</Typography>
            <Typography variant="body2">* {review.description}</Typography>
            <Typography variant="body2">* {review.stars}</Typography>
            {/* {user && <Typography> review owner</Typography>} */}
          </Box>
        ))
      ) : (
        <Typography>No Reviews Available</Typography>
      )}
    </Box>
  );
}
