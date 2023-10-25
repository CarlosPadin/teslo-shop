import { ShopLayout } from "@/components/layouts";
import { Chip, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';
import Link from "next/link";


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullName', headerName: 'Name', width: 300},

    {
        field: 'paid',
        headerName: 'Paid',
        description: 'Show if the order was paid',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return (
                params.row.paid 
                ? <Chip color='success' label='Paid' variant="outlined" />
                : <Chip color='error' label='Not Paid' variant="outlined" />
            )
        },
    },
    {
        field: 'orderId',
        headerName: 'orderId',
        width: 200,
        renderCell: () => {
            return (
                <Link href={'/orders/123465'} style={{ color: 'inherit' }}>Ver Orden</Link>
            )
        }
    }
];

const rows: GridRowsProp = [
    {id: 1, orderId: "123abc", paid: true, fullName: 'Carlos Padin'},
    {id: 2, orderId: "123abc", paid: false, fullName: 'Sophia Dominguez'},
    {id: 3, orderId: "123abc", paid: false, fullName: 'Carlos Perez'},
    {id: 4, orderId: "123abc", paid: true, fullName: 'Victor Perez'},
    {id: 5, orderId: "123abc", paid: false, fullName: 'Carlos Borrego'},
    {id: 6, orderId: "123abc", paid: true, fullName: 'Sara Cordero'},
    {id: 7, orderId: "123abc", paid: false, fullName: 'Jose Garcia'},
]

const HistoryPage = () => {
  return (
    <ShopLayout title="History Page" pageDescription="History page for orders">
        <Typography variant="h1" component='h1'>
            Orders History
        </Typography>

        <Grid container>
            <Grid item xs={12} sx={{ height: 650, widthh: '100%' }}>
                <DataGrid columns={columns} rows={rows} pageSizeOptions={[10]} />

            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default HistoryPage;
