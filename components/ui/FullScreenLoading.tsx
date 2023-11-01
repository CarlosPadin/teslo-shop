import { Box, CircularProgress, Typography } from "@mui/material";

export const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
    <Typography variant="h4" marginRight={2}>Loading</Typography>
    <CircularProgress thickness={3} />
    </Box>
  );
};

