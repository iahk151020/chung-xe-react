import React from 'react'
import './billByCar.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const columns = [
    { id: 'stt', label: 'STT', minWidth: 170 },
    { id: 'billId', label: 'Mã hóa đơn', minWidth: 170 },
    { id: 'carId', label: 'ID xe', minWidth: 170 },
    {id: 'createdAt', label: 'Tạo lúc', minWidth: 170},
    { id: 'action', label: 'Action', minWidth: 170 }
  ];
  
function createData(stt, billId, carId, createdAt) {
    return {stt, billId, carId, createdAt};
}


  
function BillByCar() {
    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState([]);

    const params = useParams().car_id.split(/[=&\s]/);
    const [ci, carId, sd, startDate, ed, endDate] = [...params];

    React.useEffect(() => {
        fetch(`http://localhost:8080/api/v1/bills/car?carId=${carId}&startDate=${startDate}&endDate=${endDate}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setRows(data.map((item, index) => createData(index + 1, item.id, item.carId, item.createAt)));
        })
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
   
    return (    
    <div className='billByCar'>
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
                                    if (column.id == 'action'){
                                        return (
                                            <TableCell>
                                                {<Link to={`/admin/bills?bill_id=${row.billId}`} >Xem chi tiết hóa đơn</Link>}
                                            </TableCell>
                                        )
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
  )
}

export default BillByCar
