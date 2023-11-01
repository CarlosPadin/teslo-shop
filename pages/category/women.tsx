import { NextPage } from "next";

import { Typography } from "@mui/material";
import { useProducts } from "@/hooks";

import { ShopLayout } from "@/components/layouts";
import { ProductsList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";


const WomenPage: NextPage = () => {

 const {products, error, isLoading} = useProducts('/products?gender=women');
 
  if (error) return <div>failed to load</div>

  return (
    <>
      <ShopLayout
        title={"Teslo-Shop - Women"}
        pageDescription={"Women Teslo Products Here"}
      >
        <Typography variant="h1" component="h1">
          Store
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Women products
        </Typography>

        {
          isLoading 
          ? <FullScreenLoading />
          : <ProductsList products={products} />
        }

      </ShopLayout>
    </>
  );
}

export default WomenPage;
