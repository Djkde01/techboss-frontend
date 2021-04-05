import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ProductCard from "@components/ProductCard/ProductCard";

import productsList from "@mockdata/productList.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "auto",
    justifyContent: "center",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ProductsDashboard = () => {
  const styles = useStyles();
  return (
    <Grid container className={styles.root} spacing={10}>
      {productsList.map((product) => (
        <Grid item key={product.id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsDashboard;
