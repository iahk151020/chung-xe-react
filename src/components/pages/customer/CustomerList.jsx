import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Grid from '@material-ui/core/Grid';
import React, { createElement } from 'react';
import './CustomerList.css';
import { Link } from 'react-router-dom';

const columns = [
  { id: 'stt', label: 'STT', minWidth: 170 },
  { id: 'customerName', label: 'Tên khách hàng', minWidth: 170 },
  { id: 'phoneNumber', label: 'Số điện thoại', minWidth: 170 },
  {id: 'address', label: 'Địa chỉ', minWidth: 170},
  { id: 'detail', label: 'Xem chi tiết thông tin', minWidth: 170 },
  { id: 'rentingTurn', label: 'Các lượt thuê xe', minWidth: 170 }
];

function createData(stt, customerName, phoneNumber, address) {
  return {stt, customerName, phoneNumber, address};
}

function CustomerList() {

  let [page, setPage] = React.useState(0);
  let [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };  

   React.useEffect(() => {
        fetch("http://localhost:8080/api/v1/customers/customer-list", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            setRows(data.map((item, index) => createData(index + 1, item.fullName, item.phoneNumber, item.address)));
        });
    }, []);

 
  return (

    
    <div className='customer-list'>
      <div className="title">Danh sách khách hàng</div>
      <div className="table">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                
                                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                                  {columns.map((column) => {
                                      if (column.id == 'detail'){
                                          return (
                                              <TableCell>
                                                  {<Link to={`customer-detail/?customer_name=${row.customerName}`}>Xem</Link>}
                                              </TableCell>
                                          )
                                      } else if(column.id == 'rentingTurn'){
                                         return (<TableCell>
                                            {<Link to={`renting-turns/?customer_name=${row.customerName}`}>Xem</Link>}
                                        </TableCell>);
                                      } else {
                                          const value = row[column.id];
                                          return (    
                                                  <TableCell key={column.id} align={column.align}>
                                                  {column.format && typeof value === 'number'
                                                      ? column.format(value)
                                                      : value}
                                                  </TableCell>                                      
                                          );
                                      }
                                  })}
                              </TableRow>
                                
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
    </div>
  )
}

export default CustomerList