import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";

const Custom404 = () => {
  return (
    <ShopLayout pageDescription="404 Error" title="Page not Found">
      <Box
        display='flex'
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: {xs: 'column', sm: 'row'}}}
      >
        <Typography variant="h1" component="h1">
          404 |
        </Typography>
        <Typography sx={{ ml: {xs: 0, sm: 2}}} >Page not Found</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
