import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: "auto",
  },
  content: {
    padding: 24,
  },
  media: {
    height: 151,
  },
  actions: {
    justifyContent: "center",
  },
}));

const ProductCard = ({ id, productImage, productName, ...props }) => {
  const styles = useStyles();
  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        image={productImage}
        title="Imagen producto"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {productName}
        </Typography>
      </CardContent>
      <CardActions className={styles.actions}>
        <Button variant="contained" color="primary">
          Ver
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

ProductCard.defaultProps = {
  id: 0,
  productImage:
    "https://i.picsum.photos/id/834/151/151.jpg?hmac=vpknYQxyVDupPYDk1Tn0LplegEWI7Fnl-5Nzo34lCvQ",
  productName: "Producto Mock",
};
