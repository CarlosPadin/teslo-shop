import { Divider, Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>Number of products</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Subtotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{'$' + 165 }</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Tax (15%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{'$' + 10 }</Typography>
        </Grid>

        <Grid item xs={6} sx={{ mt: 2}}>
            <Typography variant="subtitle1">Total</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 2}}>
            <Typography variant="subtitle1">{'$' + 175 }</Typography>
        </Grid>

    </Grid>
  )
}

