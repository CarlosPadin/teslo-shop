import { Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { ProductsList } from "@/components/products";
import { useProducts } from "@/hooks";
import { FullScreenLoading } from "@/components/ui";

export default function Home() {
  const { products, error, isLoading } = useProducts("/products");

  if (error) return <div>failed to load</div>;

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

        {isLoading ? (
          <FullScreenLoading />
        ) : (
          <ProductsList products={products} />
        )}
      </ShopLayout>
    </>
  );
}
