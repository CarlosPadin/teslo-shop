import { FC, useContext } from "react";
import Link from "next/link";

import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ItemCounter } from "../ui";
import { ICartProduct } from "@/interfaces";
import { CartContext } from "@/context";

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {
  const { cart, updateCartQuantity, removeCartProduct } =
    useContext(CartContext);

  const updateQuantityValue = (
    product: ICartProduct,
    newQuantityValue: number
  ) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };

  const onRemove = (product: ICartProduct) => {
    removeCartProduct(product);
  };

  return (
    <>
      {cart.map((product) => (
        <Grid
          container
          spacing={2}
          key={product.slug + product.size}
          sx={{ mb: 1 }}
        >
          <Grid item xs={3}>
            <Link href={`/product/${product.slug}`}>
              <CardActionArea>
                <CardMedia
                  image={`/products/${product.image}`}
                  component="img"
                  sx={{ borderRadius: "5px" }}
                />
              </CardActionArea>
            </Link>
          </Grid>

          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Size: <b>{product.size}</b>
              </Typography>

              {editable ? (
                <ItemCounter
                  currentValue={product.quantity}
                  maxValue={5}
                  updateQuantity={(value) =>
                    updateQuantityValue(product, value)
                  }
                />
              ) : (
                <Box display="flex">
                  <Typography variant="subtitle1">
                    {product.quantity}
                  </Typography>
                  <Typography variant="subtitle1" ml={1}>
                    {product.quantity === 1 ? "item" : "items"}
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography>{"$" + product.price * product.quantity}</Typography>
            {editable && (
              <Button
                variant="text"
                color="secondary"
                onClick={() => onRemove(product)}
              >
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
