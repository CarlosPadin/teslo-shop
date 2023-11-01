import { GetServerSideProps, NextPage } from "next";

import { Box, Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { ProductsList } from "@/components/products";
import { dbProducts } from "@/database";
import { IProducts } from "@/interfaces";
import { useProducts } from "@/hooks";

interface Props {
  products: IProducts[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <>
      <ShopLayout
        title={"Teslo-Shop - Search"}
        pageDescription={"Searched Teslo Products Here"}
      >
        <Typography variant="h1" component="h1">
          Search
        </Typography>
        {foundProducts ? (
          <Typography variant="h2" sx={{ mb: 1 }}>
            Products: {query}
          </Typography>
        ) : (
          <Box display="flex">
            <Typography variant="h2" sx={{ mb: 1 }}>
              Not founded products: 
            </Typography>
            <Typography variant="h2" sx={{ ml: 1 }} fontWeight='bold' textTransform='capitalize'>
              {query}
            </Typography>
          </Box>
        )}

        <ProductsList products={products} />
      </ShopLayout>
    </>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};
