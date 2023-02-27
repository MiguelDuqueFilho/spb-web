import { useState } from 'react';
import {
  TheList,
  ListItem,
  ListImage,
  EditButton,
  MyDeleteOutline,
} from './styles';

import { Link } from 'react-router-dom';
import { productRows } from '../../components/dummyData';
import { DataGrid } from '@material-ui/data-grid';

export const ProductList = () => {
  const [data, setData] = useState(productRows);
  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params: any) => {
        return (
          <ListItem>
            <ListImage src={params.row.img} alt="image" />
            {params.row.name}
          </ListItem>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <EditButton>Edit</EditButton>
            </Link>
            <MyDeleteOutline onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  return (
    <TheList>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </TheList>
  );
};
