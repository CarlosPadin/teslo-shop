import { ShopLayout } from "@/components/layouts";
import { SizeSelector, SlideShow } from "@/components/products";
import { ItemCounter } from "@/components/ui";
import { initialData } from "@/database/products";
import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout
      title={product.title}
      pageDescription={product.description}
    >
      <Grid container spacing={3}>
        {/* SlideShow */}
        <Grid item xs={12} sm={7}>
          <SlideShow images={ product.images }/>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>

          {/* Titulos */}
          <Typography variant="h1" component='h1'>{product.title}</Typography>
          <Typography variant="subtitle1" component='h2' fontSize={22}>{'$' + product.price}</Typography>

          {/* Cantidad */}
          <Box sx={{ my: 2}}>
            <Typography variant="subtitle1">Items</Typography>
            <ItemCounter />
            <SizeSelector sizes={product.sizes} />
          </Box>

          {/* Carrito */}
          <Button color="secondary" className="cicular-btn" >
            Add to Cart
          </Button>
          {/* <Chip label='No available items' color="error" variant="outlined" /> */}
          
          {/* Descripcion */}
          <Box mt={3}>
            <Typography variant="subtitle1">Description</Typography>
            <Divider variant="fullWidth" />
            <Typography variant="body2">{product.description}</Typography>
          </Box>
          
          </Box>
        </Grid>
      </Grid>

    </ShopLayout>
  );
};

export default ProductPage;
