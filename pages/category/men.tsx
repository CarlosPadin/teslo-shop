import { NextPage } from "next";

import { Typography } from "@mui/material";
import { useProducts } from "@/hooks";

import { ShopLayout } from "@/components/layouts";
import { ProductsList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";


const MenPage: NextPage = () => {

 const {products, error, isLoading} = useProducts('/products?gender=men');
 
  if (error) return <div>failed to load</div>

  return (
    <>
      <ShopLayout
        title={"Teslo-Shop - Men"}
        pageDescription={"Men Teslo Products Here"}
      >
        <Typography variant="h1" component="h1">
          Store
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Men products
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

export default MenPage;