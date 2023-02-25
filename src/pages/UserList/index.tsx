import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { userRows } from '../../components/dummyData';
import {
  EditButton,
  ListImage,
  ListItem,
  MyDeleteOutline,
  TheList,
} from './styles';

export const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params: any) => (
        <ListItem>
          <ListImage src={params.row.avatar} alt="image" />
          {params.row.username}
        </ListItem>
      ),
    },

    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <EditButton primary>Edit</EditButton>
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
        columns={columns}
        rows={data}
        disableSelectionOnClick
        pageSize={10}
        checkboxSelection
      />
    </TheList>
  );
};
