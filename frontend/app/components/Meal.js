import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../page.module.css";

export default function Meal({ meal, index, handleOpenModal }) {
  return (
    <Card className={styles.gridCard}>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", padding: 2, fontWeight: "bold" }}
      >
        {meal.title}
      </Typography>
      <Avatar
        alt={meal.title}
        src={meal.image_url ? meal.image_url : "./images/empty.jpg"}
        sx={{ width: 100, height: 100, margin: "auto" }}
      />
      <CardContent>
        <Typography variant="body1">
          Reservations: {meal.max_reservations}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Price: {meal.price} DKK
        </Typography>
      </CardContent>
      <Button
        key={index}
        variant="contained"
        color="primary"
        onClick={() => handleOpenModal(meal.id)} // Fix here: Pass function to onClick
      >
        See meal#{meal.id}
      </Button>
    </Card>
  );
}
