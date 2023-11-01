import { NextPage } from "next";

import { Typography } from "@mui/material";
import { useProducts } from "@/hooks";

import { ShopLayout } from "@/components/layouts";
import { ProductsList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";


const KidsPage: NextPage = () => {

 const {products, error, isLoading} = useProducts('/products?gender=kid');
 
  if (error) return <div>failed to load</div>

  return (
    <>
      <ShopLayout
        title={"Teslo-Shop - Kids"}
        pageDescription={"Kids Teslo Products Here"}
      >
        <Typography variant="h1" component="h1">
          Store
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Kids products
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

export default KidsPage;
