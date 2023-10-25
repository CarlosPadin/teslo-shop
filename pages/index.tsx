import { Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { ProductsList } from "@/components/products";
import { initialData } from "@/database/products";

export default function Home() {
  return (
    <>
      <ShopLayout
        title={"Teslo-Shop - Home"}
        pageDescription={"Find the best Teslo Products Here"}
      >
        <Typography variant="h1" component="h1">
          Store
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          All products
        </Typography>

        <ProductsList products={initialData.products as any} />
      </ShopLayout>
    </>
  );
}
