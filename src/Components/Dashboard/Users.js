
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import InfoDialogSlide from './Users/Dialog';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Users() {
    const [userDetailsDialog, openUserDetailsDialog] = useState()
    const [userDetails, setUserDetails] = useState({id: '', lastName: '', firstName: '', age: 1 })


    const onCellClick = (params) => {
        openUserDetailsDialog(true)
        setUserDetails(params.row)
        console.log(params.row)
    }
  return (
    <Container>
    <Box sx={{ height: 635, width: '100%' , my: 10}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        onCellClick={onCellClick}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
      />
    </Box>
    {userDetailsDialog && <InfoDialogSlide 
    open= {userDetailsDialog} 
    openUserDetailsDialog={openUserDetailsDialog}
    user={userDetails}/>}
    </Container>
  );
}