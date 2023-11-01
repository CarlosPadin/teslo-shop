import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { ShopLayout } from "@/components/layouts";
import { SizeSelector, SlideShow } from "@/components/products";
import { ItemCounter } from "@/components/ui";
import { IProducts } from "@/interfaces";
import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { dbProducts } from '@/database';

interface Props {
  product: IProducts;
}

// const product = initialData.products[0];

const ProductPage: NextPage<Props> = ({ product }) => {


  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        {/* SlideShow */}
        <Grid item xs={12} sm={7}>
          <SlideShow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* Titulos */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2" fontSize={22}>
              {"$" + product.price}
            </Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle1">Items</Typography>
              <ItemCounter />
              <SizeSelector sizes={product.sizes} />
            </Box>

            {/* Carrito */}
            <Button color="secondary" className="cicular-btn">
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

// No usar SSR
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug } = params as {slug: string};

//   const product = await dbProducts.getProductBySlug(slug);

  // if(!product) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     }
  //   }
  // }

//   return {
//     props: {
//       product,
//     }
//   }
// }

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productSlugs = await dbProducts.getAllProductsBySlug();

  return {
    paths: productSlugs.map(({slug}) => ({
      params: {
        slug
      }
    })),
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params}) => {
  const { slug = ''} = params as {slug: string};

  const productsBySlug = await dbProducts.getProductBySlug(slug);

  if(!productsBySlug) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      product: productsBySlug,
    },
    revalidate: 84600,
  }
}