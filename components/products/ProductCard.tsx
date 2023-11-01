import { FC, useState } from "react";
import NextLink from "next/link";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { IProducts } from "@/interfaces";

interface Props {
  product: IProducts;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} prefetch={false}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={
                isHovered
                  ? `/products/${product.images[1]}`
                  : `/products/${product.images[0]}`
              }
              alt={product.title}
              className="fadeIn"
              onLoad={() => setIsImageLoaded(true)}
            />
          </CardActionArea>
        </NextLink>
      </Card>

      <Box className="fadeIn" sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}>
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{"$" + product.price}</Typography>
      </Box>
    </Grid>
  );
};
